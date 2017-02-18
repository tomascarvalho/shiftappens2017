import { Injectable } from '@angular/core';

@Injectable()
export class Service {

  audiosList: Array<any>;
  audio :any;
  snare :any;
  hihat :any;
  cchord :any;
  array = [2,2,2,1];
  array2 = [1,1,1,1 ];
  tempo = 0;

  constructor(){
    this.audiosList = new Array(Audio);
    this.audio = new Audio();
    this.snare = new Audio();
    this.hihat = new Audio();
    this.cchord = new Audio();

  }

  loadSound(){


    this.snare.src = "http://localhost:4200/samples/snare2.wav";
    this.snare.load();
    this.hihat.src = "http://localhost:4200/samples/hihat2.wav";
    this.hihat.load();
    this.cchord.src = "http://localhost:4200/samples/cchord.wav";
    this.cchord.load();
    setInterval(() => this.playSound(),500);
    setInterval(() => this.playSound2(),1000);

  }

   playSound(){
    if (this.array[this.tempo] == 1){
      this.playSnare();
      //console.log("playsnare");
    }
    else{
      this.playHiHat();
      //console.log("playhihat");
    }
    if(this.tempo == 3){
      this.tempo = 0;
    }
    else{
      this.tempo++;
    }
  }

     playSound2(){
      if (this.array2[this.tempo] == 1){
        this.playcchord();
        //console.log("playsnare");
      }
      else{
        //this.playHiHat();
        //console.log("playhihat");
      }
      if(this.tempo == 3){
        //this.tempo = 0;
      }
      else{
        //this.tempo++;
      }
    }
  playSnare(){
    this.snare.play();
    console.log("SNARE")
  }
  playHiHat(){
    this.hihat.play();
    console.log("HIHAT")
  }
  playcchord(){
     this.cchord.play();
    //console.log("CCHORD")
  }


}
