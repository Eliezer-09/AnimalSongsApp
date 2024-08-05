import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'http://localhost:5000/api/songs';

  constructor(private http: HttpClient) { }

  getSounds(sound: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/${sound}`);
  }
}
