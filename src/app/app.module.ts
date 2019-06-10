import { SearchformComponent } from './searchform/searchform.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RepoService } from './repo.service';
import { UserService } from './user.service';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RoutingModule

  ],
  providers: [UserService,
    RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
