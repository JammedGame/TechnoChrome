export { GameLogic };

import * as TBX from "engineer-js";

import { MainMenu } from "./Scenes/MainMenu";
import { GameOver } from "./Scenes/GameOver";
import { Credits } from "./Scenes/Credits";
import { GameScene } from "./Scenes/GameScene";
import { GameSuccess } from "./Scenes/GameSuccess";
import { SoundManager } from "./SoundManager";

class GameLogic
{
    private _Game:any;
    private _Runner:any;
    public constructor()
    {
        this._Game = new TBX.Game();
        this._Game.Name = "TechnoChrome";
        SoundManager.Init();
        this._Runner = new TBX.Runner(this._Game, TBX.DrawEngineType.ThreeJS);
        this._Runner.SetResolution(new TBX.Vertex(1920, 1080, 0));
        this._Game.Attach(new MainMenu(this._Runner, this._Game));
        this._Game.Attach(new GameOver(this._Runner, this._Game));
        this._Game.Attach(new Credits(this._Runner, this._Game));
        this._Game.Attach(new GameSuccess(this._Runner, this._Game));
    }
    public Run() : void
    {
        this._Runner.SwitchScene("Menu");
        this._Runner.Run();
    }
}