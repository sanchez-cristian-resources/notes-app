import { createAction, props } from "@ngrx/store";
import { Note } from "src/app/models/note.model";

export const loadingNote = createAction(
  '[Note Details] Loading Notes',
  props<{ id: string }>()
);

export const loadNote = createAction(
  '[Note Details] Load Notes',
  props<{ note: Note }>()
);