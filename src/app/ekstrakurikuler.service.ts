import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EkstrakurikulerService {

  constructor(private http: HttpClient) { }

  nama="";
  desc="";

  inputEkstra(){
    return this.http.get("http://localhost/ta_backend/ekstrakurikuler/insert.php?nama="+this.nama+"&desc="+this.desc);
  }

  dataEkstra(){
    return this.http.get("http://localhost/ta_backend/ekstrakurikuler/tampil.php");
  }

  getEkstra(id){
    return this.http.get("http://localhost/ta_backend/ekstrakurikuler/get.php?id="+id);
  }

  deleteEks(id){
    return this.http.get("http://localhost/ta_backend/ekstrakurikuler/delete.php?id="+id);
  }

  jumlahEks(){
    return this.http.get("http://localhost/ta_backend/ekstrakurikuler/jumlah.php?");
  }

  deleteEksSekolah(idEks, idSekolah) {
    return this.http.get("http://localhost/ta_backend/ekstrakurikuler/delete_eks_sekolah.php?id_eks="+idEks+"&id_sekolah="+idSekolah);
  }

}
