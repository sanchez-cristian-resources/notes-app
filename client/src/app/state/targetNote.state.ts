import { ActionReducerMap } from "@ngrx/store";
import { NoteState, targetNoteReducer } from "./reducers/noteTarget.reducer";

export interface AppState {
  noteState: NoteState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  noteState: targetNoteReducer,
};
