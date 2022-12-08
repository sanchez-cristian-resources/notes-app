import { createReducer, on } from "@ngrx/store";
import { Note } from "src/app/models/note.model";
import { loadNote } from "../actions/note-details.action";

export interface NoteDetailState {
  note: Note,
}

export const initialState: NoteDetailState = {
  note: {} as Note,
};

export const notesDetailReducer = createReducer(
  initialState,
  on(loadNote, (state, { note }) => {
    return {
      ...state,
      note: note,
    };
  })
);
