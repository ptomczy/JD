import { Injectable } from "@angular/core";

@Injectable()
export class LoadingProgressService {
    public LPS_done: boolean;

    beginLoading() {
        this.LPS_done = false;
    }

    endLoading() {
        this.LPS_done = true;
    }

}
