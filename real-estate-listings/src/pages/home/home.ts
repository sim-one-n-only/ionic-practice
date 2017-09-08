import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddListing} from "../add-listing/add-listing";
import {ListingsService} from "../../services/listings.service";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listings: {address: string}[] = [];

  constructor(public navCtrl: NavController, private listingsService: ListingsService) {

  }

  ionViewWillEnter () {
    this.listings = this.listingsService.getListings();
  }

  onLoadAddListing () {
    this.navCtrl.push(AddListing);
  }

}
