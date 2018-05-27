export { PowerModel }

import { ColorModel } from "./ActionTile";

class PowerModel
{
    private _RedE:boolean;
    private _BlueE:boolean;
    private _YellowE:boolean;
    private _RedA:boolean;
    private _BlueA:boolean;
    private _YellowA:boolean;
    public constructor(Old?:PowerModel)
    {
        if(Old)
        {

        }
        else
        {
            this.Init();
        }
    }
    public Copy() : PowerModel
    {
        return new PowerModel(this);
    }
    private Init() : void
    {
        this._RedE = false;
        this._BlueE = false;
        this._YellowE = false;
        this._RedA = false;
        this._BlueA = false;
        this._YellowA = false;
    }
    public Apply(Model:ColorModel)
    {
        if(Model == ColorModel.Red && this._RedE && !(this._BlueE && this._YellowA)) this._RedA = !this._RedA;
        if(Model == ColorModel.Blue && this._BlueE && !(this._RedE && this._YellowA)) this._BlueA = !this._BlueA;
        if(Model == ColorModel.Yellow && this._YellowE && !(this._BlueE && this._RedA)) this._YellowA = !this._YellowA;
    }
    public Get() : ColorModel
    {
        if(this._RedA && !this._BlueA && !this._YellowA) return ColorModel.Red;
        if(!this._RedA && this._BlueA && !this._YellowA) return ColorModel.Blue;
        if(!this._RedA && !this._BlueA && this._YellowA) return ColorModel.Yellow;
        if(this._RedA && this._BlueA && !this._YellowA) return ColorModel.Purple;
        if(this._RedA && !this._BlueA && this._YellowA) return ColorModel.Orange;
        if(!this._RedA && this._BlueA && this._YellowA) return ColorModel.Green;
        else return ColorModel.Default;
    }
    public Enable(Model:ColorModel) : void
    {
        if(Model == ColorModel.Red) this._RedE = true;
        if(Model == ColorModel.Blue) this._BlueE = true;
        if(Model == ColorModel.Yellow) this._YellowE = true;
    }
}