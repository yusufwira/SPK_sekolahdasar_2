import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SekolahService {

  constructor(private http: HttpClient) { }

  username="";
  file:any;
  img:any;
  photo="";

  id="";
  DetailSekolah():Observable<any>{
    return this.http.get("http://localhost/revisi_ta/sekolah/sekolah_detail.php?id_sekolah="+this.id);
  }

  Rating(idsekolah, iduser, rating, idkriteria){
    //console.log(idsekolah)
    return this.http.get("http://localhost/revisi_ta/sekolah/rating.php?id_sekolah="+idsekolah+"&id_user="+iduser+"&rating="+rating+"&id_kriteria="+idkriteria);
  }

  Review(idsekolah, iduser, review, idkriteria){
    console.log(idsekolah+ iduser+ review+ idkriteria)
    return this.http.get("http://localhost/revisi_ta/sekolah/review.php?id_sekolah="+idsekolah+"&id_user="+iduser+"&review="+review+"&id_kriteria="+idkriteria);
  }

  GetRating(ids){
    return this.http.get("http://localhost/revisi_ta/sekolah/rating_get.php?id_sekolah="+ids);
  }

  GetReview(){
    return this.http.get("http://localhost/revisi_ta/sekolah/review_get.php?id_sekolah="+this.id);
  }

  DetailEkstra():Observable<any>{
    return this.http.get("http://localhost/ta_backend/sekolah/detailSekolahEkstra.php?id_sekolah="+this.id);
  }

  ListSekolah():Observable<any>{
    return this.http.get("http://localhost/revisi_ta/sekolah/list_sekolah.php");
  }

  ListSekolah_ortu():Observable<any>{
    return this.http.get("http://localhost/revisi_ta/sekolah/list_ortu_sekolah.php");
  }

  ListSekolahAdmin(id):Observable<any>{
    return this.http.get("http://localhost/revisi_ta/sekolah/list_admin_sekolah.php?iduser="+id);
  }

  Search(kategori:string,key:string):Observable<any>{
    return this.http.get("http://localhost/revisi_ta/sekolah/search.php?kategori="+kategori+"&key="+key);
  }

  jumlahSekolah(){
    return this.http.get("http://localhost/ta_backend/sekolah/jumlah.php?");
  }

  Delete(id:string):Observable<any>{
    return this.http.get("http://localhost/ta_backend/sekolah/delete.php?idsekolah="+id);
  }

  GetSekolahBobot():Observable<any>{
    return this.http.get("http://localhost/ta_backend/sekolah/get_sekolah_bobot.php?");
  }

  GetInformasiSekolah(id:string):Observable<any>{
    return this.http.get("http://localhost/ta_backend/sekolah/informasi_sekolah.php?id_sekolah="+id);
  }

  Validasi(id:string, validasi:string):Observable<any>{
    let Data:FormData = new FormData();
    Data.append('idsekolah', id); 
    Data.append('validasi',validasi ); 
    return this.http.post<any>
    ("http://localhost/ta_backend/sekolah/validasi.php", Data);
  }

  update_InformasiSekolah(id:string, kolom:string, value:unknown):Observable<any>{
    let body = new HttpParams();
    let Data:FormData = new FormData();
    Data.append('id', id); 
    Data.append('kolom',kolom ); 
    Data.append('value',String(value));
    return this.http.post<any>
    ("http://localhost/ta_backend/sekolah/informasi_sekolah-update.php", Data);
  }

  update_bobot(bobot:string, crit:string, sekolah_1:string, sekolah_2:string):Observable<any>{
    let body = new HttpParams();
    let Data:FormData = new FormData();
    Data.append('bobot', bobot); 
    Data.append('crit',crit ); 
    Data.append('sekolah_1',sekolah_1 ); 
    Data.append('sekolah_2',sekolah_2 );
    return this.http.post<any>
    ("http://localhost/ta_backend/sekolah/update_bobot.php", Data);
  }

  
  

  ekstra= [];
  sekolah= "";
  
  AddEkstra():Observable<any>{
    console.log(this.ekstra);
    let body = new HttpParams();
    let Data:FormData = new FormData();
    for (let index = 0; index < this.ekstra.length; index++) {
      Data.append("idEkstra["+index+"]", this.ekstra[index]);           
    }
    Data.append('idSekolah', this.sekolah); 
    return this.http.post<any>
    ("http://localhost/ta_backend/sekolah/createEkstrakurikuler.php", Data);
  }

  data1:any;
  data2:any;
  userid = "";
  Create():Observable<any>{   
    let body = new HttpParams();
    let data:FormData = new FormData();

    // detail sekolah
    data.append('nama', this.data1['nama']); 
    data.append('alamat', this.data1['alamat']); 
    data.append('telp', this.data1['telp']); 
    data.append('kecamatan', this.data1['kecamatan']); 
    data.append('agama', this.data1['agama']); 
    data.append('akreditasi', this.data1['akreditasi']); 
    data.append('tahunAkre', this.data1['tahunAkre']); 
    data.append('kepalaSekolah', this.data1['kepalaSekolah']);
    data.append('guru', this.data1['guru']);
    data.append('laki', this.data1['laki']);
    data.append('perempuan', this.data1['perempuan']);
    data.append('lulus', this.data1['lulus']);
    data.append('kurikulum', this.data1['kurikulum']);
    data.append('jam', this.data1['jam']);
     
    // fasilitas
    data.append('internet', this.data2['internet']);
    data.append('listrik', this.data2['listrik']);
    data.append('ruangAc', this.data2['ruangAc']);
    data.append('dayalistrik', this.data2['dayaListrik']);
    data.append('luastanah', this.data2['luasTanah']);
    data.append('besar_bangunan', this.data2['besar_bangunan']);
    data.append('jumlahkelas', this.data2['jumlahKelas']);
    data.append('jumlah_kelas_ac', this.data2['jumlah_kelas_ac']);
    data.append('jumlahlab', this.data2['jumlahLab']);
    data.append('jumlahperpus', this.data2['jumlahPerpus']);
    data.append('uang_gedung', this.data2['uang_gedung']);
    data.append('uang_daftar_ulang', this.data2['uang_daftar_ulang']);
    data.append('uang_spp', this.data2['uang_spp']);
    data.append('uang_seragam', this.data2['uang_seragam']);
    data.append('koorX', this.data2['X']);
    data.append('koorY', this.data2['Y']);
    data.append('ket', this.data2['ket']);    
    data.append('iduser', this.userid);
    var lastid = this.http.post<any>
    ("http://localhost/ta_backend/sekolah/create.php", data);

    //console.log(this.datafoto[0].nama);
    return lastid;
  }

  upload():Observable<any>{
    let body = new HttpParams();
    let Data:FormData = new FormData();
    Data.append('file_upload', this.file, this.file.name); 
    Data.append('username', this.username); 
    return this.http.post<any>
    ("http://localhost/ta_backend/sekolah/upload.php", Data);
  }


  idSekolah= "";
  arrayfoto=[];
  datafoto:any;
  uploudFoto():Observable<any>{   
    let body = new HttpParams();
    let data:FormData = new FormData();
    console.log(this.datafoto.length);
    for (let index = 0; index < this.datafoto.length; index++) {
      data.append("nama["+index+"]", this.datafoto[index].nama);
      data.append("ext["+index+"]", this.datafoto[index].ext);       
    }
    data.append("idSekolah",this.idSekolah);
    var hasil = this.http.post<any>
    ("http://localhost/ta_backend/sekolah/foto.php", data);
    this.arrayfoto.push(hasil);
    
    return hasil;
  }

  uploudFoto2():Observable<any>{   
    let body = new HttpParams();
    let data:FormData = new FormData();
    console.log(this.datafoto.length);
    for (let index = 0; index < this.datafoto.length; index++) {
      data.append("nama["+index+"]", this.datafoto[index].nama);
      data.append("ext["+index+"]", this.datafoto[index].ext);       
    }
    data.append("idSekolah",this.idSekolah);
    var hasil = this.http.post<any>
    ("http://localhost/ta_backend/sekolah/foto2.php", data);
    this.arrayfoto.push(hasil);
    
    return hasil;
  }

  Delete_foto(id){
    return this.http.get("http://localhost/revisi_ta/sekolah/delete_foto.php?id="+id);
  }



 

  Create_infosekolah(npsp:string,nama:string,alamat:string,telp:string,kecamatan:string,agama:string,kepala:string,jam:string, username:string):Observable<any>{
    let body = new HttpParams();
    let data:FormData = new FormData();
    // var json_arr = JSON.stringify(this.items);
    data.append('npsp', npsp); 
    data.append('nama', nama);
    data.append('alamat', alamat);
    data.append('telp', telp);
    data.append('kecamatan', kecamatan);
    data.append('agama', agama);
    data.append('kepala', kepala);
    data.append('jam', jam); 
    data.append('username', username); 
    var lastid = this.http.post<any>
    ("http://localhost/revisi_ta/sekolah/create_info_sekolah.php", data);
    return lastid;
  }

  Create_infoKR(datas:any,last_id):Observable<any>{
    let body = new HttpParams();
    let data:FormData = new FormData();
    var doto = JSON.stringify(datas);
    data.append('data', doto);
    data.append('last_id', last_id);
    return this.http.post<any>
    ("http://localhost/revisi_ta/sekolah/create_info.php", data);
  }

 Update_infosekolah(npsp:string,nama:string,alamat:string,telp:string,kecamatan:string,agama:string,kepala:string,jam:string, username:string):Observable<any>{
    let body = new HttpParams();
    let data:FormData = new FormData();
    // var json_arr = JSON.stringify(this.items);
    data.append('npsp', npsp); 
    data.append('nama', nama);
    data.append('alamat', alamat);
    data.append('telp', telp);
    data.append('kecamatan', kecamatan);
    data.append('agama', agama);
    data.append('kepala', kepala);
    data.append('jam', jam); 
    data.append('username', username); 
    var lastid = this.http.post<any>
    ("http://localhost/revisi_ta/sekolah/sekolah_update.php", data);
    return lastid;
  }


  Update_infoKR(datas:any,last_id):Observable<any>{
    let body = new HttpParams();
    let data:FormData = new FormData();
    var doto = JSON.stringify(datas);
    console.log(doto);
    data.append('data', doto);
    data.append('last_id', last_id);
    return this.http.post<any>
    ("http://localhost/revisi_ta/sekolah/sekolah_update_info.php", data);
  }

  updateKeterangan(id,keterangan):Observable<any>{
    let body = new HttpParams();
    let data:FormData = new FormData();
    data.append('id', id);
    data.append('keterangan', keterangan);
    return this.http.post<any>
    ("http://localhost/revisi_ta/sekolah/updateKeterangan.php", data);
  }
}
