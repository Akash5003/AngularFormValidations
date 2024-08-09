import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formdata:any={
  


  };
  submit(){
    if (this.formdata.password !== this.formdata.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    else{
    console.log(this.formdata);
  }
}
  resetForm() {
    this.formdata = {}; 
    this.formdata.resetForm(); 
  }
  
}
