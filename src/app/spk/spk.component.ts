import { Component, OnInit, ViewChild } from '@angular/core';
import { KriteriaService } from '../kriteria.service';
import { SekolahService } from '../sekolah.service';
import { SpkService } from '../spk.service';
import {Map,tileLayer,marker} from 'leaflet';
import {NativeGeocoder,NativeGeocoderOptions} from "@ionic-native/native-geocoder/ngx";
import { AlertController, IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-spk',
  templateUrl: './spk.component.html',
  styleUrls: ['./spk.component.scss'],
})
export class SpkComponent implements OnInit {

  @ViewChild('slides', { read: IonSlides, static:true }) slides: IonSlides;
  map:Map;
  newMarker:any;
  address:string[];
  constructor(private geocoder: NativeGeocoder,public kriteria:KriteriaService, public sekolah:SekolahService,public spk:SpkService, public alertController: AlertController) { }
  
  prog_bar:String="0.2";
  public datas_kriteria:Object;
  public datas_sekolah:Object;
  public detail_kriteria:Object;
  pilih="";
  public arr_kriteria=[];
  public arr_kriteria_id='';
  arr_sekolah=[];

  x="";
  y="";
 
  ngOnInit() {
    this.kriteria.dataKriteria().subscribe((data) => {      
      this.datas_kriteria = data;    
    });

    this.sekolah.ListSekolah_ortu().subscribe((data) => {              
      this.datas_sekolah = data;  
     });
  }

  progres(bar:String){
    this.prog_bar = bar;
    if(this.prog_bar == "0.5"){      
      if (this.arr_kriteria.length >= 2) {
        this.slides.slideNext()
        this.loadJarak();       
      } else {
        this.peringatan('Perhatian', 'Jumlah Kriteria yang dipilih harus lebih dari 1')
      }            
    }
  }

  getValue_kriteria(id,value){
    this.pilih = value;
    var sama = false;
    for (let index = 0; index < this.arr_kriteria.length; index++) {
      if(this.arr_kriteria[index] == this.pilih){
        sama = true;
      }
    }
    if(sama == true){
      this.arr_kriteria=this.arr_kriteria.filter(item => item !== this.pilih)
      this.arr_kriteria_id=this.arr_kriteria_id.replace(id, "");
    }
    else{
      this.arr_kriteria.push(this.pilih);
      this.arr_kriteria_id = this.arr_kriteria_id + id;
      if (id == 1 || id == 2 || id == 5) {
        this.detailKriteria(id, value);
      }
      else if (id == 3) {      
        let alert = this.alertController.create({
        header: 'Detail '+value,
        message: 'Jumlah Ekstrakurikuler sebagai pertimbangan' ,
        buttons: [
          {
            text: 'Ok',        
          }
        ]
        }).then(alert=> alert.present());
      }
      else if (id == 4) {      
        let alert = this.alertController.create({
        header: 'Detail '+value,
        message: 'Jarak Lokasi Anda saat ini sebagai pertimbangan' ,
        buttons: [
          {
            text: 'Ok',        
          }
        ]
        }).then(alert=> alert.present());
      }
    }
  }

  detailKriterias:any = [];
  detailKriteria(id, value){
    this.kriteria.detail_kriteria_id(id).subscribe((data) => {          
      this.detailKriterias = data;
      this.show(this.detailKriterias, value);
     });
  }

  show(data, value) {
  let itemList = '';
   data.forEach(element => {
    itemList += '<li>'+ element['detail']+'</li>'
   });

   let message = `<ul>${itemList }</ul>`;
      let alert = this.alertController.create({
       header: 'Detail '+value,
       message: message ,
       buttons: [
         {
           text: 'Ok',        
         }
       ]
      }).then(alert=> alert.present());
  }


