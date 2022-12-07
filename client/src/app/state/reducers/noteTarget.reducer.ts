import { createReducer, on } from "@ngrx/store";
import { Note } from "src/app/models/note.model";
import { setTargetNote } from "../actions/targetNote.actions";

export interface NoteState {
    note: Note  
}

export const initialState: NoteState = {
    note: new Note()
};

export const targetNoteReducer = createReducer(
    initialState, 
    on(setTargetNote, (state, action) => {
        return {
            note: action.note
        }
    })
)