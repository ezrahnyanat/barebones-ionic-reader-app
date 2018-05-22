import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PageOne } from '../one/one'
import { PageTwo } from '../two/two'
import { ThreePage } from '../three/three'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo(page) {
    if(page === 'one'){
      this.navCtrl.push(PageOne)
    }
    else if(page === 'two'){
      this.navCtrl.push(PageTwo)
    }
    else if(page === 'three'){
      this.navCtrl.push(ThreePage)
    }
  }

}
