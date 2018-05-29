export { SoundManager }

import * as TBX from "engineer-js";

class SoundManager
{
    public static Music:TBX.SoundObject;
    public static Death:TBX.SoundObject;
    public static Special:TBX.SoundObject;
    public static Jump:TBX.SoundObject;
    public static Switch:TBX.SoundObject;
    public static Init()
    {
        this.Music = new TBX.SoundObject("Resources/Sounds/Music.wav");
        this.Music.Volume = 30;
        this.Music.Looped = true;
        this.Music.Play();
        this.Death = new TBX.SoundObject("Resources/Sounds/Death.mp3");
        this.Death.Autoplay = false;
        this.Death.Looped = false;
        this.Special = new TBX.SoundObject("Resources/Sounds/Special.wav");
        this.Special.Autoplay = false;
        this.Special.Looped = false;
        this.Jump = new TBX.SoundObject("Resources/Sounds/Jump.wav");
        this.Jump.Autoplay = false;
        this.Jump.Looped = false;
        this.Switch = new TBX.SoundObject("Resources/Sounds/Switch.wav");
        this.Switch.Autoplay = false;
        this.Switch.Looped = false;
    }
    public static PlayDeath()
    {
        this.Death.Play();
    }
    public static PlaySpecial()
    {
        this.Special.Play();
    }
    public static PlayJump()
    {
        this.Jump.Play();
    }
    public static PlaySwitch()
    {
        this.Switch.Play();
    }
}