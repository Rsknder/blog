import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminDashboardPageComponent } from './components/admin-dashboard-page/admin-dashboard-page.component';
import { AdminEditPageComponent } from './components/admin-edit-page/admin-edit-page.component';
import { AdminCreatePageComponent } from './components/admin-create-page/admin-create-page.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(
            [
                {
                    path: '', component: AdminPageComponent, children: [
                        { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
                        { path: 'login', component: LoginPageComponent },
                        { path: 'da', component: AdminDashboardPageComponent },
                        { path: 'cr', component: AdminCreatePageComponent },
                        { path: 'post/:id/ed', component: AdminEditPageComponent },
                    ]
                }
            ]
        )
    ],
    exports: [RouterModule],
    declarations: [


        AdminPageComponent,
        LoginPageComponent,
        AdminDashboardPageComponent,
        AdminEditPageComponent,
        AdminCreatePageComponent
    ]
})
export class AdminModule {

}