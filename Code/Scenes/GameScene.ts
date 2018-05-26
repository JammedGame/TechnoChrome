export { GameScene };

import * as TBX from "engineer-js";

import { Player } from "./../Elements/Player";

class GameScene extends TBX.Scene2D
{
    protected _Player:Player;
    public get Player():Player { return this._Player; }
    public set Player(value:Player) { this._Player = value; }
    public constructor()
    {
        super();
        this.Init();
    }
    public Init() : void
    {
        // Virtual
        this.Name = "Game";
        this.GenerateBackground();
    }
    protected GenerateBackground() : void
    {
        this.BackColor = TBX.Color.FromRGBA(0, 0, 0, 255);
        let Backs:TBX.ImageCollection = new TBX.ImageCollection(null, ["Resources/Textures/Backgrounds/Back.png"]);
        let Back:TBX.Tile = new TBX.Tile();
        Back.Name = "Back";
        Back.Collection = Backs;
        Back.Index = 0;
        Back.Size = new TBX.Vertex(1920,1080,0);
        Back.Position = new TBX.Vertex(960,540,0);
        Back.Material.Sampling = TBX.TextureSamplingType.Nearest;
        this.Attach(Back);
    }
}