import { Component, OnInit } from '@angular/core';
import { Repo } from './../repo';
import { RepoService } from '../repo.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  reponame: Repo;
  user: any;
  username: string;
  repos: any;
  //searchvalue: string;
  repository: any;


  constructor(private RepoService: RepoService, private http: HttpClient) {
  }

  findProfile() {

    this.RepoService.getProfileInfo(this.username).subscribe(result => {
      this.user = result;
      console.log(this.username)
    });
  }

  ngOnInit() {
  }

}
