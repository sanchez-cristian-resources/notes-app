import { createAction, props } from "@ngrx/store";
import { Note } from "src/app/models/note.model";

export const loadingNotes = createAction(
  '[Notes list] Loading Notes',
);

export const loadNotes = createAction(
  '[Notes list] Load Notes',
  props<{ notes: Note[] }>()
);
 