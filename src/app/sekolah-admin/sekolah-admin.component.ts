import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SekolahService } from '../sekolah.service';
import { ModalController } from '@ionic/angular';






@Component({
  selector: 'app-sekolah-admin',
  templateUrl: './sekolah-admin.component.html',
  styleUrls: ['./sekolah-admin.component.scss'],
  
})
export class SekolahAdminComponent implements OnInit {

  constructor(public alertController: AlertController, public sekolah:SekolahService,private modalCtrl: ModalController) { }

  public dataSekolah= [];
  public jumlah_sekolah="";
  public cek = false;
  public hak = "";
  ngOnInit() {    
    this.hak = localStorage['hak_akses'];
    if(localStorage['hak_akses'] == 'admin_sekolah'){
      this.sekolah.ListSekolahAdmin(localStorage['iduser']).subscribe((data) => {  
        if(data == 'belum ada'){
          this.cek = true;
        }
        else{
          this.dataSekolah = data;
          this.jumlah_sekolah= data[0].jumlah
          console.log(this.dataSekolah);  
        }
                 
       });
    }    
    else{
      this.sekolah.ListSekolah().subscribe((data) => {    
        console.log(data)  
        if(data == 'belum ada'){
          this.dataSekolah = []
          this.cek = true;
        }
        else{
          this.dataSekolah = data;
          this.jumlah_sekolah= data[0].jumlah
          this.cek = true;
          console.log(this.dataSekolah); 
        }
                  
       });
    }

    
  }

  search ="";
  inputsearch(event:any) {    
    this.search = event.target.value; 
    console.log(this.search)  
    this.sekolah.Search(this.search).subscribe((data) => {    
      this.dataSekolah = data;     
      console.log(this.dataSekolah);     
     }); 
   }


   validasi(id,status){
     console.log(id+status)
     if(status == "Tertolak"){
        this.peringatan_tolak();
     }
     this.sekolah.Validasi(id,status).subscribe((data) => {               
      console.log(data);   
      this.ngOnInit();
     }); 
   }

   
  peringatan(id){
    const alert =  this.alertController.create({
     header: 'Peringatan Penghapusan Sekolah',
     message: 'Semua data menengenai sekolah dan hal berhubungan dengan sekolah akan terhapus',
     buttons: [
      {
        text: 'Cancel',        
      }, {
        text: 'Okay',
        handler: () => {
           this.sekolah.Delete(id).subscribe((data) => {               
            console.log(data);   
            if(data == "sukses"){
              this.peringatan_selesai();
            }
           }); 
        }
      }
    ]
   }).then(alert=> alert.present());;
  }


  peringatan_selesai(){
    const alert =  this.alertController.create({
     header: 'SUKSES',
     message: 'Data sekolah berhasil terhapus',
     buttons: [
      {
        text: 'Okay',
        handler: () => {
           this.ngOnInit()
        }
      }
    ]
   }).then(alert=> alert.present());;
  }

  public alasan ="";
  inputAlasan(event:any) {    
    this.alasan = event.target.value; 
    console.log(this.alasan)     
   }

  peringatan_tolak(){
    const alert =  this.alertController.create({
     header: 'Alasan Tertolak',
     message: '<ion-input type="text" [(ngModel)]="alasan"> </ion-input>  ',
     buttons: [
      {
        text: 'Okay',
        handler: () => {
           console.log(this.alasan)
        }
      }
    ]
   }).then(alert=> alert.present());;
  }


  

}
