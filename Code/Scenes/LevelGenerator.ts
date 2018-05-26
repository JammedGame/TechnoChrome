export { LevelGenerator }

import * as TBX from "engineer-js";

import { ActionTile } from "./../Elements/ActionTile";

const TILE_SIZE = 192;

class LevelGenerator
{
    private _Sets:any;
    private _Scene:TBX.Scene2D;
    public constructor(Old?:LevelGenerator, Scene?:TBX.Scene2D)
    {
        this._Scene = Scene;
        if(Old)
        {

        }
        else
        {
            this.Init();
        }
    }
    public Init()
    {
        
    }
    public GenerateHorizontal(Collection:string, Position:TBX.Vertex, Length:number)
    {
        this._Scene.Attach(this.GenerateTile(0, Collection, Position));
        for(let i = 1; i < Length - 1; i++) this._Scene.Attach(this.GenerateTile(1, Collection, Position.Copy().Add(new TBX.Vertex(i))));
        this._Scene.Attach(this.GenerateTile(2, Collection, Position.Copy().Add(new TBX.Vertex((Length-1)))))
    }
    public GenerateVertical(Collection:string, Position:TBX.Vertex, Length:number)
    {
        this._Scene.Attach(this.GenerateTile(5, Collection, Position));
        for(let i = 1; i < Length-1; i++) this._Scene.Attach(this.GenerateTile(4, Collection, Position.Copy().Add(new TBX.Vertex(0, - i))));
        this._Scene.Attach(this.GenerateTile(3, Collection, Position.Copy().Add(new TBX.Vertex(0, -(Length-1)))))
    }
    public GenerateTile(Type:number, Collection:string, Position:TBX.Vertex) : TBX.Tile
    {
        let Data =
        {
            SetT: Type,
            Col: Collection,
            X: Position.X,
            Y: Position.Y
        };
        let Tile:ActionTile = new ActionTile(null, Data);
        return Tile;
    }
}