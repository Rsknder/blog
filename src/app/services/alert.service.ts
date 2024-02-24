import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export type AlertType = 'succes' | "warning" | "danger"


export interface Alert {
    type: AlertType,
    text: String
}


@Injectable()

export class AlertService {
    public alert$ = new Subject<Alert>()

    success(text: string) {
        this.alert$.next({ type: "succes", text })
    }

    warning(text: string) {
        this.alert$.next({ type: "warning", text })
    }

    danger(text: string) {
        this.alert$.next({ type: "danger", text })
    }


}