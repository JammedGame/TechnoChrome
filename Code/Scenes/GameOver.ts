export { GameOver}; 

import * as TBX from "engineer-js";

import { GameScene } from "./GameScene";
import { Parallax } from "./../Elements/Parallax";

class GameOver extends TBX.Scene2D 
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
       this.Name = "GameOver";
       this._Parallax = new Parallax();
       this._Parallax.Darken();
       let Title = TBX.SceneObjectUtil.CreateTile("Title", ["Resources/Textures/GameOver.png"], new TBX.Vertex(960, 250, 0.3), new TBX.Vertex(500, 120, 1));
       Title.Fixed = true;
       this.Attach(Title);
       this.Attach(this._Parallax);
       let Buttons:any = new TBX.ImageCollection(null, ["Resources/Textures/Menu.png"]); 
       let Play:any = new TBX.Tile(); 
       Play.Name = "Menu"; 
       Play.Fixed = true;
       Play.Collection = Buttons; 
       Play.Index = 0;
       Play.Size = new TBX.Vertex(350, 80, 1); 
       Play.Position = new TBX.Vertex(960, 850, 0.1); 
       Play.Events.MouseDown.push(this.PlayClick.bind(this)); 
       this.Attach(Play);
       this.Events.Update.push(this.Update.bind(this));
   }
   public Update() : void
   {
       this.Trans.Translation.X -= 3;
       this._Parallax.Update();
   }
   public PlayClick(G:any, Args:any) : void 
   { 
       this._Runner.SwitchScene("Menu", false); 
   } 
}