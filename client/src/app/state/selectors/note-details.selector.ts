import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { NoteDetailState } from '../reducers/note-details.reducer';
 

export const selectNoteDetailState = (state: AppState) => state.noteDetailStates;

export const selectNote = createSelector(
    selectNoteDetailState,
  (state: NoteDetailState) => {
    return state.note;
  }
);