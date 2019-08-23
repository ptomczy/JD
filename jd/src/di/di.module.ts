import { NgModule } from "@angular/core";
import { DIRoutingModule } from './di-routing.module';
import { DIPage } from './pages/di';
import { DIExtraPage, Dom, DOM_TOKEN } from './pages/di-extra';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
    declarations: [DIPage, DIExtraPage],
    imports: [DIRoutingModule, MaterialModule],
    providers: [{
        provide: DOM_TOKEN,
        useFactory: () =>{
            return new Dom("d", "c");
        }},
        {
            provide: 'Token',
            useFactory: () => {
            return new Dom('A', 'B');
            }
        },
        {
            provide: 'SraczToken',
            useFactory: () => {
                return true;
            }
        }
    ],
    exports: [DIPage, DIExtraPage]
})
export class DIModule {

}