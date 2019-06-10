import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './../profile/profile.component';
import { SearchformComponent } from './../searchform/searchform.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: SearchformComponent },
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
