import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-adminsekolah-admin',
  templateUrl: './adminsekolah-admin.component.html',
  styleUrls: ['./adminsekolah-admin.component.scss'],
})
export class AdminsekolahAdminComponent implements OnInit {

  constructor(public user:UserService,public alertController: AlertController) { }

  public datas:any;
  ngOnInit() {
    this.user.dataAdminSekolah().subscribe((data) => {    
      this.datas = data;
      console.log(data);       
     });
  }

}
