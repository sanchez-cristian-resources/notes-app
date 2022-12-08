import { createReducer, on } from "@ngrx/store";
import { Note } from "src/app/models/note.model";
import { loadNotes, loadingNotes } from "../actions/notes.action";

export interface NoteState {
  loading: boolean,
  notes: Note[],
}

export const initialState: NoteState = {
  notes: [],
  loading: false,
};

export const notesReducer = createReducer(
  initialState,
  on(loadingNotes, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadNotes, (state, { notes }) => {
    return {
      ...state,
      notes: notes,
      loading: false,
    };
  })
);
