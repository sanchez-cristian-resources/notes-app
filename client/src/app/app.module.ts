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
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 

// redux
import { ROOT_REDUCERS } from './state/app.state';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EffectsModule } from '@ngrx/effects';
import { NotesEffect } from './state/effects/notes.effect';
import { NoteDetailEffect } from './state/effects/note-details.effect';
import { CreateNoteComponent } from './pages/create-note/create-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsGridComponent,
    CardComponent,
    EditNoteComponent,
    NotFoundComponent,
    CreateNoteComponent,
],
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([NotesEffect, NoteDetailEffect]), 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    MatSnackBarModule, 
    MatIconModule, 
    MatButtonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
