import { Component } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.css']
})
export class ProjectsGridComponent {
    notes: Note[]

    constructor() {
        this.notes = []
    }

    ngOnInit(): void {
        fetch('http://localhost:3000/notes')
            .then(response => response.json())
            .then(data => this.notes = data)
    }
}
