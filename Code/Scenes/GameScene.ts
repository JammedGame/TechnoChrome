export { GameScene };

import * as TBX from "engineer-js";

import { Player } from "./../Elements/Player";
import { LevelGenerator } from "./LevelGenerator";

class GameScene extends TBX.Scene2D
{
    private _Player:Player;
    private _Generator:LevelGenerator;
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
        this._Player = new Player(null, this);
        this._Generator = new LevelGenerator(null, this);
        this.InitLevel();
        this.GenerateBackground();
        this.Events.KeyDown.push(this.KeyDown.bind(this));
        this.Events.KeyUp.push(this.KeyUp.bind(this));
        this.Events.Update.push(this.Update.bind(this));
    }
    private Update()
    {
        this._Player.Update();
    }
    private KeyDown(G:TBX.Game, Args:any) : void
    {
        this._Player.KeyDown(Args.KeyCode);
    }
    private KeyUp(G:TBX.Game, Args:any) : void
    {
        this._Player.KeyUp(Args.KeyCode);
    }
    private InitLevel() : void
    {
        this._Generator.GenerateHorizontal("Tec", new TBX.Vertex(600,800), 6);
        this._Generator.GenerateVertical("Tec", new TBX.Vertex(600,600), 6);
        this._Generator.GenerateHorizontal("Tec", new TBX.Vertex(2200,650), 6);
    }
    protected GenerateBackground() : void
    {
        this.BackColor = TBX.Color.FromRGBA(0, 0, 0, 255);
        let Backs:TBX.ImageCollection = new TBX.ImageCollection(null, ["Resources/Textures/Backgrounds/Back.png"]);
        let Back:TBX.Tile = new TBX.Tile();
        Back.Name = "Back";
        Back.Collection = Backs;
        Back.Index = 0;
        Back.Fixed = true;
        Back.Size = new TBX.Vertex(1920,1080,0);
        Back.Position = new TBX.Vertex(960,540,0);
        Back.Material.Sampling = TBX.TextureSamplingType.Nearest;
        this.Attach(Back);
    }

}