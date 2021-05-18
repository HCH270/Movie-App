import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassicsComponent } from './classics/classics.component';
import { HeaderComponent } from './header/header.componenet';
import { NewbiesComponent } from './newbies/newbies.component';
import { ClassicListComponent } from './classics/classic-list/classic-list.component';
import { ClassicsDetailComponent } from './classics/classic-detail/classics-detail.component';
import { NewbieListComponent } from './newbies/newbie-list/newbie-list.component';
import { NewbieDetailComponent } from './newbies/newbie-detail/newbie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClassicsComponent,
    NewbiesComponent,
    ClassicListComponent,
    ClassicsDetailComponent,
    NewbieListComponent,
    NewbieDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
