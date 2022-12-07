import { Component } from '@angular/core';

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

  readValues=()=>{
    let data:any={"name":this.name,"gender":this.gender,"address":this.address,"dob":this.dob,"email":this.email,"phone":this.phone,"docName":this.docName,"appoDate":this.appoDate}
    console.log(data)
  }

}
