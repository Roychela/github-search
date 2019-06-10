import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RepoService {


  getProfileInfo(username: string) {
    return this.http.get('https://api.github.com/users/' + username);
  }


  constructor(private http: HttpClient) {
  }
}
