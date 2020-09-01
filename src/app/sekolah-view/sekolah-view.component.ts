import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SekolahService } from '../sekolah.service';
import {Map,tileLayer,marker} from 'leaflet';

@Component({
  selector: 'app-sekolah-view',
  templateUrl: './sekolah-view.component.html',
  styleUrls: ['./sekolah-view.component.scss'],
})
export class SekolahViewComponent implements OnInit {

  constructor(public sekolah:SekolahService,private route: ActivatedRoute,public alertController: AlertController, private router: Router,public menu: MenuController) { }

  arr_foto:any;
  arr_eks:any;
  arr_detail:any;
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
  ratings=0.0;
  ngOnInit(){    
    this.sekolah.id = this.route.snapshot.params['id'];
    this.sekolah.DetailSekolah().subscribe((data) => {    
      console.log(data);
      console.log(data['detail']['Fasilitas']); 
      this.arr_detail =  data['detail'];
      this.id_sekolah = data['idinfo_sekolah'];
      this.nama_sekolah = data['nama_sekolah'];
      this.alamat = data['alamat_sekolah'];
      this.no_telp = data['notelp_sekolah'];
      this.agama = data['agama'];
      this.kepala_sekolah = data['nama_kepala_sekolah'];
      this.jam = data['jam'];
      this.username = data['username'];
      this.arr_foto = data['foto'];
      this.loadmap(data['detail']['Lokasi']['koor_X'],data['detail']['Lokasi']['koor_Y'],this.nama_sekolah);
      

    });

    this.sekolah.DetailEkstra().subscribe((data) => {        
      this.arr_eks = data;                      
    });

    //this.getReview();
   
    
  }

  getReview(){
    this.sekolah.GetReview().subscribe((data) => {   
      if(data != "tidak ada"){
        this.arr_komen = data;
        console.log(this.arr_komen); 
      }   
                           
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
         console.log(markerFrom)
         var markerTo =  marker([x,y]);
         var from = markerFrom.getLatLng();
         var to = markerTo.getLatLng();
         var jarak = this.getDistance(from, to);
         console.log(jarak)
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
    console.log(number);
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
    this.sekolah.Rating(this.id_sekolah,id_user,number).subscribe((data) => {    
      console.log(data); 
      this.peringatan();           
    });

  }

  public komentar="";
  inputKomen(event:any) {    
    this.komentar = event.target.value;
    //console.log(this.komentar)    
   }

   kirimKomentar():void{
    var id_user = localStorage['iduser'];
    this.sekolah.Review(this.id_sekolah,id_user,this.komentar).subscribe((data) => {    
      console.log(data);  
      this.getReview();          
    });
    
   }


   peringatan(){
    const alert =  this.alertController.create({
     header: 'Terima Kasih',
     message: 'Anda sudah memberikan rating pada sekolah ini',
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
