import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IUser } from './user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  registerUser(user:IUser):Observable<any>{
    return this.http.post(`${environment.BASE_API_URI}/users/register`,user) as Observable<any>;
  }
  
  authenticateUser(email:string,password:string):any{
    return [] 
  }
}
