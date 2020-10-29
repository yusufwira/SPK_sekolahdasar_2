import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { KriteriaService } from '../kriteria.service';
import { Key } from 'protractor';
import { SekolahService } from '../sekolah.service';
import { EkstrakurikulerService } from '../ekstrakurikuler.service';


@Component({
  selector: 'app-sekolah-create',
  templateUrl: './sekolah-create.component.html',
  styleUrls: ['./sekolah-create.component.scss'],
})
export class SekolahCreateComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    public alertController: AlertController,
    private router: Router,
    public kr:KriteriaService,
    public sekolah:SekolahService,
    public ekstra: EkstrakurikulerService,
  
    ) { }

  data_kriteria:Object;
  detail_kriteria:Object;
  dataEkstra:Object;
  username="";
  iduser="";
  ngOnInit() {
    this.username= localStorage['username'];
    this.iduser= localStorage['iduser'];
    console.log

    this.kr.dataKriteria().subscribe((data) => {   
      this.data_kriteria = data;
    });

    this.kr.detail_kriteria().subscribe((data) => {   
      this.detail_kriteria = data;
      console.log(this.detail_kriteria)
    });

    this.ekstra.dataEkstra(null).subscribe((data) => {   
      this.dataEkstra = data;
      console.log(this.dataEkstra)
    });
    
  }

  inputKey(event:any) {          
    this.ekstra.dataEkstra(event.target.value).subscribe((data) => {      
      this.dataEkstra = data;
    },(error)=>{
     
    });
  }


  // glonal varible
  npsn ="";
  nama= "";
  alamat = "";
  telp="";
  kecamatan ="";
  agama = "All";
  kepala = "";
  jam = "";

  // file input
  inputnpsn(event:any) {    
    this.npsn = event.target.value;  
    // console.log(this.npsn)  
  }
  inputnama(event:any) {    
    this.nama = event.target.value;   
    // console.log(this.nama) 
  }
  inputalamat(event:any) {    
    this.alamat = event.target.value; 
    // console.log(this.alamat)       
  }
  inputtelp(event:any) {    
    this.telp = event.target.value;    
    // console.log(this.telp)
  }
  optionsKecamatan():void{
    let item = this.kecamatan;
    this.kecamatan = item;
    // console.log(this.kecamatan)
  }
  optionsAgama():void{
    let item = this.agama;
    this.agama = item;
    // console.log(this.agama)
  }
  inputkepala(event:any) {    
    this.kepala = event.target.value;   
    // console.log(this.kepala) 
  }

  inputjam(event:any) {    
    this.jam = event.target.value;    
    // console.log(this.jam)
  }



  file: File;
  img1="";
  img2="";
  img3="";
  img4="";
  public datafoto = [];
  changeListener($event, jenis) : void{
    this.file = $event.target.files[0];
    this.sekolah.file = this.file;
    this.sekolah.username = this.username;
    this.sekolah.upload().subscribe((data) => {              
      if(jenis == "1"){
        this.img1 = data['link'];
        var foto ={nama:data['name'],ext:data['ext']}
        this.datafoto.push(foto);
      }
      else if(jenis == "2"){
        this.img2 = data['link'];
        var foto ={nama:data['name'],ext:data['ext']}
        this.datafoto.push(foto);
      }
      else if(jenis == "3"){
        this.img3 = data['link'];
        var foto ={nama:data['name'],ext:data['ext']}
        this.datafoto.push(foto);
      }
      else{
        this.img4 = data['link'];
        var foto ={nama:data['name'],ext:data['ext']}
        this.datafoto.push(foto);
      }
    });
    console.log(this.datafoto)
  }

  id_sekolah = "";
  successCount =0;
  Save_info_sekolah(){
    this.sekolah.Create_infosekolah(this.npsn, this.nama, this.alamat, this.telp, this.kecamatan, this.agama, this.kepala, this.jam, this.iduser).subscribe((data) => { 
      this.sekolah.datafoto = this.datafoto;
      this.id_sekolah = data;
      this.sekolah.idSekolah = data; 
      this.successCount++; 
      this.sekolah.uploudFoto().subscribe((data) => {    
        console.log(data)               
      },(error)=>{
        this.peringatan();
      }); 
    },(error)=>{
      this.peringatan();
    }); 
  }

  Save_info_kriteria(){
    this.arr_data = this.arr_data.filter(function (el) {
      return el != null;
    });
    console.log(this.arr_data)
    this.sekolah.Create_infoKR(this.arr_data, this.id_sekolah).subscribe((data) => {   
      this.arr_data = new Array();
      console.log(data)
      this.successCount++; 
      console.log(this.successCount);
      if (this.successCount == 6) {
        this.router.navigate(['/sekolah-admin'])
      }
    },(error)=>{
      this.peringatan();
    });
  }

  save_ekstra(){
    this.sekolah.ekstra = this.arrEks;
    this.sekolah.sekolah = this.id_sekolah;
    this.sekolah.AddEkstra().subscribe((data) => {      
      // console.log(data);   
      console.log("sukses"); 
      this.successCount++; 
    },(error)=>{
      this.peringatan();
    });        
  }

  arr_data = new Array()
  internet="1";
  optionsInternet(id):void{
    let item = this.internet;
    this.internet = item
    console.log(this.internet);
    this.arr_data[id] = {id:id,value:this.internet}
  }

  akreditasi = "5";
  optionsAkreditasi(id):void{
    let item = this.akreditasi;
    this.akreditasi = item;
    this.arr_data[id] = {id:id,value:this.akreditasi}
    console.log(this.akreditasi)
  }

  TahunAkre = "2013";
  optionsTahunAkre(id):void{
    let item = this.TahunAkre;
    this.TahunAkre = item;
    this.arr_data[id] = {id:id,value:this.TahunAkre}
  }

  public uangGedung = null;
  public uangDaftarUlang = null;
  public uangSpp = null;
  public uangSeragam = null;

  inputAll(event:any, id) { 
    this.arr_data[id] = {id:id,value:event.target.value} 
    if (id == 18) {
      this.uangGedung = event.target.value;
    } else if (id == 19) {
      this.uangDaftarUlang = event.target.value;
    } else if (id == 20) {
      this.uangSpp = event.target.value;
    } else if (id == 21) {
      this.uangSeragam = event.target.value;
    }
  }      

  pilih="";
  arrEks=[];
  getValue(value) {    
    this.pilih = value;
    var sama = false;
    for (let index = 0; index < this.arrEks.length; index++) {
      if(this.arrEks[index] == this.pilih){
        sama = true;
      }
    }
    if(sama == true){
      this.arrEks=this.arrEks.filter(item => item !== this.pilih)
    }
    else{
      this.arrEks.push(this.pilih);
    }
    console.log(this.arrEks);  
  }  

  peringatan(){
    const alert =  this.alertController.create({
     header: 'Gagal Simpan Data',
     message: 'Format Pengisian Data Sekolah Tidak Benar',
     buttons: ['OK']
   }).then(alert=> alert.present());;
  }
 

}
