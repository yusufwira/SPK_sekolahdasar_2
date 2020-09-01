import { Component, OnInit } from '@angular/core';
import { EkstrakurikulerService } from '../ekstrakurikuler.service';
import { AlertController } from '@ionic/angular';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-ektrakurikuler-admin',
  templateUrl: './ektrakurikuler-admin.component.html',
  styleUrls: ['./ektrakurikuler-admin.component.scss'],
})
export class EktrakurikulerAdminComponent implements OnInit {

  constructor(public eks:EkstrakurikulerService,public alertController: AlertController,public events: Events) { }

  nama="";
  public datas:Object;

  ngOnInit(){

    
    
    this.eks.dataEkstra().subscribe((data) => {      
      this.datas = data;
      console.log(data)      
    });

    this.events.subscribe('data', (data) => {
      //console.log(data)
      this.eks.dataEkstra().subscribe((data) => {      
        this.datas = data;
        console.log(data)      
      });
    });
  }


  delete(id){
    this.eks.deleteEks(id).subscribe((data) => {            
      this.ngOnInit();       
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
