import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GruposRoutingModule } from './grupos-routing.module';
import { GroupListComponent } from '../grupos/group-list/group-list.component';
import { GroupsService } from './groups.service';
import { GroupFormComponent } from '../grupos/group-form/group-form.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';

@NgModule({
  imports: [
    CommonModule,
    GruposRoutingModule
  ],
  declarations: [GroupListComponent, GroupFormComponent, GroupDetailComponent],
  providers: [GroupsService]
})
export class GruposModule { }
