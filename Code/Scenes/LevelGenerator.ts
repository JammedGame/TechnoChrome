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
        this._Sets["Tec"] = new TBX.ImageCollection(null, ["Resources/Textures/Tiles/Tec0.png", "Resources/Textures/Tiles/Tec1.png", "Resources/Textures/Tiles/Tec2.png"]);
    }
    public GenerateHorizontal(Collection:string, Position:TBX.Vertex, Length:number)
    {
        this._Scene.Attach(this.GenerateTile(0, Collection, Position));
        for(let i = 1; i < Length; i++) this._Scene.Attach(this.GenerateTile(1, Collection, Position.Copy().Add(new TBX.Vertex(i * TILE_SIZE))));
        this._Scene.Attach(this.GenerateTile(2, Collection, Position.Copy().Add(new TBX.Vertex(Length * TILE_SIZE))))
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
        return Tile;
    }
}