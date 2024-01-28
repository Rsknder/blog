import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { LostPageComponent } from './components/lost-page/lost-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { PostComponent } from './components/post/post.component';
import { SharedModule } from './shared.module';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HomePageComponent,
    PostPageComponent,
    LostPageComponent,
    AboutPageComponent,
    PostComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
