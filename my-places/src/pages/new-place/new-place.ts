import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesService } from "../services/places.service";

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlace {

  constructor(private placesService: PlacesService, private navCtrl: NavController) {
  }



  onAddPlace(value: {title: string}) {
    this.placesService.addPlace(value);
    this.navCtrl.pop();
  }

}
