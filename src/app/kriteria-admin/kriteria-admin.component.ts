import { Component, OnInit } from '@angular/core';
import { KriteriaService } from '../kriteria.service';
import { AlertController } from '@ionic/angular';
import {Router} from "@angular/router";


@Component({
  selector: 'app-kriteria-admin',
  templateUrl: './kriteria-admin.component.html',
  styleUrls: ['./kriteria-admin.component.scss'],
})
export class KriteriaAdminComponent implements OnInit {

  constructor(public kr:KriteriaService,public alertController: AlertController) { }

  nama="";
  public datas:Object;

  ngOnInit() {
    
    this.kr.dataKriteria().subscribe((data) => {      
      this.datas = data;
     
    });
  }


  delete(id){
    this.kr.deleteKriteria(id).subscribe((data) => {  
      console.log(data)                
    });
  }

  peringatan(id){
    const alert =  this.alertController.create({
     header: 'Are you sure ?',
     message: 'All relete on this data can be delete',
     buttons: [
      {
        text: 'Cancel',        
      }, {
        text: 'Okay',
        handler: () => {
          //console.log('Confirm Okay');
          this.delete(id);
        }
      }
    ]
   }).then(alert=> alert.present());;
  }

}
