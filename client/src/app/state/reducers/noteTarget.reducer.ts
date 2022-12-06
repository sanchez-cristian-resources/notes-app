import { createReducer, on } from "@ngrx/store";
import { Note } from "src/app/models/note.model";
import { setTargetNote } from "../actions/targetNote.actions";

export const initialState = new Note();

export const targetNoteReducer = createReducer(
    initialState, 
    on(setTargetNote, (state, action) => {
        return {...action.note}
    })
)