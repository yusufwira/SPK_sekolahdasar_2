import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KriteriaService {

  constructor(private http: HttpClient) { }

  nama="";
  inputKriteria(){
    return this.http.get("http://localhost/ta_backend/kriteria/insert.php?nama="+this.nama);
  }

  dataKriteria(){
    return this.http.get("http://localhost/ta_backend/kriteria/tampil.php");
  }

  deleteKriteria(id){
    return this.http.get("http://localhost/ta_backend/kriteria/delete.php?id="+id);
  }

  jumlahKriteria(){
    return this.http.get("http://localhost/ta_backend/kriteria/jumlah.php?");
  }


  tampil_bobot(){
    return this.http.get("http://localhost/ta_backend/kriteria/tampil_bobot.php");
  }


  tampil_bobot_user(idkriteria):Observable<any>{
    let body = new HttpParams();
    let Data:FormData = new FormData();
    var json_arr = JSON.stringify(idkriteria);
    Data.append('idkriteria',json_arr); 
    return this.http.post<any>
    ("http://localhost/ta_backend/kriteria/tampil_bobot_user.php", Data);
  }

  search_bobot(key:string){
    return this.http.get("http://localhost/ta_backend/kriteria/search_bobot.php?key="+key);
  }

  update_bobot(bobot:string, crit1:string, crit2:string):Observable<any>{
    let body = new HttpParams();
    let Data:FormData = new FormData();
    Data.append('bobot', bobot); 
    Data.append('crit1',crit1 ); 
    Data.append('crit2',crit2 ); 
    return this.http.post<any>
    ("http://localhost/ta_backend/kriteria/update_bobot.php", Data);
  }



  //revisi
  detail_kriteria(){
    return this.http.get("http://localhost/revisi_ta/kriteria/kriteria_detail.php");
  }

  detail_kriteria_id(id){
    return this.http.get("http://localhost/revisi_ta/kriteria/kriteria_detail_id.php?id_kriteria="+id);
  }

  subkriteria(namaKriteria){    
    let Data:FormData = new FormData();
    Data.append('nama_kriteria', namaKriteria);    
    return this.http.post<any>
    ("http://localhost/revisi_ta/kriteria/subkriteria.php", Data);
  }

  subKriteriaBobot(id)
  {
    let Data:FormData = new FormData();
    Data.append('id_kriteria', id);    
    return this.http.post<any>
    ("http://localhost/revisi_ta/kriteria/subkriteria_bobot.php", Data);
  }

  update_subkriteria_bobot(bobot:string, crit1:string, crit2:string):Observable<any>{
    let body = new HttpParams();
    let Data:FormData = new FormData();
    Data.append('bobot', bobot); 
    Data.append('crit1',crit1 ); 
    Data.append('crit2',crit2 ); 
    return this.http.post<any>
    ("http://localhost/revisi_ta/kriteria/update_subkriteria_bobot.php", Data);
  }
  
}
