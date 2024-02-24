import { NgModule, Provider } from '@angular/core';
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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthService } from './services/auth.service';
import { registerLocaleData } from '@angular/common';
import ruLocaleData from '@angular/common/locales/ru';

registerLocaleData(ruLocaleData, 'ru')

const INTERCEPTOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

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
  providers: [INTERCEPTOR, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
