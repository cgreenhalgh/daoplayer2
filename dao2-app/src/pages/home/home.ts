import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  play = true;
  
  constructor(public navCtrl: NavController) {

  }

  onSettings() {
    console.log('onSettings, play='+this.play);
    this.navCtrl.push(SettingsPage);
  }
}
