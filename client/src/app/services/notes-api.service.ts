import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { delay, Observable } from 'rxjs'
import { Note } from '../models/note.model'

@Injectable({
  providedIn: 'root'
})
export class NotesApiService {
  private readonly API_URL = 'http://localhost:8000/notes'
  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.API_URL).pipe(
        delay(1500)
    )
  }

  getNoteById(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.API_URL}/${id}`).pipe(
        delay(1500)
    )
  }

  updateNote( id: string, updatedNote: Note ): Observable<Note> {
    return this.http.put<Note>(`${this.API_URL}/${id}`, updatedNote)
  }
}
