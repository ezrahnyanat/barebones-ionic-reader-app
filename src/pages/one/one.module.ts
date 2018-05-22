import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageOne } from './one';

@NgModule({
  declarations: [
    PageOne,
  ],
  imports: [
    IonicPageModule.forChild(PageOne),
  ],
})
export class OnePageModule {}
