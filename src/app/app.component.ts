import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBJIeelvcy5Skt0woHQTsUPSGCcJZiafSo",
  authDomain: "ng-whatsapp-clone.firebaseapp.com",
  databaseURL: "https://ng-whatsapp-clone-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ng-whatsapp-clone",
  storageBucket: "ng-whatsapp-clone.appspot.com",
  messagingSenderId: "174408458264",
  appId: "1:174408458264:web:26d708bef926dda6e9a36d"
};
firebase.initializeApp(firebaseConfig);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  ngOnInit() {}
}
