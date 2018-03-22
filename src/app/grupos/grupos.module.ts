import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GruposRoutingModule } from './grupos-routing.module';
import { GroupListComponent } from '../grupos/group-list/group-list.component';
import { GroupsService } from './groups.service';
import { GroupFormComponent } from '../grupos/group-form/group-form.component';
import { CoreModule } from '../core/core.module';
import { MaterialSharedModule } from '../material-shared/material-shared.module';

@NgModule({
  imports: [
    CommonModule,
    GruposRoutingModule,
    CoreModule,
    MaterialSharedModule
  ],
  declarations: [GroupListComponent],
  providers: [GroupsService]
})
export class GruposModule { }
