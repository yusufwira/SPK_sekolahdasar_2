import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.scss'],
})
export class ParentViewComponent implements OnInit {

  constructor(public user:UserService,public alertController: AlertController,private router: Router,private route: ActivatedRoute) { }

  photo ="";
  username="";
  nama = "";

  alamat="";
  notlp= "";
  email="";
  kecamatan="";

  ngOnInit() {
    this.user.id_orangtua= this.route.snapshot.params['id'];
    this.user.detailOrangtua().subscribe((data) => {          
      console.log(data);   
      this.username = data[0].username;    
      this.photo = data[0].photo;
      this.nama = data[0].nama_user;
      this.alamat = data[0].alamat_user;
      this.notlp = data[0].notelp_user;
      this.email = data[0].email_user;
      this.kecamatan = data[0].kecamatan;
     // console.log(this.photo + this.username);
     });
  }

}
