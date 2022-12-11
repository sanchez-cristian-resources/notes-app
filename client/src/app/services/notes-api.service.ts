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
    return this.http.get<Note[]>(this.API_URL);
  }

  getNoteById(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.API_URL}/${id}`);
  }

  updateNote( id: string, updatedNote: Note ): Observable<Note> {
    return this.http.put<Note>(`${this.API_URL}/${id}`, updatedNote)
  }

  createNote( note: Note ): Observable<Note> {
    return this.http.post<Note>(this.API_URL, note)
  }

  deleteNote( id: string ): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`)
  }
}
