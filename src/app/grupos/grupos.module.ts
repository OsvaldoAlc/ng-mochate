import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialSharedModule } from '../material-shared/material-shared.module';

import { CoreModule } from '../core/core.module';
import { GruposRoutingModule } from './grupos-routing.module';
import { GroupsService } from './groups.service';
import { GroupListComponent } from '../grupos/group-list/group-list.component';
import { GroupFormComponent } from '../grupos/group-form/group-form.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';

@NgModule({
  imports: [
    CommonModule,
    GruposRoutingModule,
    CoreModule,
    MaterialSharedModule
  ],
  declarations: [
    GroupListComponent,
    GroupFormComponent,
    GroupDetailComponent
  ],
  providers: [GroupsService]
})
export class GruposModule { }
