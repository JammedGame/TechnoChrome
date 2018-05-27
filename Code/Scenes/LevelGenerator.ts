export { LevelGenerator }

import * as TBX from "engineer-js";

import { ColorModel, ActionTile } from "./../Elements/ActionTile";

import { Chunk1, Chunk2, Chunk3, Chunk4 } from "./LevelData";

const TILE_SIZE = 192;

class LevelGenerator
{
    private _Sets:any;
    private _Scene:TBX.Scene2D;
    private _Changeables:ActionTile[];
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
    public UpdateFilter(Current:ColorModel)
    {
        for(let i in this._Changeables)
        {
            this._Changeables[i].ApplyColorModel(Current);
        }
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
            T: Type,
            S: Collection,
            X: Position.X,
            Y: Position.Y
        };
        let Tile:ActionTile = new ActionTile(null, Data);
        return Tile;
    }
    private DecodeSet(Set:number) : string
    {
        if(Set == -1) return "Wall";
        if(Set == 0) return "Tec";
        if(Set == 1) return "Pipe";
    }
    public CreateTile(Data:any) : void
    {
        Data.S = this.DecodeSet(Data.S);
        let Tile:ActionTile = new ActionTile(null, Data);
        if(Data.C > 1) this._Changeables.push(Tile);
        this._Scene.Attach(Tile);
    }
    public CreateChunk(Data:any, XOffset:number, YOffset:number)
    {
        for(let i = 0; i < Data.X; i++)
        {
            for(let j = 0; j < Data.Y; j++)
            {
                let Dat = Data.Tiles[j * Data.X + i];
                if(!Dat) continue;
                Dat.X = i + XOffset;
                Dat.Y = j + YOffset;
                this.CreateTile(Dat);
            }
        }
    }
    public CreateLevel()
    {
        this._Changeables = [];
        this.CreateChunk(Chunk1, 4, 0);
        this.CreateChunk(Chunk2, 24, 0);
        this.CreateChunk(Chunk3, 39, 0);
        this.CreateChunk(Chunk4, 49, -1);
    }
}