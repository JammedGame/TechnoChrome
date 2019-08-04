export { LevelGenerator }

import * as TBX from "toybox-engine";

import { ColorModel, ActionTile } from "./../Elements/ActionTile";

import { Secret } from "./../Elements/Secret";
import { ColorPower } from "./../Elements/ColorPower";
import { Enemy } from "./../Elements/Enemy";
import { GameEnd } from "./../Elements/GameEnd";

import { Chunk1, Chunk2, Chunk3, Chunk4, Chunk4a, Chunk4b, Chunk5, Chunk6, Chunk6a, TallBrickWall, Chunk4bSecret, Chunk1Secret, DeathFloorChunk, FinalChunk } from "./LevelData";

const TILE_SIZE = 192;

class LevelGenerator
{
    private _Sets:any;
    private _Scene:TBX.Scene2D;
    private _Secrets:Secret[];
    private _Enemies:Enemy[];
    private _Powers:any[];
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
    public Update()
    {
        for(let i in this._Powers)
        {
            this._Powers[i].Update();
        }
        for(let i in this._Secrets)
        {
            this._Secrets[i].Update();
        }
        for(let i in this._Enemies)
        {
            this._Enemies[i].Update();
        }
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
        if(Set == -2) return "Misc";
        if(Set == -1) return "Wall";
        if(Set == 0) return "Tec";
        if(Set == 1) return "Pipe";
        if(Set == 2) return "Brick";
        if(Set == 3) return "Nesto";
    }
    public CreateTile(Data:any) : void
    {
        Data.SP = this.DecodeSet(Data.S);
        if(Data.C > 1)
        {
            Data.SP += "g";
        }
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
        for(let i in Data.Powers)
        {
            let CPD = Data.Powers[i];
            if(CPD.C == -1)
            {
                let CP = new GameEnd(null, new TBX.Vertex(CPD.X + XOffset, CPD.Y + YOffset, 0));
                this._Scene.Attach(CP);
                this._Powers.push(CP);
            }
            else
            {
                let CP = new ColorPower(null, new TBX.Vertex(CPD.X + XOffset, CPD.Y + YOffset, 0), <ColorModel>CPD.C);
                this._Scene.Attach(CP);
                this._Powers.push(CP);
            }
        }
        for(let i in Data.Secrets)
        {
            let CPD = Data.Secrets[i];
            let CP = new Secret(null, new TBX.Vertex(CPD.X + XOffset, CPD.Y + YOffset, 0));
            this._Scene.Attach(CP);
            this._Secrets.push(CP);
        }
        for(let i in Data.Enemies)
        {
            let CPD = Data.Enemies[i];
            let CP = new Enemy(null, this._Scene, new TBX.Vertex(CPD.X + XOffset, CPD.Y + YOffset, 0));
            this._Enemies.push(CP);
        }
    }
    public CreateLevel()
    {
        this._Powers = [];
        this._Secrets = [];
        this._Enemies = [];
        this._Changeables = [];
        this.CreateChunk(Chunk1, 4, 0);
        this.CreateChunk(Chunk1Secret, -3, -5);
        this.CreateChunk(Chunk2, 24, 0);
        this.CreateChunk(Chunk3, 39, 0);
        this.CreateChunk(Chunk4, 49, -1);
        this.CreateChunk(Chunk4a, 65, 3);
        this.CreateChunk(Chunk4b, 75, -2);
        this.CreateChunk(Chunk4bSecret, 80, -4);
        this.CreateChunk(Chunk5, 88, -1);
        this.CreateChunk(TallBrickWall, 103, -9);
        this.CreateChunk(Chunk6, 103, 1);
        this.CreateChunk(Chunk6a, 110, 1);
        this.CreateChunk(FinalChunk, 120, 11);
        for(let i = -2; i < 25; i++)
        {
            this.CreateChunk(DeathFloorChunk, i*8, 40);
        }
    }
}