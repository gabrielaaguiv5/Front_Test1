import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }
/* Función para traer listado de usuarios */ 
  getUsers() {
    return this.http.get<any[]>('http://jsonplaceholder.typicode.com/users');
}}
