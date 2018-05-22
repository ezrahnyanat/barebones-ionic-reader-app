import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PageTwo } from '../two/two'

/**
 * Generated class for the OnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-one',
  templateUrl: 'one.html',
})
export class PageOne {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnePage');
  }

  goTo(page) {
    if(page === 'two'){
      this.navCtrl.push(PageTwo)
  }
}

}
