import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap';
import { LightboxModule} from 'ngx-lightbox';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AccordionModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { appRoutes } from './routes';
import { CommentComponent } from './comment/comment.component';
import { JobComponent } from './job/job.component';
import { JobviewComponent } from './jobview/jobview.component';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      GalleryComponent,
      ContactComponent,
      CommentComponent,
      JobComponent,
      JobviewComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      CollapseModule.forRoot(),
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      ButtonsModule.forRoot(),
      LightboxModule,
      NgxGalleryModule,
      MDBBootstrapModule.forRoot(),
      AccordionModule.forRoot()
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