  getValue_sekolah(value, x, y){
    this.pilih = value;
    var sama = false;
    for (let index = 0; index < this.arr_sekolah.length; index++) {
      if(this.arr_sekolah[index] == this.pilih){
        sama = true;
      }
    }
    if(sama == true){
      this.arr_sekolah=this.arr_sekolah.filter(item => item !== this.pilih)
    }
    else{
      this.arr_sekolah.push(this.pilih);
    }    
  }

  loadJarak(){
    let lebar = Object.keys(this.datas_sekolah)
    for (let i = 0; i < lebar.length; i++) {       
      let kx = this.datas_sekolah[i]['koor_X']
      let ky = this.datas_sekolah[i]['koor_Y']
      this.loadmap(kx,ky,this.datas_sekolah[i].npsn)    
    }
  }

  loadmap(x,y,npsn){
    this.map = new Map(npsn).setView([x,y], 13);   
    this.locatePosition(x,y);
  }

  public jarak= [];
  locatePosition(x,y){
    this.map.locate({setView:true}).on("locationfound", (e: any)=> {
       this.newMarker = marker([x,y], {autoPan: 
        true}).addTo(this.map);       
         var markerFrom = marker([e.latitude,e.longitude]);
         var markerTo =  marker([x,y]);
         var from = markerFrom.getLatLng();
         var to = markerTo.getLatLng();
         var jarak = this.getDistance(from, to);         
         this.jarak.push(jarak.toString());
    });
  }

  getDistance(from, to)
  {
    var jarak = (from.distanceTo(to)).toFixed(0)/1000;
    return jarak;
  }


  ve_kriteria = [];
  cr_kriteria = "";
  public alternatif:any = [];
  hasil_jadi = [];
  Proses(){
    if ( this.arr_sekolah.length >= 2  ) {
      this.spk.proses_ahp(this.arr_kriteria,this.arr_sekolah, this.jarak).subscribe((data) => {    
        this.ve_kriteria = data.VE_CRIT;
        this.cr_kriteria = data.CR_CRIT.toFixed(4);
        this.alternatif = data.VE_ALT;
        this.hasil_jadi = data.Hasil_jadi;
        this.spk.reset_bobot().subscribe((data) => {
          this.progres("1.0");
          this.slides.slideNext();
        });
       });
    } else {
      this.peringatan('Perhatian', 'Jumlah Sekolah yang dipilih harus lebih dari 1')
    }             
  }

  ProsesAll(){
    if (this.arr_kriteria.length >= 2) {
      this.loadJarak();
      this.peringatanSemuaSekolah();       
    } else {
      this.peringatan('Perhatian', 'Jumlah Kriteria yang dipilih harus lebih dari 1')
    }    
  }

  ProsesAllGo(){    
    this.spk.proses_ahp_all(this.arr_kriteria, this.jarak).subscribe((data) => {    
      this.ve_kriteria = data.VE_CRIT;
      this.cr_kriteria = data.CR_CRIT.toFixed(4);
      this.alternatif = data.VE_ALT;
      this.hasil_jadi = data.Hasil_jadi;
      this.spk.reset_bobot().subscribe((data) => {
        this.progres("1.0");
        this.slides.slideTo(2, 100);
      });      
     });
  }

  key = "";
  inputSearch(event:any) {    
    this.key = event.target.value;    
    this.sekolah.Search("nama_sekolah", this.key).subscribe((data) => {    
      if(data != "belum ada"){
        this.datas_sekolah = data
      }            
     });
  }


  peringatan(header, massage){
    let alert = this.alertController.create({
      header: header,
      message: massage,
      buttons: [
        {
          text: 'Ok',        
        }
      ]
      }).then(alert=> alert.present());
  }

  peringatanSemuaSekolah(){
    let alert = this.alertController.create({
      header: "Peringatan",
      message: "Apakah anda ingin membandingkan semua sekolah ?",
      buttons: [
        {
          text: 'Ya',
          handler: () => {            
            this.ProsesAllGo()
          }
        },        
      ]
      }).then(alert=> alert.present());
  }
}