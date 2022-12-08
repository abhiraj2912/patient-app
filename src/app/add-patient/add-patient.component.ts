import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  name=""
  gender=""
  address=""
  tripunithura=""
  dob=""
  email=""
  phone=""
  docName=""
  appoDate=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"name":this.name,"gender":this.gender,"address":this.address,"dob":this.dob,"email":this.email,"phone":this.phone,"docName":this.docName,"appoDate":this.appoDate}
    console.log(data)

    this.api.addPatient(data).subscribe(
      (response:any)=>{
        console.log(response)
      }
    )
  }

}
