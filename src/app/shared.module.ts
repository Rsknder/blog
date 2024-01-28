import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
    imports: [HttpClientModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,],
    exports: [HttpClientModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,]
})
export class SharedModule {

}