import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GruposRoutingModule } from './grupos-routing.module';
import { GroupListComponent } from '../grupos/group-list/group-list.component';
import { GroupsService } from './groups.service';
import { GroupFormComponent } from '../grupos/group-form/group-form.component';

@NgModule({
  imports: [
    CommonModule,
    GruposRoutingModule
  ],
  declarations: [GroupListComponent, GroupFormComponent],
  providers: [GroupsService]
})
export class GruposModule { }
