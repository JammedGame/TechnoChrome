export { ColorPower }

import * as TBX from "engineer-js";

import { Player } from "./Player";
import { ColorModel } from "./../Elements/ActionTile";

class ColorPower extends TBX.Tile
{
    private _Picked:boolean;
    private _Model:ColorModel;
    public constructor(Old?:ColorPower, Position?:TBX.Vertex, Model?:ColorModel)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this.Init(Position, Model);
        }
    }
    public Copy() : ColorPower
    {
        return new ColorPower(this);
    }
    public Update() : void
    {
        if(this._Picked) return;
        if(TBX.Vertex.Distance(Player.Single.Position, this.Position) < 100)
        {
            this._Picked = true;
            this.Active = false;
            Player.Single.Power.Enable(this._Model);
        }
    }
    private Init(Position:TBX.Vertex, Model:ColorModel) : void
    {
        this._Model = Model;
        this.Collection = new TBX.ImageCollection(null, ["Resources/Textures/Misc/ColorPower.png"]);
        this.Index = 0;
        this.Size = new TBX.Vertex(96,96,1);
        this.Position = Position.Scalar(192);
        this.Position.Z = 0.3;
        this.Paint = TBX.Color.FromString(this.ColorByModel(Model));
    }
    private ColorByModel(Model:ColorModel) : string
    {
        if(Model == ColorModel.Red) return "#FF0000";
        if(Model == ColorModel.Blue) return "#0000FF";
        if(Model == ColorModel.Yellow) return "#FFFF00";
    }
}