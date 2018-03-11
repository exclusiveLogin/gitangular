import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GithubGetService {

  constructor(
    private http: HttpClient,
  ) { }
  getUsersFromGithub(str: string): Observable<Object> {
    return this.http.get('https://api.github.com/search/users', {
      params: {
        q: str
      }
    });
  }
}
