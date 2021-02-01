import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SekolahService } from '../sekolah.service';
import { KriteriaService } from '../kriteria.service';
import {Map,tileLayer,marker} from 'leaflet';

@Component({
  selector: 'app-sekolah-view',
  templateUrl: './sekolah-view.component.html',
  styleUrls: ['./sekolah-view.component.scss'],
})
export class SekolahViewComponent implements OnInit {

  constructor(public kriteria:KriteriaService, public sekolah:SekolahService,private route: ActivatedRoute,public alertController: AlertController, private router: Router,public menu: MenuController) { }

  arr_foto:any;
  arr_eks:any;
  arr_detail:any;
  arr_kriteria:any;

  nama_sekolah="";
  alamat="";
  no_telp="";
  agama ="";
  kepala_sekolah="";
  akreditasi ="";
  tahun_akreditasi="";
  kurikulum="";
  jam="";
  j_guru="";
  j_laki="";
  j_perempuan="";

  internet="";
  ac="";
  listrik="";
  daya_listrik="";
  luas_tanah="";
  luas_bangunan = "";
  jumlah_kelas="";
  jumlah_kelas_ac="";
  jumlah_lab="";
  jumlah_perpus="";

  uang_gedung = "";
  uang_daftar_ulang = "";
  uang_spp = "";
  uang_seragam = "";
  total_biaya = "";

  username="";
  id_sekolah= "";

  map:Map;
  newMarker:any;
  address:string[];

  arr_komen:any;
  arr_rating:any;
  ratings=0.0;
  ngOnInit(){    
    this.sekolah.id = this.route.snapshot.params['id'];
    this.id_sekolah =  this.route.snapshot.params['id'];
    this.sekolah.DetailSekolah().subscribe((data) => {    
      this.arr_detail =  data['detail'];
      this.id_sekolah = data['npsn'];
      this.nama_sekolah = data['nama_sekolah'];
      this.alamat = data['alamat_sekolah'];
      this.no_telp = data['notelp_sekolah'];
      this.agama = data['agama'];
      this.kepala_sekolah = data['nama_kepala_sekolah'];
      this.jam = data['jam'];
      this.username = data['username'];
      this.arr_foto = data['foto'];
      this.loadmap(data['detail']['Lokasi']['koor_X'],data['detail']['Lokasi']['koor_Y'],this.nama_sekolah)
    });

    this.sekolah.DetailEkstra().subscribe((data) => {        
      this.arr_eks = data;                      
    });

    this.kriteria.dataKriteria().subscribe((data) => {        
      this.arr_kriteria = data                   
    });


   this.getRating();
    this.getReview();
   
    
  }

  getReview(){
    this.sekolah.GetReview().subscribe((data) => {   
      if(data != "tidak ada"){
        this.arr_komen = data;
      }                              
    });
  }

  getRating(){
    this.sekolah.GetRating(this.id_sekolah).subscribe((data) => {        
      this.arr_rating = data                    
    });
  }

   
  

  loadmap(x,y,nama){
     this.map = new Map("mapId").setView([x,y], 13);
     tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
     { attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY- SA</a>'})
     .addTo(this.map); // This line is added to add the Tile Layer to our map
     this.locatePosition(x,y,nama);
  }

  jarak = "";
  locatePosition(x,y, nama){
    this.map.locate({setView:true}).on("locationfound", (e: any)=> {
       this.newMarker = marker([x,y], {autoPan: 
        true}).addTo(this.map);       
        this.newMarker.bindPopup(nama).openPopup();   
        this.newMarker.on("dragend", ()=> {
          const position = this.newMarker.getLatLng();

         });


         var markerFrom = marker([e.latitude,e.longitude]);
         var markerTo =  marker([x,y]);
         var from = markerFrom.getLatLng();
         var to = markerTo.getLatLng();
         var jarak = this.getDistance(from, to);
         this.jarak = jarak.toString();
    });
  }

  getDistance(from, to)
  {
    var jarak = (from.distanceTo(to)).toFixed(0)/1000;
    return jarak;
  }

  rating1=false;
  rating2=false;
  rating3=false;
  rating4=false;
  rating5=false;
  rating(number):void{
    if(number == 1){
      this.rating1 = true;
      this.rating2=false;
      this.rating3=false;
      this.rating4=false;
      this.rating5=false
    }
    else if (number == 2){
      this.rating1 = true;
      this.rating2= true;
      this.rating3=false;
      this.rating4=false;
      this.rating5=false
    }
    else if (number == 3){
      this.rating1 = true;
      this.rating2= true;
      this.rating3=true;
      this.rating4=false;
      this.rating5=false
    }
    else if (number == 4){
      this.rating1 = true;
      this.rating2= true;
      this.rating3=true;
      this.rating4=true;
      this.rating5=false
    }
    else if (number == 5){
      this.rating1 = true;
      this.rating2= true;
      this.rating3=true;
      this.rating4=true;
      this.rating5=true
    }

    var id_user = localStorage['iduser'];
   if(this.kriteria_rating == ""){
    this.peringatan('Gagal', "Kritera yang ingin diberi rating belum dipilih")
    this.rating1 = false;
      this.rating2=false;
      this.rating3=false;
      this.rating4=false;
      this.rating5=false
   }
   else{
    this.sekolah.Rating(this.id_sekolah,id_user,number,this.kriteria_rating).subscribe((data) => {    
      this.peringatan('Terima Kasih','Anda sudah memberikan rating pada sekolah ini'); 
      this.getRating();          
    });
   }



   
    

  }


  kriteria_rating = "";
  optionsKriteriaRating():void{
    let item = this.kriteria_rating;
    this.kriteria_rating = item;
    this.rating1 = false;
      this.rating2=false;
      this.rating3=false;
      this.rating4=false;
      this.rating5=false
  }

  public komentar="";
  inputKomen(event:any) {    
    this.komentar = event.target.value;   
   }

  kriteria_review = "";
  optionsKriteriaReview():void{
    let item = this.kriteria_review;
    this.kriteria_review = item;
  }

   kirimKomentar():void{
    var id_user = localStorage['iduser'];
    this.sekolah.Review(this.id_sekolah,id_user,this.komentar, this.kriteria_review).subscribe((data) => {    
      if(data == 'Sukses') {
        this.getReview();
      } else {
        this.peringatan('Gagal', 'Maaf anda harus memilih kriteria yang ingin direview');
      }                
    });    
   }


   peringatan(header, message){
    const alert =  this.alertController.create({
     header: header,
     message: message,
     buttons: ['OK']
   }).then(alert=> alert.present());;
  }


 formatRupiah(angka, prefix){
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
    split   		= number_string.split(','),
    sisa     		= split[0].length % 3,
    rupiah     		= split[0].substr(0, sisa),
    ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
   
    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
      var separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
   
    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
  }

 

}
