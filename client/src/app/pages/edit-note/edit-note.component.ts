import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/note.model';
import { NotesApiService } from 'src/app/services/notes-api.service';
import { loadingNote } from 'src/app/state/actions/note-details.action';
import { AppState } from 'src/app/state/app.state';
import { selectNote } from 'src/app/state/selectors/note-details.selector';
import { selectLoading } from 'src/app/state/selectors/notes.selector';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CustomValidators } from 'src/app/utils/custom-validator';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent {
  loading$: Observable<boolean>
  note$: Observable<Note>

  note: Note
  saved: boolean

  editNoteForm: FormGroup

  title: FormControl
  author: FormControl
  content: FormControl

  constructor(
    private route: ActivatedRoute, 
    private store: Store<AppState>,
    private notesApiService: NotesApiService, 
    private snackBar: MatSnackBar
  ) {
    this.loading$ = new Observable<boolean>()
    this.note$ = new Observable<Note>()
    
    this.note = new Note()
    this.saved = true

    // forms
    this.title = new FormControl('', [
      Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(30), 
      CustomValidators.firstCapitalized
    ])
    
    this.author = new FormControl('', [
      Validators.required, 
      CustomValidators.validAuthor
    ])
    
    this.content = new FormControl('', [
      Validators.required, 
      CustomValidators.firstCapitalized, 
      CustomValidators.validContent
    ])

    this.editNoteForm = new FormGroup({
      title: this.title,
      author: this.author, 
      content: this.content
    })
  }

  ngOnInit(): void {
    try {
      const id = this.route.snapshot.params['id'];
      this.loading$ = this.store.select(selectLoading);
      this.note$ = this.store.select(selectNote);

      this.note$.subscribe((note) => {
        this.note = {...note}
        this.editNoteForm.patchValue({
            title: note.title,
            author: note.author,
            content: note.content
        })
      })

      this.store.dispatch(loadingNote({ id: String(id) }));

    } catch(error) {
      alert(error);
    }

    this.editNoteForm.valueChanges.subscribe((note) => {
        if ( this.note.title !== note.title || this.note.author !== note.author || this.note.content !== note.content ) {
          this.saved = false
        }
    })
  }

  updateNote(): void { 
    console.log(this.note)

    this.note.title = this.editNoteForm.value.title
    this.note.author = this.editNoteForm.value.author
    this.note.content = this.editNoteForm.value.content

    if(!this.title.valid) {
      this.snackBar.open('Title format: First letter [A-Z] at least 3 characters [a-z][0-9]', "Okay!")
      return
    } 

    if(!this.author.valid) {
      this.snackBar.open('The author needs to be Capitalized', "", {
        duration: 3000
      });
      return
    } 

    if(!this.content.valid) {
      this.snackBar.open('Content format: First letter [A-Z] and come on write something', "Okay!");
      return
    }

    try {
      const createdObservable = this.notesApiService.updateNote(String(this.note.id), this.note)

      createdObservable.subscribe({
        next: (note) => {
          if ( note ) {
            this.saved = true
          }
        }, 
        error: (error) => { alert(`Something went wrong ${error}`) },
      })
    } catch(error) {
      this.snackBar.open(`Something went wrong: ${error}`, "", {
        duration: 5000
      });
    }

  }

  deleteNote(): void {
    try {
      console.log(this.note.id)
      const a = this.notesApiService.deleteNote(String(this.note.id))

      a.subscribe({
        next:() => {
          this.goHome()
        }, 
        error: (error) => {
          this.snackBar.open(`Something went wrong: ${error}`, '', {
            duration: 3000
          })
        }
      })

    } catch(error) {
      this.snackBar.open(`Something went wrong: ${error}`, "", {
        duration: 5000
      });
    }
  }

  goHome(): void {
    window.location.pathname = ''
  }
}

