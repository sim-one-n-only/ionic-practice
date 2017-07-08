import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddListing} from "../add-listing/add-listing";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onLoadAddListing () {
    this.navCtrl.push(AddListing);
  }

}
