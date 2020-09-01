import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController, LoadingController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-registrasi2',
  templateUrl: './registrasi2.component.html',
  styleUrls: ['./registrasi2.component.scss'],
})
export class Registrasi2Component implements OnInit {
  imageURI:any;
  imageFileName:any;
  constructor( private route: ActivatedRoute, public user:UserService,public alertController: AlertController,private transfer: FileTransfer,private camera: Camera, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,private router: Router) { }

  parent= false;
  school = false;

  username="";
  password="";
  nama="";
  alamat="";
  kecamatan="";
  notelp="";
  email="";
  public pic:any;
  hak_akses="";
  img="";
  namaPhoto = "";
  ngOnInit() {
  	this.username = this.route.snapshot.params['username'];
  	this.password = this.route.snapshot.params['password'];
  	this.email = this.route.snapshot.params['email'];
  	console.log(this.username+" "+this.password+" "+this.email)
  }

file: File;
 changeListener($event) : void {
    this.file = $event.target.files[0];
    this.user.file = this.file;
    this.user.username = this.username;
    this.user.uploadfoto().subscribe((data) => {  
      this.img = data['link'];
      this.namaPhoto = data['namafile'];
      console.log(data);
    });
    
  }

  coba(){
    //var fileVal=document.getElementById("pic ");
    console.log(this.pic)
  }

  active_parent(){
  	this.parent = true;
  	this.school = false;
  	this.hak_akses = "parent";
  }

  active_school(){
  	this.parent = false;
  	this.school = true;
  	this.hak_akses = "admin_sekolah";
  }

   inputnama(event:any) {    
    this.nama = event.target.value;    
   }

   inputalamat(event:any) {    
    this.alamat = event.target.value;    
   }

   inputnotelp(event:any) {    
    this.notelp = event.target.value;    
   }

   optionsFn():void{

      this.pic = document.getElementById("Id");
      console.log(this.pic);
     
   	  let item = this.kecamatan;
   	  this.kecamatan = item;
   }


   register(){     
   	  this.user.username = this.username;
      this.user.password = this.password;
      this.user.email = this.email;
      this.user.nama = this.nama;
      this.user.alamat = this.alamat;
      this.user.notelp = this.notelp;
      this.user.kecamatan = this.kecamatan;
      this.user.hak = this.hak_akses;
      this.user.photo = this.namaPhoto;
     
      this.user.Registrasi().subscribe((data) => {      
        console.log(data);
        this.peringatan(data);                
      });
   }


   peringatan(data){
     const alert =  this.alertController.create({
      header: 'Registrasi',
      message: data,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/login'])
          }
        }
      ]
    }).then(alert=> alert.present());;
   }
}
