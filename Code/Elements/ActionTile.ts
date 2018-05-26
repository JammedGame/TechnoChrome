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
        this.Position = new TBX.Vertex(Data.X, Data.Y).Scalar(TILE_SIZE).Add(new TBX.Vertex(0,0,0.1));
        this.Collection = ActionTile._Sets[Data.Col];
        this.Index = Data.SetT;
        this.Material.Sampling = TBX.TextureSamplingType.Nearest;
        this.Collision.Type = TBX.CollisionType.Rectangular;
        if(Data.SetT == 1)
        {
            this.Collision.Scale = new TBX.Vertex(TILE_SIZE-20,TILE_SIZE-70);
        }
        if(Data.SetT == 4)
        {
            this.Collision.Type = TBX.CollisionType.Horizontal;
            this.Collision.Scale = new TBX.Vertex(TILE_SIZE-70,TILE_SIZE-20);
        }
        else if (Data.SetT == 0 || Data.SetT == 2 || Data.SetT == 3 || Data.SetT == 5)
        {
            this.Collision.Scale = new TBX.Vertex(TILE_SIZE-70,TILE_SIZE-70);
        }
    }
    public static InitSets()
    {
        this._Sets = {};
        this._Sets["Tec"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 12; i++) this._Sets["Tec"].Images.push("Resources/Textures/Tiles/Tileset01/tileset01_"+i+".png");
        this._Sets["Pipe"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 12; i++) this._Sets["Pipe"].Images.push("Resources/Textures/Tiles/Tileset02/tileset2_"+i+".png");
    }
}