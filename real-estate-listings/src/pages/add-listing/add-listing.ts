import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListingsService} from '../../services/listings.service';

@IonicPage()
@Component({
  selector: 'page-add-listing',
  templateUrl: 'add-listing.html',
})
export class AddListing {

  constructor(public navCtrl: NavController, public navParams: NavParams, private listingsService: ListingsService) {
  }

  onAddListing(value: {address: string}) {
    this.listingsService.addListing(value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddListing');
  }

}
