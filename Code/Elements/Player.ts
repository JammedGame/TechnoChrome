export { Player }

import * as TBX from "engineer-js";

import { PowerModel } from "./PowerModel";

class Player extends TBX.Sprite
{
    public static Single:Player;
    private _Jump:boolean;
    private _Landing:boolean;
    private _Death:boolean;
    private _Left:boolean;
    private _Right:boolean;
    private _Flipped:boolean;
    private _Scene:TBX.Scene2D;
    private _Velocity:TBX.Vertex;
    private _Power:PowerModel;
    private _SecretsFound:number;
    public get Dead():boolean { return this._Death; }
    public get SecretsFound() : number { return this._SecretsFound; }
    public set SecretsFound(value:number) { this._SecretsFound = value; }
    public get Power():PowerModel { return this._Power; }
    public constructor(Old?:Player, Scene?:TBX.Scene2D)
    {
        super(Old);
        this._Scene = Scene;
        this._Scene.Attach(this);
        if(Old)
        {
            this._Velocity = new TBX.Vertex();
        }
        else
        {
            this.Init();
            Player.Single = this;
        }
    }
    public Update()
    {
        TBX.CollisionUtil.Check(this, this._Scene);
        if(!this.Collision.Result.Bottom)
        {
            this._Velocity.Y += 1;
            if(!this._Jump && !this._Death) this.UpdS("Fall");
        }
        else if(this._Velocity.Y > 0)
        {
            // Landing
            if(this.Collision.Result.BottomColliders.length > 0)
            {
                let Collider = this.Collision.Result.BottomColliders[0];
                this.Position.Y = Collider.Position.Y - Collider.Scale.Y / 2 - this.Size.Y / 2 + 10;
                this._Scene.Trans.Translation = new TBX.Vertex(this._Scene.Trans.Translation.X, 540 - this.Position.Y);
            }
            if(this._Velocity.Y > 90)
            {
                this._Velocity.Y = 0;
                this.UpdS("Death");
                this._Death = true;
                this._Left = false;
                this._Right = false;
            }
            else
            {
                this._Landing = true;
                this._Velocity.Y = 0;
                if(!this._Jump && !this._Death) this.UpdS("Landing");
            }
        }
        if(this._Left)
        {
            this._Velocity.X = -10;
            if(this.Collision.Result.Left)
            this._Velocity.X = 0;
            if(!this._Jump && !this._Landing && !this._Death) this.UpdS("Run");
        }
        else if(this._Right)
        {
            this._Velocity.X = 10;
            if(this.Collision.Result.Right)
            this._Velocity.X = 0;
            if(!this._Jump && !this._Landing && !this._Death) this.UpdS("Run");
        }
        else if(this._Death && this._Velocity.X != 0)
        {
            if(this._Velocity.X < 0) this._Velocity.X += 0.1;
            else this._Velocity.X -= 0.1;
            if(Math.abs(this._Velocity.X) < 0.2) this._Velocity.X = 0;
        }
        else
        {
            this._Velocity.X = 0;
            if(!this._Jump && !this._Landing && !this._Death && this.Collision.Result.Bottom) this.UpdS("Idle");
        }
        this.Position.Add(this._Velocity);
        this._Scene.Trans.Translation.Add(this._Velocity.Copy().Scalar(-1));
    }
    public Kill()
    {
        this.UpdS("Death");
        this._Death = true;
        this._Left = false;
        this._Right = false;
    }
    public KeyDown(KeyCode:number) : void
    {
        if(this._Death) return;
        if(KeyCode == 32 && this.Collision.Result.Bottom)
        {
            this.SetS("Jump");
            this._Jump = true;
        }
        if(KeyCode == 65 || KeyCode == 37)
        {
            this._Left = true;
            this._Flipped = true;
        }
        else if(KeyCode == 68 || KeyCode == 39)
        {
            this._Right = true;
            this._Flipped = false;
        }
        else if(KeyCode == 88)
        {
            this.Kill();
        }
    }
    public KeyUp(KeyCode:number) : void
    {
        if(this._Death) return;
        if(KeyCode == 65 || KeyCode == 37)
        {
            this._Left = false;
        }
        else if(KeyCode == 68 || KeyCode == 39)
        {
            this._Right = false;
        }
    }
    private AnimationFinished() : void
    {
        if(this._Jump)
        {
            this._Velocity.Y = -28;
            this._Jump = false;
        }
        if(this._Landing)
        {
            this._Landing = false;
        }
        if(this._Death)
        {
            this.UpdS("Dead");
        }
    }
    public Init() : void
    {
        this._SecretsFound = 0;
        this._Power = new PowerModel();
        this._Velocity = new TBX.Vertex();
        this.Size = new TBX.Vertex(256,256,1);
        this.Position = new TBX.Vertex(960, 500, 0.3);
        this.Collision.Type = TBX.CollisionType.Rectangular;
        this.Collision.Scale = new TBX.Vertex(135, 256, 1);
        let IdleSet:TBX.SpriteSet = new TBX.SpriteSet(null, [], "Idle");
        IdleSet.Seed = 15;
        this.LoadSet("Idle", 2, 15);
        this.LoadSet("Run", 8);
        this.LoadSet("Death", 4, 15);
        this.LoadSet("Dead", 1);
        this.LoadSet("Jump", 3, 3);
        this.LoadSet("Landing", 3, 5);
        this.LoadSet("Fall", 1, 30);
        this.Events.SetComplete.push(this.AnimationFinished.bind(this));
        this.SetS("Idle");
    }
    private LoadSet(Name:string, Length:number, Seed?:number) : void
    {
        let LeftSet:TBX.SpriteSet = new TBX.SpriteSet(null, [], "Left_"+Name);
        if(Seed) LeftSet.Seed = Seed;
        for(let i = 0; i < Length; i++) LeftSet.Images.push("Resources/Textures/Character/Left/"+Name+i+".png");
        this.SpriteSets.push(LeftSet);
        let RightSet:TBX.SpriteSet = new TBX.SpriteSet(null, [], "Right_"+Name);
        if(Seed) RightSet.Seed = Seed;
        for(let i = 0; i < Length; i++) RightSet.Images.push("Resources/Textures/Character/Right/"+Name+i+".png");
        this.SpriteSets.push(RightSet);
    }
    private SetS(Name:string) : void
    {
        if(this._Flipped) this.SetSpriteSetByName("Left_"+Name);
        else this.SetSpriteSetByName("Right_"+Name);
    }
    private UpdS(Name:string) : void
    {
        if(this._Flipped) this.UpdateSpriteSetByName("Left_"+Name);
        else this.UpdateSpriteSetByName("Right_"+Name);
    }
}