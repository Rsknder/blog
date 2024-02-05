import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminDashboardPageComponent } from './components/admin-dashboard-page/admin-dashboard-page.component';
import { AdminEditPageComponent } from './components/admin-edit-page/admin-edit-page.component';
import { AdminCreatePageComponent } from './components/admin-create-page/admin-create-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { SharedModule } from "../shared.module";
import { AuthGuard } from "../guards/auth.guard";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild(
            [
                {
                    path: '', component: AdminPageComponent, children: [
                        { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
                        { path: 'login', component: LoginPageComponent },
                        { path: 'dashboard', component: AdminDashboardPageComponent, canActivate: [AuthGuard] },
                        { path: 'createpost', component: AdminCreatePageComponent, canActivate: [AuthGuard] },
                        { path: 'post/:id/editpost', component: AdminEditPageComponent, canActivate: [AuthGuard] },
                    ]
                }
            ]
        )
    ],
    exports: [RouterModule],
    providers: [AuthService, AuthGuard],
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