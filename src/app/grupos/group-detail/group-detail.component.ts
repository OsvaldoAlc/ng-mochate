import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
import { AuthService } from '../../core/services/auth.service';
@Component({
    selector: 'app-group-detail',
    templateUrl: './group-detail.component.html',
    styleUrls: ['./group-detail.component.scss']
})

export class GroupDetailComponent implements OnInit {
    id = '3Aj32iCfqLSfy2SCbh8S';
    group: any = [];
    members: any;

    constructor( 
        private groupService: GroupsService,
        public auth: AuthService
    ) { }

    ngOnInit() {
        this.groupService.getGroupDetail( this.id )
            .subscribe( (group) => {
                this.group = group;
                console.log(this.group);
            });

        this.groupService.getGroupMembers( this.id )
            .subscribe( (members) => {
                console.log(members);
            })
    }
}