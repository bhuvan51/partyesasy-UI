import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {BackendserviceService} from "../backendservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.css']
})
export class QuestionBoxComponent implements OnInit {
  partyInfoForm: FormGroup;

  constructor(private router: Router, private backendService : BackendserviceService) { }

  ngOnInit() {
    this.partyInfoForm = new FormGroup({
      'city': new FormControl('', Validators.required)
    });
  }

  public partySpace = [];

  onPartySumbit(partyInfoForm){
    console.log(' the city is' + partyInfoForm.value.city);
    let arr = partyInfoForm.value;
    arr.city = arr.city.toLowerCase();
    arr =  this.backendService.getPartySpaces(arr.city)
      .subscribe(
        (data) => {
          console.log(data.body, 'data===');
          this.backendService.setPartySpaces(data.body);
          this.router.navigateByUrl('/partySpace-List');
        },
        (error: Response) => {
          console.log(error);
        }
      );
  }

}
