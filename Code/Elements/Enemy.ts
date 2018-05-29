export { Enemy }

import * as TBX from "engineer-js";

import { Player } from "./Player";

class Enemy extends TBX.Sprite
{
    public LeftPosMax:number;
    public RightPosMax:number;

    private _Landing:boolean;
    private _Death:boolean;
    private _Left:boolean;
    private _Right:boolean;
    private _Flipped:boolean;
    private _Scene:TBX.Scene2D;
    private _Velocity:TBX.Vertex;
    public constructor(Old?:Enemy, Scene?:TBX.Scene2D, Position?:TBX.Vertex)
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
            this.Init(Position);
        }
    }
    public Update()
    {
        if(this._Death) return;
        TBX.CollisionUtil.Check(this, this._Scene);
        this.Logic();
        if(!this.Collision.Result.Bottom)
        {
            this._Velocity.Y += 1;
            //if(!this._Death) this.UpdS("Idle"); // Fall
        }
        else if(this._Velocity.Y > 0)
        {
            // Landing
            if(this.Collision.Result.BottomColliders.length > 0)
            {
                let Collider = this.Collision.Result.BottomColliders[0];
                this.Position.Y = Collider.Position.Y - Collider.Scale.Y / 2 - this.Size.Y / 2 + 10;
            }
            if(this._Velocity.Y > 30)
            {
                this._Velocity.Y = 0;
                //this.UpdS("Death");
                this.Collision.Active = false;
                this._Death = true;
            }
            else
            {
                this._Landing = true;
                this._Velocity.Y = 0;
                //if(!this._Death) this.UpdS("Idle"); // Landing
            }
        }
        if(this._Left)
        {
            this._Velocity.X = -3;
            if(this.Collision.Result.Left)
            this._Velocity.X = 0;
            //if(!this._Landing && !this._Death) this.UpdS("Idle"); //Walk
        }
        else if(this._Right)
        {
            this._Velocity.X = 3;
            if(this.Collision.Result.Right)
            this._Velocity.X = 0;
            //if(!this._Landing && !this._Death) this.UpdS("Idle"); //Walk
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
            //if(!this._Landing && !this._Death && this.Collision.Result.Bottom) this.UpdS("Idle");
        }
        this.Position.Add(this._Velocity);
    }
    private Logic() : void
    {
        this._Left = false;
        this._Right = false;
        if(!this.Collision.Result.Bottom) return;
        this._Flipped = Player.Single.Position.X < this.Position.X;
        if(Math.abs(Player.Single.Position.X - this.Position.X) < 800)
        {
            if(this._Flipped) this._Left = true;
            else this._Right = true;
        }
    }
    private AnimationFinished() : void
    {
        if(this._Landing)
        {
            this._Landing = false;
        }
        if(this._Death)
        {
            this.UpdS("Dead");
        }
    }
    public Init(Position?:TBX.Vertex) : void
    {
        this._Velocity = new TBX.Vertex();
        this.Size = new TBX.Vertex(192,192,1);
        Position.Scalar(192);
        Position.Z = 0.4;
        this.Position = Position;
        this.Collision.Type = TBX.CollisionType.Rectangular;
        this.Collision.Scale = new TBX.Vertex(128, 192, 1);
        this.LoadSet("Idle", 4, 15);
        this.Events.SetComplete.push(this.AnimationFinished.bind(this));
        this.SetS("Idle");
    }
    private LoadSet(Name:string, Length:number, Seed?:number) : void
    {
        let LeftSet:TBX.SpriteSet = new TBX.SpriteSet(null, [], "Left_"+Name);
        if(Seed) LeftSet.Seed = Seed;
        for(let i = 0; i < Length; i++) LeftSet.Images.push("Resources/Textures/Enemy/Left/"+Name+i+".png");
        this.SpriteSets.push(LeftSet);
        let RightSet:TBX.SpriteSet = new TBX.SpriteSet(null, [], "Right_"+Name);
        if(Seed) RightSet.Seed = Seed;
        for(let i = 0; i < Length; i++) RightSet.Images.push("Resources/Textures/Enemy/Right/"+Name+i+".png");
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