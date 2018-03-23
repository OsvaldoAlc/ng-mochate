import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GroupDetailComponent } from './grupos/group-detail/group-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'group-detail', component: GroupDetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
