import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BackendserviceService {

  userData = new Map();
  constructor(private http: HttpClient) {}

  private GATEWAY_PATH = 'https://ec2-34-205-159-85.compute-1.amazonaws.com:8443';
  private GET_PARTYSPACE = '/partyeasy/getAllPartySpaces';

  getPartySpaces(city): Observable<HttpResponse<any>> {
    console.log('the city is ', city);
    return this.http.get(this.GATEWAY_PATH + this.GET_PARTYSPACE + '?city=' + city,{
      observe: 'response'
    });
  }

  setPartySpaces(data){
    console.log(data, "in the set partyspaces nethod");
  }
}
