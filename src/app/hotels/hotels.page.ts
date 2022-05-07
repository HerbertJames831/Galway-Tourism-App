import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { HotelsService } from '../Services/hotels.service';




@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {

  //Variable Declaration and Initialization
  hotels: string[] = ["Clayton Hotel Galway", "Galway Bay Hotel", "The Galmont",
    "Salthill Hotel", "Ardilaun Hotel"];
  hotel: any[]
  currentDate: any
  myPageStatus: string;
  isDisabled = false;

  //Dependency Injection
  constructor(private navCtrl: NavController, private hotelService: HotelsService, private storage: Storage, private menu: MenuController) { }

  ngOnInit() {
    //setting current date and time
    this.currentDate = Date.now()
    this.hotelService.getHotels().subscribe(result => {// Subscribing hotels data from the hotels service
      this.hotel = result;
      console.log(result)
    })


  }
  //Method for going to the Attractions Page
  GoNextToAttractionsPage() {

    console.log("Go to Attractions Page");
    this.navCtrl.navigateForward('/attractions');

    this.isDisabled = false;

  }

  //Method for going back to the Pubs Page
  GoBackToPubsPage() {

    console.log("Go to Back to Pubs Page");
    this.navCtrl.navigateBack('\pubs');
    this.isDisabled = false;

  }
  //Method for going back to the Home Page
  ClicktoGoBackToHomePage() {
    console.log("Click to Go Back To the Home Page");
    this.navCtrl.navigateForward('/home');
    this.isDisabled = false;


  }
  //Creating Data Persistence for Hotels Page Status
  ionViewDidEnter() {

    this.storage.create().then(

      () => {

        this.storage.get('myPageStatus')
          .then((pagedata) => {
            this.myPageStatus = pagedata;

          })
          .catch();


      })
      .catch();


  }
  //Method for saving the hotels page status
  saveStatus() {

    console.log(this.myPageStatus);
    this.storage.create().then(() => {

      this.storage.set("myPageStatus", this.myPageStatus)
        .then(

          () => {

            this.navCtrl.navigateBack('/home');

          })
        .catch();

    })
      .catch();

  }
  //Method for opening the menu
  OpenMenu() {

    this.menu.enable(true, 'menu');
    this.menu.open('menu');



  }
  //Method for closing the menu
  CloseMenu() {

    this.menu.enable(true, 'menu');
    this.menu.close('menu');


  }




}
