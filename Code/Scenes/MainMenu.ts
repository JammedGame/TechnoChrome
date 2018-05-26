export { MainMenu }; 
 
import * as TBX from "engineer-js";
 
import { GameScene } from "./GameScene"; 
 
class MainMenu extends TBX.Scene2D 
{ 
    private _Game:any; 
    private _Runner:any; 
    public constructor(Runner:any, Game:any) 
    { 
        super(); 
        this._Game = Game; 
        this._Runner = Runner; 
        this.Init(); 
    } 
    public Init() : void 
    { 
        this. GenerateBackground();
        this.Name = "Menu"; 
        let Buttons:any = new TBX.ImageCollection(null, ["/Resources/Textures/Play.png"]); 
        let Play:any = new TBX.Tile(); 
        Play.Name = "Play"; 
        Play.Collection = Buttons; 
        Play.Index = 0; 
        Play.Size = new TBX.Vertex(250, 150, 1); 
        Play.Position = new TBX.Vertex(960, 650, 0.1); 
        Play.Events.MouseDown.push(this.PlayClick.bind(this)); 
        this.Attach(Play);
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
    public PlayClick(G:any, Args:any) : void 
    { 
        console.log("ddsada");
        let Scene = new GameScene(); 
        this._Game.Attach(Scene); 
        this._Runner.SwitchScene("Game", false); 
    } 
}