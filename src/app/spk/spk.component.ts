import { Component, OnInit, ViewChild } from '@angular/core';
import { KriteriaService } from '../kriteria.service';
import { SekolahService } from '../sekolah.service';
import { SpkService } from '../spk.service';
import {Map,tileLayer,marker} from 'leaflet';
import {NativeGeocoder,NativeGeocoderOptions} from "@ionic-native/native-geocoder/ngx";
import { AlertController, IonSlides} from '@ionic/angular';
import { Router } from '@angular/router';

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
  constructor(private geocoder: NativeGeocoder,
    public kriteria:KriteriaService, 
    public sekolah:SekolahService,
    public spk:SpkService, 
    public alertController: AlertController,
    private router: Router) { }
  
  prog_bar:String="0.2";
  public datas_kriteria:Object;
  public datas_sekolah:Object;
  public detail_kriteria:Object;
  pilih="";
  public arr_kriteria=[];
  public arr_kriteria_id='';
  arr_sekolah=[];

  public checkLoc = "";

  x="";
  y="";

  x_address = 0.0;
  y_address = 0.0;
 
  ngOnInit() {
    console.log(this.arr_kriteria)
    this.kriteria.dataKriteria().subscribe((data) => {      
      this.datas_kriteria = data;    
      console.log(this.datas_kriteria);  
    });

    this.sekolah.ListSekolah_ortu().subscribe((data) => {    
      console.log(data);            
      this.datas_sekolah = data;  
     });

     if (localStorage['alamat'] != null) {
      var userAddress = this.filterAddress(localStorage['alamat']);

      this.spk.getCoorAddress(userAddress).subscribe((data) => {
        this.x_address = parseFloat(data[0].lat)
        this.y_address = parseFloat(data[0].lon);
        console.log(this.x_address,'X address');
        console.log(this.y_address,'Y address');
      });
     }
  }

  filterAddress(address)
  {
    address = address.replace("Jl ", "");
    var removeNo = address.substring(address.indexOf("no"));
    address = address.replace(" "+removeNo, "");
    address = address.replaceAll(" ", "+");
    
    return address;
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
        inputs: [
          {
            name: 'currentLoc',
            type: 'radio',
            label: 'Lokasi Saat ini',
            value: 'currentLoc',
            checked: true
          },
          {
            name: 'addressLoc',
            type: 'radio',
            label: 'Lokasi Alamat',
            value: 'addressLoc'
          },
        ],
        buttons: [
          {
            text: 'Ok',
            handler: (data) => {            
              console.log(data)
              this.checkLoc = data;
            }        
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

 
  public listSubKriteria = <any>{
    Fasilitas:["11", "12", "13", "14", "15", "16", "17"],
    Akademis:["6", "7", "8", "9", "10"],
    Biaya:["18", "19", "20", "21", "22"]
  }

  public isCheckFasilitas = false;
  public isCheckAkademis = false;
  public isCheckBiaya = false;

  show(data, value) {
    let itemList = '';
    let input = [];
    let namaKriteria = "";
    let idKriteria = "";
    data.forEach(element => {
      itemList += '<li>'+ element['detail']+'</li>';
      namaKriteria = element['nama_kriteria'];
      idKriteria = element['id_kriteria'];
      input.push(
        {
          type: 'checkbox',
          label:  element['detail'],
          value: element['id_detail'],
          checked: false
        }
      );
    });

    let message = `<ul>${itemList }</ul>`;
    let alert = this.alertController.create({
       header: 'Detail '+value,
       cssClass: 'my-custom-alert',
       message: "Pilih Subkriteria" ,
       inputs: input,
       buttons: [
         {
           text: 'Ok',
           handler:data=> {
            console.log(data);
            if (data.length < 2) {
              this.peringatansub('Perhatian', 'Subkriteria yang dipilih harus lebih dari 1', idKriteria, namaKriteria);
            }
            else{
              if (namaKriteria == 'Fasilitas') {
                this.isCheckFasilitas = true;
                this.listSubKriteria.Fasilitas = data
              }
              else if (namaKriteria == 'Akademis') {
                this.isCheckAkademis = true;
                this.listSubKriteria.Akademis = data;
              }
              else if (namaKriteria == 'Biaya') {
                this.isCheckBiaya = true;
                this.listSubKriteria.Biaya = data;
              }
            }
            // console.log(this.listSubKriteria)
          }
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
        var markerFrom = null;
        if (this.checkLoc == 'currentLoc') {
          markerFrom = marker([e.latitude,e.longitude]);
        } else {
          markerFrom = marker([ this.x_address , this.y_address]);
        }
         var markerTo =  marker([x,y]);
         var from = markerFrom.getLatLng();
         var to = markerTo.getLatLng();
         var jarak = this.getDistance(from, to);
         console.log(jarak);         
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
  public alternatif:object;
  hasil_jadi = [];
  Proses(){
    if ( this.arr_sekolah.length >= 2  ) {
      this.spk.proses_ahp(this.arr_kriteria, this.listSubKriteria ,this.arr_sekolah, this.jarak).subscribe((data) => {    
        this.ve_kriteria = data.VE_CRIT;
        this.cr_kriteria = data.CR_CRIT.toFixed(4);
        this.alternatif = data.VE_ALT;
        this.hasil_jadi = data.Hasil_jadi;
        console.log(this.hasil_jadi);
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
    this.spk.proses_ahp_all(this.arr_kriteria, this.listSubKriteria, this.jarak).subscribe((data) => {    
      this.ve_kriteria = data.VE_CRIT;
      this.cr_kriteria = data.CR_CRIT.toFixed(4);
      this.alternatif = data.VE_ALT;
      this.hasil_jadi = data.Hasil_jadi;
      console.log(this.hasil_jadi);
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
      console.log(data); 
      if(data != "belum ada"){
        this.datas_sekolah = data
      }            
     });
  }

  DetailResult(namaSekolah){
    this.sekolah.Search("nama_sekolah", namaSekolah).subscribe((data) => {   
      console.log(data[0].npsn);
      this.router.navigate(['/sekolah-view/'+data[0].npsn])
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

  peringatansub(header, massage, id, value){
    let alert = this.alertController.create({
      header: header,
      message: massage,
      buttons: [
        {
          text: 'Ok',
          handler: () => {            
            this.detailKriteria(id, value);
          }
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