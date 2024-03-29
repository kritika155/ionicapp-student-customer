import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import {FormsModule} from "@angular/forms";
import { LogoutComponent } from './logout/logout.component'
import { AboutComponent } from './about/about.component'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {CustomerComponent} from './customer/customer.component';
import {AddcustomerComponent} from './addcustomer/addcustomer.component';
import {ListcustomerComponent} from './listcustomer/listcustomer.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {EditcustomerComponent} from './editcustomer/editcustomer.component';
import { StudentComponent } from './student/student.component'
import {ListStudentComponent} from './list-student/list-student.component';
import {AddStudentComponent} from './add-student/add-student.component';
import {EditStudentComponent} from './edit-student/edit-student.component';


@NgModule({
  declarations: [AppComponent,LoginComponent,DashboardComponent ,
    LogoutComponent,AboutComponent,CustomerComponent,
    StudentComponent,AddcustomerComponent,ListcustomerComponent,
    EditcustomerComponent,ListStudentComponent,AddStudentComponent,EditStudentComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
