import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { Service } from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  state = {
    state1: false,
    state2: false,
    state3: false,
  }

  //items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire, public service: Service){
    //this.items=af.database.list('/synth');
    this.service.loadSound();

  }
  value= 1;
  onClick(){

    if(this.value>3){
      this.value = 1;
    }
    else{
      this.value++;
    }
    if (this.value ==1){
      this.state.state1 = true;
      this.state.state2 = false;
      this.state.state3 = false;
    }
    if (this.value ==2){
      this.state.state1 = false;
      this.state.state2 = true;
      this.state.state3 = false;
    }
    if (this.value ==3){
      this.state.state1 = false;
      this.state.state2 = false;
      this.state.state3 = true;
    }
  }
}
