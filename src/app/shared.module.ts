import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { QuillModule } from "ngx-quill";

@NgModule({
    imports: [HttpClientModule,
        QuillModule.forRoot(),
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,],
    exports: [HttpClientModule,
        QuillModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,]
})
export class SharedModule {

}