import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/note.model';
import { NotesApiService } from 'src/app/services/notes-api.service';
import { loadingNote } from 'src/app/state/actions/note-details.action';
import { AppState } from 'src/app/state/app.state';
import { selectNote } from 'src/app/state/selectors/note-details.selector';
import { selectLoading } from 'src/app/state/selectors/notes.selector';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent {
  id: Number
  loading$: Observable<boolean>
  note$: Observable<Note>

  // form
  note: Note
  saved: boolean

  constructor(
    private route: ActivatedRoute, 
    private store: Store<AppState>,
    private notesApiService: NotesApiService
  ) {
    this.id = 1
    this.loading$ = new Observable<boolean>()
    this.note$ = new Observable<Note>()
    this.saved = false

    // two-way binding
    this.note = new Note()
  }

  ngOnInit(): void {
    try {
      this.id = this.route.snapshot.params['id'];
      this.loading$ = this.store.select(selectLoading);
      this.note$ = this.store.select(selectNote);

      this.note$.subscribe((note) => {
        this.note = {...note}
      })

      this.store.dispatch(loadingNote({ id: String(this.id) }));

    } catch(error) {
      alert(error);
    }
  }

  updateNote(): void { 
    try {
      const createdObservable = this.notesApiService.updateNote(String(this.id), this.note)

      createdObservable.subscribe({
        next: (note) => {
            if ( note ) {
              this.saved = true
            }
        }, 
        error: (error) => { alert(`Something went wrong ${error}`) },
      })
    } catch(error) {
      alert(error);
    }
  }

  changeSaved(): void {
    this.saved = !this.saved
  }
}

