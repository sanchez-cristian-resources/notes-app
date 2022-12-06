import { Component } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NotesApiService } from 'src/app/services/notes-api.service';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.css']
})
export class ProjectsGridComponent {
    notes: Note[]

    constructor(private notesService: NotesApiService) {
        this.notes = []
    }

    ngOnInit(): void {
        this.notesService.getNotes().subscribe({
            next: (notes) => {              
                this.notes = notes
            }, 
            error: (err) => {
                console.error('Error:', err)
            }
        })
    }
}
