export { ActionTile }

import * as TBX from "engineer-js";

const TILE_SIZE = 192;

class ActionTile extends TBX.Tile
{
    private static _Sets:any;
    public constructor(Old?:ActionTile, Data?:any)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            if(Data) this.Init(Data);
        }
    }
    public Copy() : ActionTile
    {
        return new ActionTile(this);
    }
    private Init(Data:any) : void
    {
        if(!ActionTile._Sets) ActionTile.InitSets();
        this.Name = "Tile";
        this.Collision.Active = true;
        this.Size = new TBX.Vertex(TILE_SIZE,TILE_SIZE);
        this.Position = new TBX.Vertex(Data.X, Data.Y).Scalar(TILE_SIZE).Add(new TBX.Vertex(0,0,0.2));
        this.Collection = ActionTile._Sets[Data.S];
        this.Index = Data.T;
        this.Material.Sampling = TBX.TextureSamplingType.Nearest;
        this.Collision.Type = TBX.CollisionType.Rectangular;
        if(Data.S == "Wall")
        {
            this.Collision.Active = false;
            return;
        }
        if(Data.T == 1)
        {
            this.Collision.Scale = new TBX.Vertex(TILE_SIZE-20,TILE_SIZE-70);
        }
        if(Data.T == 4)
        {
            this.Collision.Type = TBX.CollisionType.Horizontal;
            this.Collision.Scale = new TBX.Vertex(TILE_SIZE-70,TILE_SIZE-20);
        }
        else if (Data.T == 0 || Data.T == 2 || Data.T == 3 || Data.T == 5)
        {
            this.Collision.Scale = new TBX.Vertex(TILE_SIZE-70,TILE_SIZE-70);
        }
        if(Data.S = "Pipe" && (Data.T > 7 && Data.T < 12))
        {
            console.log("?");
            this.Collision.Type == TBX.CollisionType.Radius;
        }
        
    }
    public static InitSets()
    {
        this._Sets = {};
        this._Sets["Tec"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 12; i++) this._Sets["Tec"].Images.push("Resources/Textures/Tiles/Tileset01/tileset01_"+i+".png");
        this._Sets["Pipe"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 12; i++) this._Sets["Pipe"].Images.push("Resources/Textures/Tiles/Tileset02/tileset2_"+i+".png");
        this._Sets["Wall"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 9; i++) this._Sets["Wall"].Images.push("Resources/Textures/Tiles/Tileset00/tileset0_"+i+".png");
    }
}