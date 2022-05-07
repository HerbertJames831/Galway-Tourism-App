import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';


import { Storage } from '@ionic/storage';
import { AttractionsService } from '../Services/attractions.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.page.html',
  styleUrls: ['./attractions.page.scss'],
})
export class AttractionsPage implements OnInit {
  //Variable Declaration and Initialization
  attractions: string[] = ["Galway City Museum", "Galway Cathedral", "Oranmore Castle",
    "National Aquarium Galway", "Open The Door Galway"];
  attrns: any[]
  currentDate: any
  studentName: string[] = ["Herbert James"];
  studentID: string[] = ["G00399030"];
  groupName: string[] = ["Group B"];
  moduleName: string[] = ["Mobile Application Development"];
  Lecturer: string[] = ["Martin Kenirons"];
  collegeName: string[] = ["Atlanic Technological University "]
  projectName: string[] = ["Galway Tourism App"];
  deadlineDate: string[] = ["8th May 2022"];



  myPageStatus: string;
  myAppReview: string;
  isDisabled = false;

  //Dependency Injection
  constructor(private navCtrl: NavController, private attractionService: AttractionsService,
    private storage: Storage, private menu: MenuController) { }

  ngOnInit() {
    //setting current date and time
    this.currentDate = Date.now()
    this.attractionService.getAttractions().subscribe(result => {
      this.attrns = result;
      console.log(result)
    })

  }
  //Method for going back to the hotels page
  GoBackToHotelsPage() {

    console.log("Go to Back to the Hotels Page");
    this.navCtrl.navigateForward('/hotels');
    this.isDisabled = false;

  }

  //Method for going back to the home page
  ClicktoGoBackToHomePage() {
    console.log("Click to Go Back To the Home Page");
    this.navCtrl.navigateForward('/home');
    this.isDisabled = false;


  }
  //Creating Data Persistence for Attractions Page Status
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


  //Method for saving the attractions page status
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

  //Method for saving the user's answer for the app review
  SaveAnswer() {

    console.log(this.myAppReview);
    this.storage.create().then(() => {

      this.storage.set("myAppReview", this.myAppReview)
        .then(

          () => {

            this.navCtrl.navigateBack('/attractions');

          })
        .catch();

    })
      .catch();

  }




}
