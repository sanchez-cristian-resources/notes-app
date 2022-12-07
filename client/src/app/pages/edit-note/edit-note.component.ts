import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent {
    note$: Observable<Note>

    constructor() {
        this.note$ = new Observable<Note>()
    }

    ngOnInit(): void {
        console.log(this.note$)
    }
}
