export { ColorModel, ActionTile }

import * as TBX from "engineer-js";

const TILE_SIZE = 192;

enum ColorModel
{
    Default = 0,
    Invisible = 1,
    Red = 2,
    Blue = 3,
    Yellow = 4,
    Purple = 5,
    Orange = 6,
    Green = 7
}

class ActionTile extends TBX.Tile
{
    private static _Sets:any;
    private _Data:any;
    private _Model:ColorModel;
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
        this._Data = Data;
        this._Model = <ColorModel>Data.C;
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
            this.Collision.Type == TBX.CollisionType.Radius;
        }
        this.ApplyColorModel(ColorModel.Default);
        //this.Paint = TBX.Color.FromString(this.ColorByModel(this._Model));
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
    public ApplyColorModel(Current:ColorModel)
    {
        if(this._Model == ColorModel.Default) return;
        if(this._Model == ColorModel.Invisible) this.Collision.Active = false;
        else if(Current == ColorModel.Red)
        {
            this.Collision.Active = this._Model == ColorModel.Red || this._Model == ColorModel.Purple || this._Model == ColorModel.Orange;
        }
        else if(Current == ColorModel.Blue)
        {
            this.Collision.Active = this._Model == ColorModel.Blue || this._Model == ColorModel.Purple || this._Model == ColorModel.Green;
        }
        else if(Current == ColorModel.Yellow)
        {
            this.Collision.Active = this._Model == ColorModel.Yellow || this._Model == ColorModel.Orange || this._Model == ColorModel.Green;
        }
        else this.Collision.Active = Current == this._Model;
        if(Current == ColorModel.Default)
        {
            if(this._Model == ColorModel.Invisible) this.Paint = TBX.Color.FromString("#888888");
            else
            {
                this.Paint = TBX.Color.FromString(this.HalfColorByModel(this._Model));
            }
        }
        else if(this.Collision.Active)
        {
            console.log("aa");
            this.Paint = TBX.Color.FromString(this.ColorByModel(Current));
        }
        else
        {
            this.Paint = TBX.Color.FromString("#888888");
        }
        this.Modified = true;
    }
    private ColorByModel(Model:ColorModel) : string
    {
        if(Model == ColorModel.Default) return "#FFFFFF";
        if(Model == ColorModel.Invisible) return "#888888";
        if(Model == ColorModel.Red) return "#FF0000";
        if(Model == ColorModel.Blue) return "#0000FF";
        if(Model == ColorModel.Yellow) return "#FFFF00";
        if(Model == ColorModel.Purple) return "#FF00FF";
        if(Model == ColorModel.Green) return "#00FF00";
        if(Model == ColorModel.Orange) return "#FF6600";
    }
    private HalfColorByModel(Model:ColorModel) : string
    {
        if(Model == ColorModel.Default) return "#FFFFFF";
        if(Model == ColorModel.Invisible) return "#888888";
        if(Model == ColorModel.Red) return "#FF8888";
        if(Model == ColorModel.Blue) return "#8888FF";
        if(Model == ColorModel.Yellow) return "#FFFF88";
        if(Model == ColorModel.Purple) return "#FF88FF";
        if(Model == ColorModel.Green) return "#88FF88";
        if(Model == ColorModel.Orange) return "#FFCC88";
    }
}