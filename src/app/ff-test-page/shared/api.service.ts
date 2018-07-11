import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ApiService {

    constructor(private http: HttpClient) { }

    findJokes(params: string): Observable<any>{
        return this.http.get('https://api.chucknorris.io/jokes/search?query=' + params);
    }
}