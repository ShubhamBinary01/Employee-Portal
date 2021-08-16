import { Component } from '@angular/core';
import { CommonServiceService } from './Services/CommonService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learnAngular';
  EmployeeList: any;
  FormObj = {
    EmployeeID: '',
    EmployeeName: '',
    EmployeeSalary: '',
    EmployeeAddress: '',
    EmployeeCity: '',
  };
  ModalTitle:String | undefined;
  ActivateAddEdit:boolean= false;
  emp:any;
  addflag:boolean=false;
  updateflag:boolean=false;

  constructor(private svc: CommonServiceService){ 

    this.svc.GetEmployeeRecord().subscribe(data=>{
      this.EmployeeList = data;
    })
  }
  addClick(){
    this.ModalTitle="Add NEW Record" ;
    this.ActivateAddEdit=true;
    this.addflag=true;
    this.updateflag=false;
  }

  closeClick(){
    this.ActivateAddEdit=false;
  }

  editClick(item:any){
    this.emp=item;
    this.ModalTitle="Edit Record";
    this.ActivateAddEdit=true;
    this.updateflag=true;

  }

  deleteClick(item:any){
    if(confirm('Are you sure?')){
      this.svc.DeleteNewRecord(item.EmployeeID).subscribe(data=>{
        alert(data.toString());
      })
    }
  }

  addEmployee(){
    var val = {EmployeeID:this.FormObj.EmployeeID,
      EmployeeName:this.FormObj.EmployeeName,
      EmployeeSalary:this.FormObj.EmployeeSalary,
      EmployeeAddress:this.FormObj.EmployeeAddress,
      EmployeeCity:this.FormObj.EmployeeCity};
    this.svc.AddNewRecord(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeID:this.FormObj.EmployeeID,
      EmployeeName:this.FormObj.EmployeeName,
      EmployeeSalary:this.FormObj.EmployeeSalary,
      EmployeeAddress:this.FormObj.EmployeeAddress,
      EmployeeCity:this.FormObj.EmployeeCity};
    this.svc.UpdateRecord(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}