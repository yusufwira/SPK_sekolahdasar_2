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
  public temp_dataSekolah= [];
  public jumlah_sekolah="";
  public cek = false;
  public hak = "";
  ngOnInit() {    
    this.hak = localStorage['hak_akses'];
    if(localStorage['hak_akses'] == 'admin_sekolah'){
      this.sekolah.ListSekolahAdmin(localStorage['iduser']).subscribe((data) => {  
        if(data == 'belum ada'){
          this.dataSekolah = null;
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
          //this.cek = true;
          this.dataSekolah = data;
          this.temp_dataSekolah = data;
          this.jumlah_sekolah= data[0].jumlah
          this.cek = true;
          console.log(this.dataSekolah); 
        }
                  
       });
    }

    
  }

  filter ="";
  optionsFilter():void{
    let item = this.filter;
    this.filter = item;
    console.log(this.filter)
    let temp_arr = [];
    if(this.filter == "Semua"){
      temp_arr =  this.temp_dataSekolah;
    }
    for (let i = 0; i < this.temp_dataSekolah.length; i++) {
      if(this.temp_dataSekolah[i]['status_sekolah'] == this.filter){
        temp_arr.push(this.temp_dataSekolah[i])
        console.log(temp_arr)
      }
    }
    this.dataSekolah = temp_arr
 
    

     
    
  }

  search ="";
  inputsearch(event:any) {    
    this.search = event.target.value; 
    console.log(this.search)  
    this.sekolah.Search("nama_sekolah",this.search).subscribe((data) => {    
      console.log(data); 
      if(data != "belum ada"){
        this.dataSekolah = data
      }     
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
    console.log(id);
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
            console.log(id);   
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
