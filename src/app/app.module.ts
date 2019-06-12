import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { PresentationComponent } from './presentation/presentation.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ParentComponent } from './parent/parent.component';
import { NightComponent } from './night/night.component';
import { TotalComponent } from './total/total.component';

import { StoreModule } from '@ngrx/store';
import { nightReducer } from './store/night.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    PresentationComponent,
    InstructionsComponent,
    ParentComponent,
    NightComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: nightReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
