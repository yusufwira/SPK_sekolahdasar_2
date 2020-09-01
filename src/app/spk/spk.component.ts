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
  pilih="";
  arr_kriteria=[];
  arr_sekolah=[];

  ngOnInit() {
    this.kriteria.dataKriteria().subscribe((data) => {      
      this.datas_kriteria = data;    
      console.log(this.datas_kriteria);  
    });

    this.sekolah.ListSekolah_ortu().subscribe((data) => {    
      this.datas_sekolah = data;   
      console.log(data);          
     });
   
  }

  progres(bar:String){
    this.prog_bar = bar;
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


  getValue_sekolah(value){
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

  ve_kriteria = [];
  cr_kriteria = "";
  alternatif:object;
  hasil_jadi = [];
  Proses(){
    console.log(this.arr_kriteria);
    console.log(this.arr_sekolah);
    this.spk.proses_ahp(this.arr_kriteria,this.arr_sekolah).subscribe((data) => {    
      console.log(data);
      this.ve_kriteria = data.VE_CRIT;
      this.cr_kriteria = data.CR_CRIT;
      this.alternatif = data.VE_ALT;
      this.hasil_jadi = data.Hasil_jadi;
      console.log(this.hasil_jadi);
      this.progres("1.0");
     });
    
  }
}
