import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBmK3_ojzsXbmW-165MKBnundmP4S32Pwg",
      authDomain: "new-auth-37004.firebaseapp.com",
      projectId: "new-auth-37004",
      storageBucket: "new-auth-37004.appspot.com",
      messagingSenderId: "864547691482",
      appId: "1:864547691482:web:03621d72a047c2b9f7bee3"
    }),
    
    AngularFirestoreModule, // for firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
