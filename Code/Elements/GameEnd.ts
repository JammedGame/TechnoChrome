export { GameEnd }

import * as TBX from "toybox-engine";

import { Player } from "./Player";
import { SoundManager } from "./../SoundManager";

class GameEnd extends TBX.Tile
{
    private _Picked:boolean;
    public constructor(Old?:GameEnd, Position?:TBX.Vertex)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this.Init(Position);
        }
    }
    public Copy() : GameEnd
    {
        return new GameEnd(this);
    }
    public Update() : void
    {
        if(this._Picked) return;
        if(TBX.Vertex.Distance(Player.Single.Position, this.Position) < 200)
        {
            SoundManager.PlaySpecial();
            this._Picked = true;
            this.Active = false;
            TBX.Runner.Current.Game.Data["SF"] = Player.Single.SecretsFound;
            TBX.Runner.Current.SwitchScene("GameSuccess");
        }
    }
    private Init(Position:TBX.Vertex) : void
    {
        this.Collection = new TBX.ImageCollection(null, ["Resources/Textures/Misc/Secret1.png"]);
        this.Index = 0;
        this.Size = new TBX.Vertex(192,192,1);
        this.Position = Position.Scalar(192);
        this.Position.Z = 0.3;
    }
}