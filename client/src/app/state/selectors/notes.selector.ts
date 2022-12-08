import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { NoteState } from '../reducers/notes.reducer';
 

export const selectNotesState = (state: AppState) => state.noteStates;

export const selectNotes = createSelector(
  selectNotesState,
  (state: NoteState) => {
    return state.notes;
  }
);

export const selectLoading = createSelector(
  selectNotesState,
  (state: NoteState) => {
    return state.loading;
  }
);
