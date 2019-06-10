import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;


  userInformation() {
    interface ApiResponse {
      login: string;
      id: number;
      avatar_url: string;
      about: string;
      repo: string;
    }
    const promise = new Promise((resolve, reject) => {
      var url = (environment.secureApiUrl);

      this.http.get<ApiResponse>(url).toPromise().then(
        (response) => {
          this.user.name = response.login;
          this.user.id = response.id;
          this.user.avatar_url = response.avatar_url;
          this.user.about = response.about;
          this.user.repos_url = response.repo;

          resolve();


          console.log(response.login);
        },
        (error) => {
          alert('error');
          reject(error);
        }
      );
    });
    return promise;
  }

  constructor(private http: HttpClient) {
    this.user = new User(0, '', '', '', '', '', '');
  }
}
