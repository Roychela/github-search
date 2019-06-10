import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  response: any;

  constructor(private userService: UserService, private http: HttpClient) {
    this.user = new User(0, '', '', '', '', '', '')
  }

  fetchRepos() {
    const repos = (environment.apiUrl) ;


    this.http.get(repos).subscribe((data) => {
      this.response = data;
      console.log(this.response)

    });
  }


  ngOnInit() {
    this.userService.userInformation();
    this.user = this.userService.user;
  }

}
