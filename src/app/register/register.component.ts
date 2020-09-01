import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor() { }

  
  password="";
  email="";
  check=false;

  ngOnInit():void {


  }
  username:string;
  inputusername(event:any) {    
    this.username = event.target.value;
    this.checker(this.username,this.password,this.email);
   }

   inputpassword(event:any) {    
    this.password = event.target.value;
    this.checker(this.username,this.password,this.email);
   }

   inputemail(event:any) {    
    this.email = event.target.value;
    this.checker(this.username,this.password,this.email);
   }

   checker(username,password,email){
   		if(username != null){
   			if(password != ""){
   				if(email!=""){
   					this.check=true;
   				}
   			}   		
   		}
   }

   next(){
   	console.log(this.username);
   }

}
