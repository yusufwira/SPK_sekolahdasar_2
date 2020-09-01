import { Component, OnInit } from '@angular/core';
import { KriteriaService } from '../kriteria.service';
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kriteria-create',
  templateUrl: './kriteria-create.component.html',
  styleUrls: ['./kriteria-create.component.scss'],
})
export class KriteriaCreateComponent implements OnInit {

  constructor(public kr:KriteriaService,private route: ActivatedRoute,public alertController: AlertController,private router: Router) { }

  ngOnInit() {}

  nama="";
  inputnama(event:any) {    
    this.nama = event.target.value;    
   }
   
   Save(){
     this.kr.nama = this.nama;     
     this.kr.inputKriteria().subscribe((data) => {       
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
        this.router.navigate(['/kriteria-admin'])
      }
     }]
   }).then(alert=> alert.present());;
  }

}
