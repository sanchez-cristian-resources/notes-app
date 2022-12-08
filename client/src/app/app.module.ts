import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsGridComponent } from './components/projects-grid/projects-grid.component';
import { CardComponent } from './components/card/card.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

// redux
import { ROOT_REDUCERS } from './state/app.state';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EffectsModule } from '@ngrx/effects';
import { NotesEffect } from './state/effects/notes.effect';
import { NoteDetailEffect } from './state/effects/note-details.effect';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsGridComponent,
    CardComponent,
    EditNoteComponent,
    NotFoundComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([NotesEffect, NoteDetailEffect]), 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
