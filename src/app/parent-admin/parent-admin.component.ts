import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-parent-admin',
  templateUrl: './parent-admin.component.html',
  styleUrls: ['./parent-admin.component.scss'],
})
export class ParentAdminComponent implements OnInit {

  constructor(public user:UserService,public alertController: AlertController) { }

  public datas:any;

  ngOnInit() {
    this.user.dataOrangtua().subscribe((data) => {    
      this.datas = data;
      console.log(data);       
     });
  }

  Hapus(id){
    this.user.hapusOrangtua(id).subscribe((data) => {    
      console.log(data);
      this.ngOnInit()       
     });
  }


  peringatan(id){
    const alert =  this.alertController.create({
     header: 'Apakah Anda Yakin ?',
     message: 'Semua data yang berhubungan dengan data ini akan dihapus',
     buttons: [
      {
        text: 'Cancel',        
      }, {
        text: 'Okay',
        handler: () => {         
          this.Hapus(id)
        }
      }
    ]
   }).then(alert=> alert.present());;
  }

}
