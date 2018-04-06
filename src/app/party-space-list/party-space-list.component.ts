import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BackendserviceService} from "../backendservice.service";

class PartySpaceView{
    name: string;
    email: string;
    incharge: string;
}



@Component({
  selector: 'app-party-space-list',
  templateUrl: './party-space-list.component.html',
  styleUrls: ['./party-space-list.component.css']
})
export class PartySpaceListComponent implements OnInit {
  veiw: PartySpaceView;
  newValues;

  constructor(private router: Router, private backendService: BackendserviceService) {
    //this.newValues = this.backendService.getPartySpace().get('partySpaceData').entries().email;
    this.newValues = this.backendService.partySpaceData.get('partySpaceList');
    console.log("the data is ", this.newValues.partySpaces);
  }

  ngOnInit() {
  }

}
