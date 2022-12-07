import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { NotesApiService } from "src/app/services/notes-api.service";
import { loadNotes, loadingNotes } from "../actions/apartments.action";

@Injectable()
export class NotesEffect {
  constructor(
    private actions$: Actions,
    private notesApiService: NotesApiService
  ) {}

  loadingNotes$ = createEffect(() => {
    console.log('loadingNotes$')
    return this.actions$.pipe(
      ofType(loadingNotes),
      mergeMap(() => this.notesApiService.getNotes() // return the data from the API
        .pipe( // success case
          map(notes => loadNotes({ notes }) // dispatch the loadAparments action
          )
        ),
      )
    );
  });
}
