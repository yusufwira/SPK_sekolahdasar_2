import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminsekolah-view',
  templateUrl: './adminsekolah-view.component.html',
  styleUrls: ['./adminsekolah-view.component.scss'],
})
export class AdminsekolahViewComponent implements OnInit {

  constructor(public user:UserService,public alertController: AlertController,private router: Router,private route: ActivatedRoute) { }

  photo ="";
  username="";
  nama = "";

  alamat="";
  notlp= "";
  email="";
  kecamatan=""

  idSekolah="";
  nama_sekolah="";
  alamat_sekolah="";
  notelp_sekolah="";
  foto="";

  ngOnInit() {
    this.user.id_admin = this.route.snapshot.params['id'];
    this.user.detailAdminSekolah().subscribe((data) => {
      this.username = data[0].username;    
      this.photo = data[0].photo;
      this.nama = data[0].nama_user;   
      this.alamat = data[0].alamat_user;
      this.notlp = data[0].notelp_user;
      this.email = data[0].email_user;
      this.kecamatan = data[0].kecamatan;  
      
      this.idSekolah = data[0].idinfo_sekolah;
      this.nama_sekolah = data[0].nama_sekolah;
      this.alamat_sekolah = data[0].alamat_sekolah;
      this.notelp_sekolah = data[0].notelp_sekolah;
      this.foto = data[0].nama_foto+"."+data[0].extention;
      console.log(data);
      console.log(this.foto);       
     });
  }

}
