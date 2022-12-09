import { Component } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NotesApiService } from 'src/app/services/notes-api.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {
    title: string
    author: string
    content: string

    constructor(
        private notesApiService: NotesApiService
    ) {
        this.title = ''
        this.author = ''
        this.content = ''
    }

    onSubmit() {
        const note = new Note()

        note.author = this.author
        note.title = this.title
        note.content = this.content
        note.tags = []
        note.length = this.content.length
        note.createdAt = Date.now()
        note.lastEditAt = Date.now()

        try{
            this.notesApiService.createNote(note).subscribe(note => {
                if(note){
                    window.location.pathname = `/notes/${note.id}`
                }
            })
        } catch (error) {
            alert(`Something went wrong ${error}`)
        }
    }
}
