export { Player }

import * as TBX from "engineer-js";

class Player extends TBX.Sprite
{
    private _Jump:boolean;
    private _Left:boolean;
    private _Right:boolean;
    private _Flipped:boolean;
    private _Scene:TBX.Scene2D;
    private _Velocity:TBX.Vertex;
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
        }
    }
    public Update()
    {
        TBX.CollisionUtil.Check(this, this._Scene);
        if(!this.Collision.Result.Bottom)
        {
            this._Velocity.Y += 1;
            if(!this._Jump) this.UpdS("Fall");
        }
        else if(this._Velocity.Y > 0)
        {
            // Landing
            this._Velocity.Y = 0;
            if(!this._Jump) this.UpdS("Idle");
        }
        if(this._Left)
        {
            this._Velocity.X = -10;
            if(this.Collision.Result.Left)
            this._Velocity.X = 0;
            for(let i in this.Collision.Result.LeftColliders)
            {
                if(this.Collision.Result.LeftColliders[i].Data["SideCollision"])
                {
                    this._Velocity.X = 0;
                    break;
                }
            }
            if(!this._Jump) this.UpdS("Run");
        }
        else if(this._Right)
        {
            this._Velocity.X = 10;
            if(this.Collision.Result.Right)
            this._Velocity.X = 0;
            for(let i in this.Collision.Result.RightColliders)
            {
                if(this.Collision.Result.RightColliders[i].Data["SideCollision"])
                {
                    this._Velocity.X = 0;
                    break;
                }
            }
            if(!this._Jump) this.UpdS("Run");
        }
        else
        {
            this._Velocity.X = 0;
            if(!this._Jump && this._Velocity.Y == 0) this.UpdS("Idle");
        }
        this.Position.Add(this._Velocity);
        this._Scene.Trans.Translation.Add(this._Velocity.Copy().Scalar(-1));
    }
    public KeyDown(KeyCode:number) : void
    {
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
    }
    public KeyUp(KeyCode:number) : void
    {
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
            this._Velocity.Y = -25;
            this._Jump = false;
        }
    }
    public Init() : void
    {
        this._Velocity = new TBX.Vertex();
        this.Size = new TBX.Vertex(256,256,1);
        this.Position = new TBX.Vertex(960, 500, 0.2);
        this.Collision.Type = TBX.CollisionType.Horizontal;
        this.Collision.Scale = new TBX.Vertex(150, 256, 1);
        let IdleSet:TBX.SpriteSet = new TBX.SpriteSet(null, [], "Idle");
        IdleSet.Seed = 15;
        this.LoadSet("Idle", 2, 15);
        this.LoadSet("Run", 8);
        this.LoadSet("Jump", 3);
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