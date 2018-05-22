import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ThreePage } from '../three/three'

/**
 * Generated class for the TwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-two',
  templateUrl: 'two.html',
})
export class PageTwo {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TwoPage');
  }

  goTo(page) {
    if(page === 'three'){
      this.navCtrl.push(ThreePage)
  }
}

}
