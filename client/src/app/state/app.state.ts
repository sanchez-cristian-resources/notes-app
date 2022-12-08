import { ActionReducerMap } from "@ngrx/store";
import { notesDetailReducer, NoteDetailState } from "./reducers/note-details.reducer";
import { notesReducer, NoteState } from "./reducers/notes.reducer";

export interface AppState {
  noteStates: NoteState;
  noteDetailStates: NoteDetailState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    noteDetailStates: notesDetailReducer,
    noteStates: notesReducer
};