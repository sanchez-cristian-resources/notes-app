import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { NotesApiService } from "src/app/services/notes-api.service";
import { loadNote, loadingNote } from "../actions/apartment-details.action";

@Injectable()
export class NoteDetailEffect {
  constructor(
    private actions$: Actions,
    private noteApiService: NotesApiService
  ) {}

  loadingNote$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingNote),
      mergeMap(action => this.noteApiService.getNoteById(action.id) // return the data from the API
        .pipe( // success case
          map(note => loadNote({ note })) // dispatch the loadAparmenact tion)
        ),
      )
    );
  });
}
