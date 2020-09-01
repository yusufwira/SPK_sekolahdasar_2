import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Events } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  activeMenu: string;

  constructor(public user:UserService,public alertController: AlertController, private router: Router,public menu: MenuController, public events: Events) { 
   this.menu1Active();
 }

  ngOnInit():void {
    localStorage['username']=0;
    localStorage['nama']=0;
    localStorage['photo']=0;
    this.ionViewWillEnter()
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  username="";
  password="";
  inputusername(event:any) {    
    this.username = event.target.value;    
   }

   inputpassword(event:any) {    
    this.password = event.target.value;    
   }

   login():void{
   	this.user.username = this.username;
   	this.user.password = this.password;
   	this.user.Login().subscribe((data) => {      
        console.log(data);
        if(data.length == 0)
        {
        	this.peringatan();
        }
        else{
          
        	localStorage['username'] = this.username;
          console.log(data[0].nama_user)
          localStorage['iduser'] = data[0].id_users;
          localStorage['nama'] = data[0].nama_user;
          localStorage['photo'] = data[0].photo;
          localStorage['hak_akses'] = data[0].hak_akses;
          this.events.publish('user:created', this.username,data[0].nama_user,data[0].photo,data[0].hak_akses);
        	this.router.navigate(['/home'])
        }
    },(error)=>{
      this.peringatan();
      console.log()
    }
    );
  
   }


   peringatan(){
     const alert =  this.alertController.create({
      header: 'Login Gagal',
      message: 'Maaf Username dan Password salah',
      buttons: ['OK']
    }).then(alert=> alert.present());;
   }


   menu1Active() {
    this.activeMenu = 'menu1';
    this.menu.enable(false, 'menu1');   
  }
}
