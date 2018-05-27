export { Parallax }

import * as TBX from "engineer-js";

import { ColorModel } from "./../Elements/ActionTile";

class Parallax extends TBX.Tile
{
    private _Scene:TBX.Scene;
    private _Layer1_1:TBX.Tile;
    private _Layer1_2:TBX.Tile;
    private _Layer2_1:TBX.Tile;
    private _Layer2_2:TBX.Tile;
    private _Layer3_1:TBX.Tile;
    private _Layer3_2:TBX.Tile;
    public constructor(Old?:Parallax)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this.Init();
        }
    }
    public Copy() : Parallax
    {
        return new Parallax(this);
    }
    private Init() : void
    {
        this.Fixed = true;
        this.Position = new TBX.Vertex(960,540,0);
        this.Size = new TBX.Vertex(1920, 1080, 0);
        this.Paint = TBX.Color.FromString("#FFFFFF");
        this._Layer1_1 = this.CreateLayer("Resources/Textures/Backgrounds/Background3.png", "#666666");
        this._Layer1_2 = this.CreateLayer("Resources/Textures/Backgrounds/Background3.png", "#666666", true);
        this._Layer2_1 = this.CreateLayer("Resources/Textures/Backgrounds/Background2.png", "#999999");
        this._Layer2_2 = this.CreateLayer("Resources/Textures/Backgrounds/Background2.png", "#999999", true);
        this._Layer3_1 = this.CreateLayer("Resources/Textures/Backgrounds/Background1.png", "#CCCCCC");
        this._Layer3_2 = this.CreateLayer("Resources/Textures/Backgrounds/Background1.png", "#CCCCCC", true);
    }
    public Update() : void
    {
        let XOffset = -(<TBX.Scene2D>this._Scene).Trans.Translation.X;
        this._Layer3_1.Position.X = 960 - XOffset / 4;
        while(this._Layer3_1.Position.X + 960 < 0) this._Layer3_1.Position.X += 1920;
        this._Layer3_2.Position.X = this._Layer3_1.Position.X + 1920;
        this._Layer2_1.Position.X = 960 - XOffset / 10;
        while(this._Layer2_1.Position.X + 960 < 0) this._Layer2_1.Position.X += 1920;
        this._Layer2_2.Position.X = this._Layer2_1.Position.X + 1920;
        this._Layer1_1.Position.X = 960 - XOffset / 30;
        while(this._Layer1_1.Position.X + 960 < 0) this._Layer1_1.Position.X += 1920;
        this._Layer1_2.Position.X = this._Layer1_1.Position.X + 1920;
    }
    private CreateLayer(Image:string, Color:string, Offset?:boolean) : TBX.Tile
    {
        let Layer:TBX.Tile = new TBX.Tile();
        Layer.Fixed = true;
        Layer.Collection = new TBX.ImageCollection(null, [Image]);
        Layer.Index = 0;
        Layer.Size = new TBX.Vertex(1920,1080,1);
        Layer.Paint = TBX.Color.FromString(Color);
        Layer.Position = new TBX.Vertex((Offset)?2880:960,540,0.1);
        return Layer;
    }
    public OnAttach(Args:any) : void
    {
        this._Scene = Args.Scene;
        this._Scene.Attach(this._Layer1_1);
        this._Scene.Attach(this._Layer1_2);
        this._Scene.Attach(this._Layer2_1);
        this._Scene.Attach(this._Layer2_2);
        this._Scene.Attach(this._Layer3_1);
        this._Scene.Attach(this._Layer3_2);
    }
    public UpdateFilter(Current:ColorModel)
    {
        this.Paint = TBX.Color.FromString("#FFFFFF");
        if(Current == ColorModel.Red) this.Paint = TBX.Color.Red;
        if(Current == ColorModel.Blue) this.Paint = TBX.Color.Blue;
        if(Current == ColorModel.Yellow) this.Paint = TBX.Color.Yellow;
        if(Current == ColorModel.Purple) this.Paint = TBX.Color.Purple;
        if(Current == ColorModel.Orange) this.Paint = TBX.Color.FromString("#FF7F50");
        if(Current == ColorModel.Green) this.Paint = TBX.Color.Green;
        this.Modified = true;
    }
}