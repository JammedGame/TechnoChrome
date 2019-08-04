export { ColorModel, ActionTile }

import * as TBX from "toybox-engine";

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
        if(Data.SP == "Misc") this.Position.Y += 20;
        this.Collection = ActionTile._Sets[Data.SP];
        this.Index = Data.T;
        this.Material.Sampling = TBX.TextureSamplingType.Nearest;
        this.Collision.Type = TBX.CollisionType.Rectangular;
        if(Data.SP == "Wall" || Data.SP == "Misc")
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
        else this.Collision.Scale = new TBX.Vertex(TILE_SIZE-70,TILE_SIZE-70);
        if(Data.SP = "Pipe" && (Data.T > 7 && Data.T < 12))
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
        for(let i = 0; i < 16; i++) this._Sets["Tec"].Images.push("Resources/Textures/Tiles/Tileset01/tileset01_"+i+".png");
        this._Sets["Tecg"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 16; i++) this._Sets["Tecg"].Images.push("Resources/Textures/Tiles/Tileset01g/tileset01_"+i+".png");
        this._Sets["Pipe"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 16; i++) this._Sets["Pipe"].Images.push("Resources/Textures/Tiles/Tileset02a/tileset2_"+i+".png");
        this._Sets["Pipeg"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 16; i++) this._Sets["Pipeg"].Images.push("Resources/Textures/Tiles/Tileset02g/tileset2_"+i+".png");
        this._Sets["Brick"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 16; i++) this._Sets["Brick"].Images.push("Resources/Textures/Tiles/Tileset03/brick"+i+".png");
        this._Sets["Brickg"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 16; i++) this._Sets["Brickg"].Images.push("Resources/Textures/Tiles/Tileset03g/brick"+i+".png");
        this._Sets["Nesto"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 16; i++) this._Sets["Nesto"].Images.push("Resources/Textures/Tiles/Tileset04/nesto"+i+".png");
        this._Sets["Nestog"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 16; i++) this._Sets["Nestog"].Images.push("Resources/Textures/Tiles/Tileset04g/nesto"+i+".png");
        this._Sets["Misc"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 9; i++) this._Sets["Misc"].Images.push("Resources/Textures/Tiles/Tileset0X/misc"+i+".png");
        this._Sets["Wall"] = new TBX.ImageCollection(null, []);
        for(let i = 0; i < 10; i++) this._Sets["Wall"].Images.push("Resources/Textures/Tiles/Tileset00/tileset0_"+i+".png");
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
        else if(Current == ColorModel.Orange)
        {
            this.Collision.Active = this._Model == ColorModel.Red || this._Model == ColorModel.Yellow || this._Model == ColorModel.Orange;
        }
        else if(Current == ColorModel.Purple)
        {
            this.Collision.Active = this._Model == ColorModel.Red || this._Model == ColorModel.Blue || this._Model == ColorModel.Purple;
        }
        else if(Current == ColorModel.Green)
        {
            this.Collision.Active = this._Model == ColorModel.Blue || this._Model == ColorModel.Yellow || this._Model == ColorModel.Green;
        }
        else this.Collision.Active = <ColorModel>Current == this._Model;
        if(Current == ColorModel.Default)
        {
            if(this._Model == ColorModel.Invisible) this.Paint = TBX.Color.FromString("#888888");
            else
            {
                this.Paint = TBX.Color.FromString(this.ColorByModel(this._Model));
                this.Paint.A = 120;
            }
        }
        else if(this.Collision.Active)
        {
            this.Paint = TBX.Color.FromString(this.ColorByModel(Current));
        }
        else
        {
            if(this._Model == ColorModel.Invisible) this.Paint = TBX.Color.FromString("#888888");
            else
            {
                this.Paint = TBX.Color.FromString(this.ColorByModel(this._Model));
                this.Paint.A = 120;
            }
        }
        this.Modified = true;
    }
    private ColorByModel(Model:ColorModel) : string
    {
        if(Model == ColorModel.Default) return "#FFFFFF";
        if(Model == ColorModel.Invisible) return "#888888";
        if(Model == ColorModel.Red) return "#ED2939"
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
        if(Model == ColorModel.Red) return "#DD8888";
        if(Model == ColorModel.Blue) return "#8888FF";
        if(Model == ColorModel.Yellow) return "#FFFF88";
        if(Model == ColorModel.Purple) return "#FF88FF";
        if(Model == ColorModel.Green) return "#88FF88";
        if(Model == ColorModel.Orange) return "#FFCC88";
    }
}