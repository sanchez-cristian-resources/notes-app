import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input()
    note: Note

    constructor() {
        this.note = new Note()
    }

    cardClick(): void {
        console.log('SAVE NOTE: ', this.note)
    }
}
