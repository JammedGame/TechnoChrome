export { Projectile }

import * as TBX from "toybox-engine";

import { Player } from "./Player";

class Projectile extends TBX.Tile
{
    private _Deactivated:boolean;
    private _Speed:number;
    private _Scene:TBX.Scene2D;
    private static _Col:TBX.ImageCollection;
    public get Deactivated():boolean { return this._Deactivated; }
    public constructor(Old?:Projectile, Scene?:TBX.Scene2D, Position?:TBX.Vertex, Speed?:number)
    {
        super(Old);
        this._Scene = Scene;
        this._Scene.Attach(this);
        if(Old)
        {

        }
        else
        {
            this.Init(Position, Speed);
        }
    }
    private Init(Position:TBX.Vertex, Speed:number)
    {
        if(!Projectile._Col) Projectile._Col = new TBX.ImageCollection(null, ["Resources/Textures/Misc/Projectile.png"]);
        this.Collection = Projectile._Col;
        this.Index = 0;
        this.Position = Position;
        this.Size = new TBX.Vertex(64,64,1);
        this._Speed = Speed;
    }
    public Update()
    {
        this.Position.X += this._Speed;
        TBX.CollisionUtil.Check(this, this._Scene);
        if(this.Collision.Result.Collision)
        {
            this._Deactivated = true;
            this.Active = false;
        }
        if(!Player.Single.Dead && TBX.Vertex.Distance(Player.Single.Position, this.Position) < 100)
        {
            this._Deactivated = true;
            this.Active = false;
            Player.Single.Kill();
        }
    }
}