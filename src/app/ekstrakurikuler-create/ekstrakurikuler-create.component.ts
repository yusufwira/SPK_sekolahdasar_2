import { Component, OnInit } from '@angular/core';
import { EkstrakurikulerService } from '../ekstrakurikuler.service';
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-ekstrakurikuler-create',
  templateUrl: './ekstrakurikuler-create.component.html',
  styleUrls: ['./ekstrakurikuler-create.component.scss'],
})
export class EkstrakurikulerCreateComponent implements OnInit {

  constructor(public eks:EkstrakurikulerService,private route: ActivatedRoute,public alertController: AlertController,private router: Router, public events: Events) { }

  public prev_page="";
  public temp_id = "";
  ngOnInit() {
    this.prev_page =this.route.snapshot.params['prev_page'];
    this.temp_id = this.route.snapshot.params['id'];
    console.log(this.prev_page, this.temp_id);
  }

  nama="";
  deskripsi="";
 
  inputnama(event:any) {  
    
    this.nama = event.target.value;    
   }


   inputdesc(event:any) {    
    this.deskripsi = event.target.value;    
   }

   Save(){
     this.eks.nama = this.nama;
     this.eks.desc = this.deskripsi;
     this.eks.inputEkstra().subscribe((data) => {      
      //console.log(data)
      if(data == "sudah"){
        this.peringatan('Save Failed', 'Data has arrived at the database'); 
      }
      else{
        this.peringatan('Save Success', 'Data has been in save'); 
      }
                    
    });    
   }


   peringatan(headers, data){
    const alert =  this.alertController.create({
     header: headers,
     message: data,
     buttons: [{
      text: 'Okay',
      handler: () => {
        this.events.publish('data',data );
        if(this.temp_id == '0'){
          this.router.navigate(['/'+this.prev_page])
        }
        else{
          this.router.navigate(['/'+this.prev_page+"/"+this.temp_id])
        }
       
      }
     }]
   }).then(alert=> alert.present());;
  }

}
