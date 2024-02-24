import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminDashboardPageComponent } from './components/admin-dashboard-page/admin-dashboard-page.component';
import { AdminEditPageComponent } from './components/admin-edit-page/admin-edit-page.component';
import { AdminCreatePageComponent } from './components/admin-create-page/admin-create-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared.module";
import { AuthGuard } from "../guards/auth.guard";
import { SearchPipe } from "../pipes/search.pipe";
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from "../services/alert.service";

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
    providers: [AuthGuard, AlertService],
    declarations: [


        AdminPageComponent,
        LoginPageComponent,
        AdminDashboardPageComponent,
        AdminEditPageComponent,
        AdminCreatePageComponent,
        SearchPipe,
        AlertComponent
    ]
})
export class AdminModule {

}