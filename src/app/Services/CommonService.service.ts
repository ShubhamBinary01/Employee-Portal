import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  readonly APIUrl = "https://localhost:44319/api"

constructor(private http: HttpClient) { 

}

GetEmployeeRecord(){
  return this.http.get(this.APIUrl+'/user');
}

AddNewRecord(val:any){
  return this.http.post(this.APIUrl+'/user',val);
}

UpdateRecord(val:any){
  return this.http.put(this.APIUrl+'/user',val);
}

DeleteNewRecord(val:any){
  return this.http.delete(this.APIUrl+'/user/'+val);
}

}
