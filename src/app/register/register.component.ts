import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(public user:UserService, public alertController: AlertController,private route: ActivatedRoute,private router: Router) { }

  
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

   CheckUser(){
    this.user.CekUsername(this.username).subscribe((data) => {        
      console.log(data);
      if(data == true){
        this.peringatan();
      }
      else{
        this.router.navigate(['/register_info', this.username, this.password, this.email ])
      }
    });
   }

   peringatan(){
    const alert =  this.alertController.create({
     header: 'Gagal',
     message: 'Username Telah digunakan',
     buttons: [
       {
         text: 'Okay',
       }
     ]
   }).then(alert=> alert.present());;
  }

}
