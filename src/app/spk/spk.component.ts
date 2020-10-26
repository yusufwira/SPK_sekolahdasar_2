import { Component, OnInit } from '@angular/core';
import { KriteriaService } from '../kriteria.service';
import { SekolahService } from '../sekolah.service';
import { SpkService } from '../spk.service';
import {Map,tileLayer,marker} from 'leaflet';
import {NativeGeocoder,NativeGeocoderOptions} from "@ionic-native/native-geocoder/ngx";

@Component({
  selector: 'app-spk',
  templateUrl: './spk.component.html',
  styleUrls: ['./spk.component.scss'],
})
export class SpkComponent implements OnInit {

  map:Map;
  newMarker:any;
  address:string[];
  constructor(private geocoder: NativeGeocoder,public kriteria:KriteriaService, public sekolah:SekolahService,public spk:SpkService) { }
  
  prog_bar:String="0.2";
  public datas_kriteria:Object;
  public datas_sekolah:Object;
  public detail_kriteria:Object;
  pilih="";
  arr_kriteria=[];
  arr_sekolah=[];

  x="";
  y="";
 
  ngOnInit() {
    this.kriteria.dataKriteria().subscribe((data) => {      
      this.datas_kriteria = data;    
      console.log(this.datas_kriteria);  
    });

    this.sekolah.ListSekolah_ortu().subscribe((data) => {    
      console.log(data);            
      this.datas_sekolah = data;  
     });

    //  this.kriteria.detail_kriteria().subscribe((data) => {    
    //   console.log(data);            
    //   this.datas_sekolah = data;  
    //  });

    
     
     
     
   
  }

 

 
  

  progres(bar:String){
    this.prog_bar = bar;
    console.log(this.prog_bar)
    if(this.prog_bar == "0.5"){
      let lebar = Object.keys(this.datas_sekolah)
      //this.loadmap("-6.2008406","106.7987143",this.datas_sekolah[0].npsn)
      for (let i = 0; i < lebar.length; i++) {       
        let kx = this.datas_sekolah[i]['koor_X']
        let ky = this.datas_sekolah[i]['koor_Y']
        this.loadmap(kx,ky,this.datas_sekolah[i].npsn)
        
        //this.map.off();        
      }

      console.log(this.jarak)
    }
    
    
  }
  
  
  getValue_kriteria(value){
    this.pilih = value;
    var sama = false;
    for (let index = 0; index < this.arr_kriteria.length; index++) {
      if(this.arr_kriteria[index] == this.pilih){
        sama = true;
      }
    }
    if(sama == true){
      this.arr_kriteria=this.arr_kriteria.filter(item => item !== this.pilih)
    }
    else{
      this.arr_kriteria.push(this.pilih);
    }
    
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
         
         //this.map = new Map("mapId").setView([x,y], 13);
         
    });
  }

  getDistance(from, to)
  {
    var jarak = (from.distanceTo(to)).toFixed(0)/1000;
    return jarak;
  }


  ve_kriteria = [];
  cr_kriteria = "";
  public alternatif:object;
  hasil_jadi = [];
  Proses(){
    console.log(this.arr_kriteria);
    console.log(this.arr_sekolah);


    
    this.spk.proses_ahp(this.arr_kriteria,this.arr_sekolah, this.jarak).subscribe((data) => {    
      console.log(data);
      this.ve_kriteria = data.VE_CRIT;
      this.cr_kriteria = data.CR_CRIT;
      this.alternatif = data.VE_ALT;
      this.hasil_jadi = data.Hasil_jadi;
      console.log(this.hasil_jadi);
      this.progres("1.0");
      console.log(this.alternatif);
     });


     
    
  }

  key = "";
  inputSearch(event:any) {    
    this.key = event.target.value;    
    this.sekolah.Search("nama_sekolah", this.key).subscribe((data) => {   
      console.log(data); 
      if(data != "belum ada"){
        this.datas_sekolah = data
      }            
     });
  }
}
