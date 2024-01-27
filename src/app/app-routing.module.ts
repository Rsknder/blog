import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { LostPageComponent } from './components/lost-page/lost-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' }, // how works?
      { path: '', component: HomePageComponent },
      { path: 'post/:id', component: PostComponent },
      { path: 'about', component: AboutPageComponent },

    ]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule) },
  { path: "**", component: LostPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
