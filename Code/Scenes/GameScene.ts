export { GameScene };

import * as TBX from "engineer-js";

import { Player } from "./../Elements/Player";
import { Parallax } from "./../Elements/Parallax";
import { LevelGenerator } from "./LevelGenerator";
import { ColorModel } from "./../Elements/ActionTile";

class GameScene extends TBX.Scene2D
{
    private _Player:Player;
    private _Parallax:Parallax;
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
        this._Parallax = new Parallax();
        this.Attach(this._Parallax);
        this._Generator = new LevelGenerator(null, this);
        this.InitLevel();
        //this.GenerateBackground();
        this.Events.KeyDown.push(this.KeyDown.bind(this));
        this.Events.KeyUp.push(this.KeyUp.bind(this));
        this.Events.Update.push(this.Update.bind(this));
    }
    private Update()
    {
        this._Player.Update();
        this._Parallax.Update();
    }
    private KeyDown(G:TBX.Game, Args:any) : void
    {
        this._Player.KeyDown(Args.KeyCode);
        if(Args.KeyCode == 49)
        {
            this._Parallax.UpdateFilter(ColorModel.Red);
            this._Generator.UpdateFilter(ColorModel.Red);
        }
        if(Args.KeyCode == 50)
        {
            this._Parallax.UpdateFilter(ColorModel.Blue);
            this._Generator.UpdateFilter(ColorModel.Blue);
        }
        if(Args.KeyCode == 51)
        {
            this._Parallax.UpdateFilter(ColorModel.Yellow);
            this._Generator.UpdateFilter(ColorModel.Yellow);
        }
    }
    private KeyUp(G:TBX.Game, Args:any) : void
    {
        this._Player.KeyUp(Args.KeyCode);
    }
    private InitLevel() : void
    {
        /*this._Generator.GenerateVertical("Pipe", new TBX.Vertex(2,7), 4);
        this._Generator.GenerateHorizontal("Pipe", new TBX.Vertex(2,8), 5);
        this._Generator.GenerateHorizontal("Pipe", new TBX.Vertex(10,8), 3);
        this._Generator.GenerateHorizontal("Pipe", new TBX.Vertex(13,6), 3);
        this._Generator.GenerateHorizontal("Pipe", new TBX.Vertex(18,4), 3);
        this._Generator.GenerateHorizontal("Pipe", new TBX.Vertex(21,8), 40);
        this._Generator.GenerateHorizontal("Pipe", new TBX.Vertex(62,8), 40);*/
        this._Generator.CreateLevel();
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