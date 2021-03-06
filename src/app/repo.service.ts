import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoService {


  getProfileInfo(username: string) {
    return this.http.get('https://api.github.com/users/' + username + '?access_token='  + environment.apiUrl);
  }


  constructor(private http: HttpClient) {
  }
}
