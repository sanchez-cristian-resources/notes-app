import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/note.model';
import { loadingNotes } from 'src/app/state/actions/notes.action';
import { AppState } from 'src/app/state/app.state';
import { selectLoading, selectNotes } from 'src/app/state/selectors/notes.selector';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.css']
})
export class ProjectsGridComponent {
    loading$: Observable<boolean>;
    notes$: Observable<Note[]>;
  
    constructor(
      private store: Store<AppState>,
    ) {
      this.loading$ = new Observable<boolean>();
      this.notes$ = new Observable<Note[]>();
    }
  
    ngOnInit(): void {
      try {
        this.loading$ = this.store.select(selectLoading);
        this.notes$ = this.store.select(selectNotes);
    
        this.store.dispatch(loadingNotes());
      
        this.notes$.subscribe((notes) => {
          console.log(notes);
        })
      } catch(error) {
        alert(error);
      }
    }
}
