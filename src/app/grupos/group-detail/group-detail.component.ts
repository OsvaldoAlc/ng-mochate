import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';

@Component({
    selector: 'app-group-detail',
    templateUrl: './group-detail.component.html',
    styleUrls: ['./group-detail.component.scss']
})

export class GroupDetailComponent implements OnInit {
    id = '3Aj32iCfqLSfy2SCbh8S';
    group: any = [];

    constructor( private groupService: GroupsService ) { }

    ngOnInit() {
        this.groupService.getGroupDetail( this.id )
            .valueChanges()
            .subscribe( (group) => {
                this.group = group;
                console.log(this.group);
            });
    }
}