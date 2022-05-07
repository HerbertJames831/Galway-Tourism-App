import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../Services/data.service';
import { HttpClient } from '@angular/common/http';



interface MenuCustomEvent<T = any> extends CustomEvent {
  detail: T;
  target: HTMLIonMenuElement;

}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //Variable Declaration and Initialization
  myPageStatus: string;

  weather: any[] = [];
  isDisabled = false;

  //Dependency Injection
  constructor(private flashlight: Flashlight, private navCtrl: NavController, private storage: Storage, private service: DataService, private http: HttpClient, private menu: MenuController, public alertController: AlertController) {



    this.service.GetWeatherData().subscribe(// Subscribing weather data from the data service

      (wdata) => {

        this.weather = wdata.weather;
        console.log(this.weather);


      });


  }


  ngOnInit(): void {






  }
  //Method for Flashlight plugin
  Flashlight() {
    this.flashlight.toggle();


  }
  //Method for going to the pubs page
  GoNextToPubsPage() {

    console.log("Go to The Pubs Page");
    this.navCtrl.navigateForward('/pubs');
    this.isDisabled = false;

  }
  //Method for viewing the pubs page
  ClicktoViewPubsPage() {

    console.log("Click to View The Pubs Page");
    this.navCtrl.navigateForward('/pubs');
    this.isDisabled = false;

  }
  //Method for viewing the hotels page
  ClicktoViewHotelsPage() {

    console.log("Click to View The Hotels Page");
    this.navCtrl.navigateForward('/hotels');
    this.isDisabled = false;

  }
  //Method for viewing the attractions page
  ClicktoViewAttractionsPage() {

    console.log("Click to View The Attractions Page");
    this.navCtrl.navigateForward('/attractions');
    this.isDisabled = false;

  }

  //Method for updating the pubs page status
  UpdatePubsPageStatus() {

    console.log("Click to Update the Status for Pubs Page");
    this.navCtrl.navigateForward('/pubs');
    this.isDisabled = false;



  }
  //Method for updating the hotels page status
  UpdateHotelsPageStatus() {

    console.log("Click to Update the Status for Hotels Page");
    this.navCtrl.navigateForward('/hotels');
    this.isDisabled = false;



  }
  //Method for updating the attractions page status
  UpdateAttractionsPageStatus() {

    console.log("Click to Update the Status for Attractions Page");
    this.navCtrl.navigateForward('/attractions');
    this.isDisabled = false;



  }

  //Creating Data Persistence for displaying the current page status on the home page
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

  //Method that provides an alert message that this project was built by the developer
  async Info() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Info',
      message: 'Developed By: Herbert James',

      buttons: ['Cancel', 'Ok']
    });

    await alert.present();



  }
  //Method for opening the menu
  async OpenMenu() {


    this.menu.enable(true, 'menu');
    this.menu.open('menu');






  }


}
