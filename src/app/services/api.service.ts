import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // SERVER_URL='http://localhost:3000'
  SERVER_URL='https://e-commerce-backend-1-6cal.onrender.com'

  constructor(private http:HttpClient) { }

  getallproducts=()=>{
     return this.http.get(`${this.SERVER_URL}/products/all`)
  }

  getallLadiesProduct=()=>{
    return this.http.get(`${this.SERVER_URL}/ladies/all`)
  }

  getallchildrensProduct=()=>{
    return this.http.get(`${this.SERVER_URL}/childrens/all`)
  }

 viewProduct=(id:any)=>{
  return this.http.get(`${this.SERVER_URL}/products/view/${id}`)
 } 
 
 viewLadyProduct=(id:any)=>{
  return this.http.get(`${this.SERVER_URL}/ladies/view/${id}`)
 }

 viewchildProduct=(id:any)=>{
  return this.http.get(`${this.SERVER_URL}/childrens/view/${id}`)
 }
 // register api call

registerApi=(user:any)=>{
  return this.http.post(`${this.SERVER_URL}/user/register`,user)
  }
  
  //login api call
  
  loginApi=(user:any)=>{
    return this.http.post(`${this.SERVER_URL}/user/login`,user)
  }

  contactUs=(contact:any)=>{
    return this.http.post(`${this.SERVER_URL}/contact`,contact)
  }

addAddress=(address:any)=>{
  return this.http.post(`${this.SERVER_URL}/address`,address)
}
}
