import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home'

/**
 * Generated class for the ThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-three',
  templateUrl: 'three.html',
})
export class ThreePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThreePage');
  }

  goTo(page) {
    if(page === 'home'){
      this.navCtrl.push(HomePage)
  }
}

}
