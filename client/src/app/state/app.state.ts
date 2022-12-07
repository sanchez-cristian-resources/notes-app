import { ActionReducerMap } from "@ngrx/store";
import { notesDetailReducer, NoteDetailState } from "./reducers/apartment-details.reducer";
import { notesReducer, NoteState } from "./reducers/apartments.reducer";

export interface AppState {
  noteStates: NoteState;
  noteDetailStates: NoteDetailState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    noteDetailStates: notesDetailReducer,
    noteStates: notesReducer
};