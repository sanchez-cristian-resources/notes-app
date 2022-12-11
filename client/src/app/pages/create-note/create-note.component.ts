import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/models/note.model';
import { NotesApiService } from 'src/app/services/notes-api.service';
import { CustomValidators } from 'src/app/utils/custom-validator';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {
  title: FormControl
  author: FormControl
  content: FormControl
  createNoteForm: FormGroup
  constructor(
    private notesApiService: NotesApiService, 
    private snackBar: MatSnackBar
  ) {
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
    this.createNoteForm = new FormGroup({
      title: this.title,
      author: this.author, 
      content: this.content
    })
  }
  
  onSubmit() {
    const note = new Note()
    note.author = this.author.value
    note.title = this.title.value
    note.content = this.content.value
    note.tags = []
    note.length = this.content.value.length
    note.createdAt = Date.now()
    note.lastEditAt = Date.now()

    try{
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
      this.notesApiService.createNote(note).subscribe(note => {
        if(note){
          window.location.pathname = `/notes/${note.id}`
        }
      })
    } catch (error) {
      alert(`Something went wrong ${error}`)
    }
  }

  goHome(): void {
    window.location.pathname = ''
  }
}
