import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './../profile/profile.component';
import { SearchComponent } from './../search/search.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
