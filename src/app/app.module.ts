import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AngularWebStorageModule } from 'angular-web-storage';


import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { HomeComponent } from './home/home.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

const materielModuleData=[MatToolbarModule,MatIconModule,MatListModule,MatCheckboxModule,MatSelectModule,MatButtonModule]


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch: 'full'},
	{ path: 'home', component:HomeComponent },
  { path: 'cart', component:CartComponent }

];

@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule,RouterModule.forRoot(routes),NoopAnimationsModule, FormsModule,ReactiveFormsModule,materielModuleData,AngularWebStorageModule ],
  declarations: [ AppComponent, CartComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }
