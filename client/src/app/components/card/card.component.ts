import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Note } from 'src/app/models/note.model';
import { NoteState } from 'src/app/state/reducers/noteTarget.reducer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input()
    note: Note

    constructor(
        private noteState: Store<NoteState>
    ) {
        this.note = new Note()
    }

    cardClick(): void {
        console.log('hola')
    }
}
