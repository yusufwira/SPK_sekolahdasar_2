import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot, NavigationExtras } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { KriteriaService } from '../kriteria.service';
import { Key } from 'protractor';
import { SekolahService } from '../sekolah.service';
import { EkstrakurikulerService } from '../ekstrakurikuler.service';
import { PanduanLokasiComponent } from '../panduan-lokasi/panduan-lokasi.component';

@Component({
  selector: 'app-sekolah-update',
  templateUrl: './sekolah-update.component.html',
  styleUrls: ['./sekolah-update.component.scss'],
})
export class SekolahUpdateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    public alertController: AlertController,
    private router: Router,
    public kr:KriteriaService,
    public sekolah:SekolahService,
    public ekstra: EkstrakurikulerService,
    public modal: ModalController,
  ) { }

  data_kriteria:Object;
  detail_kriteria:Object;
  dataEkstra:any = [];
  listEkstra:Object;
  username="";
  iduser="";
  id_sekolah="";
  arr_detail:any;  

  ngOnInit() {}
  ionViewWillEnter() {
    this.img1 = "";
    this.img2 = "";
    this.img3 = "";
    this.img4 = "";

    this.username= localStorage['username'];
    this.iduser= localStorage['iduser'];
    this.sekolah.id = this.route.snapshot.params['id'];
    this.id_sekolah =  this.route.snapshot.params['id'];
   
    this.sekolah.DetailSekolah().subscribe((data) => { 
      console.log(data);  
      this.arr_detail =  data['detail']; 
      this.id_sekolah = data['npsn'];
      this.nama = data['nama_sekolah'];
      this.alamat = data['alamat_sekolah'];
      this.telp = data['notelp_sekolah'];
      this.kecamatan = data['kecamatan'];
      this.agama = data['agama'];
      this.kepala = data['nama_kepala_sekolah'];
      this.jam = data['jam'];
      this.username = data['username'];
      this.datafoto = data['foto'];
      this.akreditasi = this.arr_detail.Akademis.Akreditasi;
      this.TahunAkre = this.arr_detail.Akademis['Tahun Kurikulum'];
      this.internet = this.arr_detail['Fasilitas'].Internet;
      console.log(this.arr_detail)
      this.loadFoto(this.datafoto, this.username)
    });

    this.kr.dataKriteria().subscribe((data) => {   
      this.data_kriteria = data;
    });

    this.kr.detail_kriteria().subscribe((data) => {   
      this.detail_kriteria = data;
      console.log(this.detail_kriteria)
    });

    this.ekstra.getEkstra(this.sekolah.id).subscribe((data) => {   
      console.log(data);
      this.dataEkstra = data;
      console.log(this.dataEkstra)
    }
    ,(error)=>{
    });

    this.ekstra.dataEkstraValid(null).subscribe((data) => {   
      this.listEkstra = data;      
    });
    
  }

  loadFoto(fotos:any[], username){
    for (let i = 0; i < fotos.length; i++) {
      if(i == 0){
        this.img1 = "http://localhost/ta_backend/sekolah/image/"+username+"/"+fotos[i]['nama_foto']+"."+fotos[i]['extention']
      }
      else if(i == 1){
        this.img2 = "http://localhost/ta_backend/sekolah/image/"+username+"/"+fotos[i]['nama_foto']+"."+fotos[i]['extention']
      }
      else if(i == 2){
        this.img3 = "http://localhost/ta_backend/sekolah/image/"+username+"/"+fotos[i]['nama_foto']+"."+fotos[i]['extention']
      }
      else if(i == 3){
        this.img4 = "http://localhost/ta_backend/sekolah/image/"+username+"/"+fotos[i]['nama_foto']+"."+fotos[i]['extention']
      }
      
    }
  }

  DeleteFoto(id){
    this.sekolah.Delete_foto(id).subscribe((data) => {   
      this.ionViewWillEnter();
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
  akreditasi = "A";
  TahunAkre = "2013";
  internet="1";

  // file input
  inputnpsn(event:any) {    
    this.npsn = event.target.value;  
    console.log(this.npsn)  
  }
  inputnama(event:any) {    
    this.nama = event.target.value;   
    console.log(this.nama) 
  }
  inputalamat(event:any) {    
    this.alamat = event.target.value; 
    console.log(this.alamat)       
  }
  inputtelp(event:any) {    
    this.telp = event.target.value;    
    console.log(this.telp)
  }
  optionsKecamatan():void{
    let item = this.kecamatan;
    this.kecamatan = item;
    console.log(this.kecamatan)
  }
  optionsAgama():void{
    let item = this.agama;
    this.agama = item;
    console.log(this.agama)
  }
  inputkepala(event:any) {    
    this.kepala = event.target.value;   
    console.log(this.kepala) 
  }

  inputjam(event:any) {    
    this.jam = event.target.value;    
    console.log(this.jam)
  }



  file: File;
  img1="";
  img2="";
  img3="";
  img4="";
  check = false;
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
      this.check = true;
    });
    console.log(this.datafoto)
  }


  Save_info_sekolah(){
    // console.log(this.id_sekolah, this.nama, this.alamat, this.telp, this.kecamatan, this.agama, this.kepala, this.jam, this.iduser)
    this.sekolah.Update_infosekolah(this.id_sekolah, this.nama, this.alamat, this.telp, this.kecamatan, this.agama, this.kepala, this.jam, this.iduser).subscribe((data) => {      
      console.log(data)
      this.sekolah.datafoto = this.datafoto
      this.sekolah.idSekolah = data;
      if (this.check == true) {
        this.sekolah.uploudFoto2().subscribe((data) => {    
          console.log(data) 
          this.peringatanSukses();
          // this.router.navigate(['/sekolah-admin'])
        },(error)=>{
          this.peringatan();
        }); 
      }
      else {
        this.peringatanSukses();
        // this.router.navigate(['/sekolah-admin'])
      }
     
    },(error)=>{
      this.peringatan();
    }); 
  }
  indexs = 0;
  arr_data = new Array()
  
  optionsInternet(id):void{
    let item = this.internet;
    this.internet = item
    console.log(this.internet);
    this.arr_data[this.indexs] = {id:id,value:this.internet}
    this.indexs += 1;
  }

  
  optionsAkreditasi(id):void{
    let item = this.akreditasi;
    this.akreditasi = item;
    console.log(item);
    this.arr_data[this.indexs] = {id:id,value:this.akreditasi}
    this.indexs += 1;
  }

  
  optionsTahunAkre(id):void{
    let item = this.TahunAkre;
    this.TahunAkre = item;
    console.log(this.TahunAkre);
    this.arr_data[this.indexs] = {id:id,value:this.TahunAkre}
    this.indexs += 1;
  }

  
  inputAll(event:any, id) { 
    this.arr_data[this.indexs] = {id:id,value:event.target.value}
    console.log(this.arr_data[this.indexs] )
    this.indexs += 1;
  }

  
  Save_info_kriteria(){
    console.log(this.arr_data)
    this.sekolah.Update_infoKR(this.arr_data, this.id_sekolah).subscribe((data) => {   
      // this.arr_data = new Array();
      console.log(data)
      this.peringatanSukses();
      // this.arr_data = null;
      // this.router.navigate(['/sekolah-admin'])
    });
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

  save_ekstra(){
    this.sekolah.ekstra = this.newEkstra;
    this.sekolah.sekolah = this.id_sekolah;
    this.sekolah.AddEkstra().subscribe((data) => {      
      // console.log(data);   
      console.log("sukses"); 
      this.peringatanSukses();
    },(error)=>{
      this.peringatan();
    });        
  }

  deleteEkstra(id, index){
    console.log(index);
    
    this.ekstra.deleteEksSekolah(id,this.id_sekolah).subscribe((data) => {      
      if (data == 'sukses') {
        this.dataEkstra.splice(index, 1);    
      }       
    },(error)=>{
      this.peringatan();
    });
  }

  peringatan(){
    const alert =  this.alertController.create({
     header: 'Gagal Simpan Data',
     message: 'Format Pengisian Data Sekolah Tidak Benar',
     buttons: ['OK']
   }).then(alert=> alert.present());;
  }

  peringatanSukses(){
    const alert =  this.alertController.create({
     header: 'Sukses',
     message: 'Data berhasil disimpan pada database',
     buttons: ['OK']
   }).then(alert=> alert.present());;
  }
 
  addEkstra = '';  
  newEkstra = [];
  optionsEkstrakurikuler():void{
    let item = this.addEkstra;
    this.addEkstra = item;
    this.dataEkstra.push(this.listEkstra[this.addEkstra])
    this.newEkstra.push(this.listEkstra[this.addEkstra].id)
    this.addEkstra = '';
  }


  currentModal = null;
  async presentModal() {
    // console.log('masuk')
    const modals = await this.modal.create({
      component: PanduanLokasiComponent,
      cssClass: 'my-custom-class'
    });

    this.currentModal = modals;
    return await modals.present();

  }

  dismissModal() {
    if (this.currentModal) {
      this.currentModal.dismiss().then(() => { this.currentModal = null; });
    }
  }

}
