import { createAction, props } from "@ngrx/store";
import { Note } from "src/app/models/note.model";

export const setTargetNote = createAction('[Homepage component] Set Target Note', props<{note: Note}>())
