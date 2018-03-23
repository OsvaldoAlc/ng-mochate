import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupListComponent } from './group-list/group-list.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupFormComponent } from './group-form/group-form.component';

const routes: Routes = [
    { path: 'group-list', component: GroupListComponent, canActivate: [AuthGuard] },
    { path: 'addgroup', component: GroupFormComponent },
    { path: 'group-detail', component: GroupDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GruposRoutingModule { }
