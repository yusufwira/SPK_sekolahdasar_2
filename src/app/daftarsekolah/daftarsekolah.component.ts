import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SekolahService } from '../sekolah.service';

@Component({
  selector: 'app-daftarsekolah',
  templateUrl: './daftarsekolah.component.html',
  styleUrls: ['./daftarsekolah.component.scss'],
})
export class DaftarsekolahComponent implements OnInit {

  constructor(public alertController: AlertController, public sekolah:SekolahService) { }

  public datas:any;
  ngOnInit() {
    this.sekolah.ListSekolah_ortu().subscribe((data) => {   
      console.log(data); 
      if(data != "belum ada"){
        this.datas = data
      }
      
      
     });
     
  }

  key=""
  inputKey(event:any) {    
    this.key = event.target.value;    
    console.log(this.key)
  }

  kategori="nama_sekolah";
  optionsKategori():void{
    let item = this.kategori;
    this.kategori = item;
    console.log(this.kategori)
    
  }

  Search(){
    this.sekolah.Search(this.kategori, this.key).subscribe((data) => {   
      console.log(data); 
      if(data != "belum ada"){
        this.datas = data
      }            
     });
  }
}
