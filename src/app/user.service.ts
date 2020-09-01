import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  username="";
  password="";
  email="";
  nama="";
  alamat ="";
  kecamatan = "";
  notelp="";
  hak="";
  file:any;
  img:any;
  photo="";

  uploadfoto():Observable<any>{
    let body = new HttpParams();
    let testData:FormData = new FormData();
    testData.append('file_upload', this.file, this.file.name); 
    testData.append('username', this.username); 
    return this.http.post<any>
    ("http://localhost/ta_backend/Auth/upload.php", testData);
  }

  Registrasi():Observable<any>{
    return this.http.get
    ("http://localhost/ta_backend/Auth/Register.php?username="+this.username+"&password="+this.password+"&email="+this.email+"&nama="+this.nama+"&alamat="+this.alamat+"&kecamatan="+this.kecamatan+"&notelp="+this.notelp+"&hak="+this.hak+"&photo="+this.photo);
  }

  Login():Observable<any>{
    return this.http.get("http://localhost/ta_backend/Auth/Login.php?username="+this.username+"&password="+this.password);
  }

  jumlahUsers(){
    return this.http.get("http://localhost/ta_backend/Auth/jumlah.php?");
  }

  dataOrangtua(){
    return this.http.get("http://localhost/ta_backend/Auth/data_orangtua.php?");
  }

  id_orangtua="";
  detailOrangtua(){
    return this.http.get("http://localhost/ta_backend/Auth/detail_orangtua.php?id_users="+this.id_orangtua);
  }

  dataAdminSekolah(){
    return this.http.get("http://localhost/ta_backend/Auth/data_admin_sekolah.php?");
  }

  id_admin="";
  detailAdminSekolah(){
    return this.http.get("http://localhost/ta_backend/Auth/detail_admin_sekolah.php?id_users="+this.id_admin);
  }

  hapusOrangtua(id){
    return this.http.get("http://localhost/ta_backend/Auth/delete_parent.php?id_users="+id);
  }



}
