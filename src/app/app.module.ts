import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgmCoreModule} from '@agm/core';
import { MapingComponent } from './maping/maping.component';

@NgModule({
    declarations: [
        AppComponent,
        MapingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC8JfdxUutJ8V60GtQnmGjx3qtFQyg9cH0'
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }