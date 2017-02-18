import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

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


    this.snare.src = "https://firebasestorage.googleapis.com/v0/b/my-test-project-d924c.appspot.com/o/snare.mp3?alt=media&token=595bb6aa-a50a-4141-bddd-dd07a2fd88fe";
    this.snare.load();
    this.hihat.src = "https://firebasestorage.googleapis.com/v0/b/my-test-project-d924c.appspot.com/o/hihat.wav?alt=media&token=e92991d8-51a1-4d75-ab4d-84168a2b70e4";
    this.hihat.load();
    this.cchord.src = "https://firebasestorage.googleapis.com/v0/b/my-test-project-d924c.appspot.com/o/cchord.wav?alt=media&token=77491960-501d-4270-b2a5-061fc795b5b6";
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
