import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { LostPageComponent } from './components/lost-page/lost-page.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' }, // how works?
      { path: '', component: HomePageComponent },
      { path: 'post/:id', component: PostPageComponent }
    ]
  },
  { path: "**", component: LostPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
