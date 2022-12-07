import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsGridComponent } from './components/projects-grid/projects-grid.component';
import { CardComponent } from './components/card/card.component';
import { StoreModule } from '@ngrx/store';

// redux
import { ROOT_REDUCERS } from './state/targetNote.state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsGridComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
