import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageTwo } from './two';

@NgModule({
  declarations: [
    PageTwo,
  ],
  imports: [
    IonicPageModule.forChild(PageTwo),
  ],
})
export class TwoPageModule {}
