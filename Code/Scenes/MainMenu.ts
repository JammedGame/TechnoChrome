export { MainMenu }; 
 
import * as TBX from "toybox-engine";
 
import { GameScene } from "./GameScene";
import { Parallax } from "./../Elements/Parallax";
 
class MainMenu extends TBX.Scene2D 
{ 
    private _Game:any; 
    private _Runner:any;
    private _Parallax:Parallax; 
    public constructor(Runner:any, Game:any) 
    { 
        super(); 
        this._Game = Game; 
        this._Runner = Runner; 
        this.Init(); 
    } 
    public Init() : void 
    { 
        this.Name = "Menu";
        this._Parallax = new Parallax();
        this.Attach(this._Parallax);
        let Title = TBX.SceneObjectUtil.CreateTile("Title", ["Resources/Textures/Title.png"], new TBX.Vertex(960, 250, 0.1), new TBX.Vertex(500, 120, 1));
        Title.Fixed = true;
        this.Attach(Title);
        let Buttons:any = new TBX.ImageCollection(null, ["Resources/Textures/Play.png", "Resources/Textures/Credits.png"]); 
        let Play:any = new TBX.Tile(); 
        Play.Name = "Play"; 
        Play.Fixed = true;
        Play.Collection = Buttons; 
        Play.Index = 0;
        Play.Size = new TBX.Vertex(350, 80, 1); 
        Play.Position = new TBX.Vertex(960, 650, 0.1); 
        Play.Events.MouseDown.push(this.PlayClick.bind(this)); 
        this.Events.Update.push(this.Update.bind(this));
        let Credits:any = new TBX.Tile(); 
        Credits.Name = "Credits"; 
        Credits.Fixed = true;
        Credits.Collection = Buttons; 
        Credits.Index = 1;
        Credits.Size = new TBX.Vertex(350, 80, 1); 
        Credits.Position = new TBX.Vertex(960, 850, 0.1); 
        Credits.Events.MouseDown.push(this.CreditsClick.bind(this)); 
        this.Attach(Credits);
        this.Attach(Play);
    }
    public Update() : void
    {
        this.Trans.Translation.X -= 3;
        this._Parallax.Update();
    }
    public PlayClick(G:TBX.Game, Args:any) : void 
    { 
        for(let i in G.Scenes)
        {
            if(G.Scenes[i].Name == "Game")
            {
                G.Remove(G.Scenes[i]);
                break;
            }
        }
        let Scene = new GameScene(); 
        this._Game.Attach(Scene); 
        this._Runner.SwitchScene("Game", false); 
    } 
    public CreditsClick(G:any, Args:any) : void 
    { 
        this._Runner.SwitchScene("Credits", false); 
    } 
}