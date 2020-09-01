import { Component, OnInit } from '@angular/core';
import { SekolahService } from '../sekolah.service'
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sekolah-update',
  templateUrl: './sekolah-update.component.html',
  styleUrls: ['./sekolah-update.component.scss'],
})
export class SekolahUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, public sekolah:SekolahService, public alertController: AlertController,private router: Router) { }

  public datas: Object;
  public nama_sekolah ="";
  public alamat_sekolah= "";
  public no_telp ="";
  public kecamatan = "";
  public agama = "";
  public akreditasi = "";
  public tahun_akreditasi ="";
  public nama_kepala_sekolah ="";
  public guru = "";
  public siswa_laki ="";
  public siswa_perempuan ="";
  public kurikuklum = "";
  public jam_sekolah= "";
  public internet = "";
  public ruangAc = "";
  public listrik = "";
  public daya_listrik = "";
  public luas_tanah = "";
  public kelas = "";
  public lab = "";
  public perpus = "";
  public X = "";
  public Y = "";
  public keterangan = "";

  ngOnInit() {
    this.sekolah.id =this.route.snapshot.params['id'];
    this.sekolah.GetInformasiSekolah(this.sekolah.id).subscribe((data) => {      
      this.datas = data;  
      this.nama_sekolah = data.nama_sekolah;
      this.alamat_sekolah = data.alamat_sekolah;
      this.no_telp = data.notelp_sekolah;
      this.kecamatan = data.kecamatan;
      this.agama = data.agama;
      this.akreditasi = data.akreditasi;
      this.tahun_akreditasi = data.tahun_akreditasi;
      this.nama_kepala_sekolah = data.nama_kepala_sekolah;
      this.guru = data.jumlah_guru;
      this.siswa_laki = data.jumlah_siswa_laki;
      this.siswa_perempuan = data.jumlah_siswa_perempuan;
      this.kurikuklum = data.kurikulum;
      this.jam_sekolah = data.jam_sekolah;
      this.internet = data.internet;
      this.ruangAc = data.ruang_ac;
      this.listrik = data.listrik;
      this.daya_listrik = data.daya_listrik;
      this.luas_tanah = data.luas_tanah;
      this.kelas = data.jumlah_kelas;
      this.lab = data.jumlah_laboratorium;
      this.perpus = data.jumlah_perpustakaan;
      this.X = data.koordinat_X;
      this.Y = data.koordinat_Y;
      this.keterangan = data.keterangan;
      console.log(data);   
    });
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  public arr_perubahan = {};
  inputNama(event:any) {    
    this.nama_sekolah = event.target.value;  
    this.arr_perubahan['nama_sekolah'] =this.nama_sekolah;
    
   }

  inputAlamat(event:any) {    
    this.alamat_sekolah = event.target.value;    
    this.arr_perubahan['alamat_sekolah'] =this.alamat_sekolah;
   }


  inputTelp(event:any) {    
    this.no_telp = event.target.value;  
    this.arr_perubahan['notelp_sekolah'] =this.no_telp;  
   }
 
 
  optionsKecamatan():void{
    let item = this.kecamatan;
    this.kecamatan = item;
    this.arr_perubahan['kecamatan'] =this.kecamatan;  
  }

   optionsAgama():void{
    let item = this.agama;
    this.agama = item;
    this.arr_perubahan['agama'] =this.agama;  
  }

  optionsAkreditasi():void{
   let item = this.akreditasi;
   this.akreditasi = item;
   this.arr_perubahan['akreditasi'] =this.akreditasi;  
  }


  optionsTahunAkre():void{
   let item = this.tahun_akreditasi;
   this.tahun_akreditasi = item;
   this.arr_perubahan['tahun_akreditasi'] =this.tahun_akreditasi;  
  }


   inputKepalaSekolah(event:any) {    
    this.nama_kepala_sekolah = event.target.value;   
    this.arr_perubahan['nama_kepala_sekolah'] =this.nama_kepala_sekolah;   
   }


   inputGuru(event:any) {    
    this.guru = event.target.value;    
    this.arr_perubahan['jumlah_guru'] =this.guru; 
   }


   inputLaki(event:any) {    
    this.siswa_laki = event.target.value;  
    this.arr_perubahan['jumlah_siswa_laki'] =this.siswa_laki;   
   }


   inputPerempuan(event:any) {    
    this.siswa_perempuan = event.target.value;
    this.arr_perubahan['jumlah_siswa_perempuan'] =this.siswa_perempuan;     
   }


   inputKurikulum(event:any) {    
    this.kurikuklum = event.target.value;
    this.arr_perubahan['kurikulum'] =this.kurikuklum;     
   }

   inputJamSekolah(event:any) {    
    this.jam_sekolah = event.target.value;   
    this.arr_perubahan['jam_sekolah'] =this.jam_sekolah;      
   }

  optionsInternet():void{
    let item = this.internet;
    this.internet = item
    this.arr_perubahan['internet'] =this.internet; 

  }

  optionsAc():void{
    let item = this.ruangAc;
    this.ruangAc = item
    this.arr_perubahan['ruang_ac'] =this.ruangAc; 

  }

  daya = false;
  optionsListrik():void{
    let item = this.listrik;
    this.listrik = item;
    this.arr_perubahan['listrik'] =this.listrik; 
    if(this.listrik == "ya"){
      this.daya = true;
    }
    else{
      this.daya = false;
    }
  }

  inputDayaListrik(event:any) {    
    this.daya_listrik = event.target.value;   
    this.arr_perubahan['daya_listrik'] =this.daya_listrik;  
  }


  inputLuasTanah(event:any) {    
    this.luas_tanah = event.target.value;    
    this.arr_perubahan['luas_tanah'] =this.luas_tanah;  
  }


  inputJumlahKelas(event:any) {    
    this.kelas = event.target.value;   
    this.arr_perubahan['jumlah_kelas'] =this.kelas;   
  }

  inputJumlahLab(event:any) {    
    this.lab = event.target.value;  
    this.arr_perubahan['jumlah_laboratorium'] =this.lab;    
  }


  inputPerpus(event:any) {    
    this.perpus = event.target.value; 
    this.arr_perubahan['jumlah_perpustakaan'] =this.perpus;     
  }

  inputX(event:any) {    
    this.X = event.target.value;   
    this.arr_perubahan['koordinat_X'] =this.X;     
  }


  inputY(event:any) {    
    this.Y = event.target.value;   
    this.arr_perubahan['koordinat_Y'] =this.Y;      
  }

  inputKeterangan(event:any) {    
    this.keterangan = event.target.value;  
    this.arr_perubahan['keterangan'] =this.keterangan;  
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  Simpan(){
    //console.log(this.arr_perubahan)
    var jumlah_data = []
    var hasil = "";
    for (var [key, value] of Object.entries(this.arr_perubahan)){
      this.sekolah.update_InformasiSekolah(this.route.snapshot.params['id'],key,value).subscribe((data) => {    
          console.log(data)
          hasil = data;
          
       });  
       jumlah_data.push(hasil)     
    }

    if(Object.entries(this.arr_perubahan).length == jumlah_data.length){
      this.peringatan('Berhasil', 'Data berhasil terubah'); 
    }
    else{
      this.peringatan('Gagal', 'Data tidak berhasil terubah'); 
    }
   
    
  }


  peringatan(headers, data){
    const alert =  this.alertController.create({
     header: headers,
     message: data,
     buttons: [{
      text: 'Okay',
      handler: () => {
        this.router.navigate(['/sekolah-view/'+this.route.snapshot.params['id']])
      }
     },{text: 'Cencel'}]
   }).then(alert=> alert.present());;
  }


}
