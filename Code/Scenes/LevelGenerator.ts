export { LevelGenerator }

import * as TBX from "engineer-js";

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
        this._Sets = {};
        this._Sets["Tec"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 12; i++) this._Sets["Tec"].Images.push("Resources/Textures/Tiles/Tec"+0+".png");
    }
    public GenerateHorizontal(Collection:string, Position:TBX.Vertex, Length:number)
    {
        this._Scene.Attach(this.GenerateTile(0, Collection, Position));
        for(let i = 1; i < Length; i++) this._Scene.Attach(this.GenerateTile(1, Collection, Position.Copy().Add(new TBX.Vertex(i * TILE_SIZE))));
        this._Scene.Attach(this.GenerateTile(2, Collection, Position.Copy().Add(new TBX.Vertex(Length * TILE_SIZE))))
    }
    public GenerateVertical(Collection:string, Position:TBX.Vertex, Length:number)
    {
        this._Scene.Attach(this.GenerateTile(5, Collection, Position));
        for(let i = 1; i < Length; i++) this._Scene.Attach(this.GenerateTile(4, Collection, Position.Copy().Add(new TBX.Vertex(0, - i * TILE_SIZE))));
        this._Scene.Attach(this.GenerateTile(3, Collection, Position.Copy().Add(new TBX.Vertex(0, -Length * TILE_SIZE))))
    }
    public GenerateTile(Type:number, Collection:string, Position:TBX.Vertex) : TBX.Tile
    {
        let Tile:TBX.Tile = new TBX.Tile();
        Tile.Name = "Tile";
        Tile.Collision.Active = true;
        Tile.Size = new TBX.Vertex(TILE_SIZE,TILE_SIZE);
        Tile.Position = Position.Copy().Add(new TBX.Vertex(0,0,0.1));
        Tile.Collection = this._Sets[Collection];
        Tile.Index = Type;
        Tile.Material.Sampling = TBX.TextureSamplingType.Nearest;
        Tile.Collision.Type = TBX.CollisionType.Rectangular;
        Tile.Collision.Scale = new TBX.Vertex(TILE_SIZE,TILE_SIZE-70); //TODO Determine Collision Shape
        if(Type == 0 || Type == 1 || Type == 2) Tile.Collision.Type = TBX.CollisionType.Vertical;
        if(Type == 3 || Type == 4 || Type == 5) Tile.Collision.Type = TBX.CollisionType.Horizontal;
        return Tile;
    }
}