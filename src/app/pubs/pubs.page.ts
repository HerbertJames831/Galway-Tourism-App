import { Component, OnInit } from '@angular/core';
import { MenuController, ScrollBaseDetail } from '@ionic/angular';

import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { PubsService } from '../Services/pubs.service';





@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.page.html',
  styleUrls: ['./pubs.page.scss'],
})
export class PubsPage implements OnInit {
  //Variable Declaration and Initialization
  pubs: string[] = ["Galway Bay Brewery", "Busker Brownes", "Tigh Nora Galway",
    "Coyotes", "Au Pucan"];
  pub: any[]
  currentDate: any
  myPageStatus: string;
  isDisabled = false;

  constructor(private navCtrl: NavController, private pubsService: PubsService,//Dependency Injection
    private storage: Storage, private menu: MenuController) { }

  ngOnInit() {
    //setting current date and time
    this.currentDate = Date.now()

    this.pubsService.getPubs().subscribe(result => {// Subscribing pubs data from the pubs service
      this.pub = result;
      console.log(result)
    })
  }

  //Method for going to the Hotels Page
  GoNextToHotelsPage() {

    console.log("Go to Hotels Page");
    this.navCtrl.navigateForward('/hotels');
    this.isDisabled = false;

  }

  //Method for going back to the Home Page
  GoBackToHomePage() {

    console.log("Go to Back to Home Page");
    this.navCtrl.navigateForward('/home');
    this.isDisabled = false;

  }
  //Creating Data Persistence for Pubs Page Status
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

  //Method for saving the pubs page status
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


