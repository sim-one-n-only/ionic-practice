import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddListing } from './add-listing';

@NgModule({
  declarations: [
    AddListing,
  ],
  imports: [
    IonicPageModule.forChild(AddListing),
  ],
  exports: [
    AddListing
  ]
})
export class AddListingModule {}
