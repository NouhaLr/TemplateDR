import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:9999/crudUser";

  constructor(private http: HttpClient) { }

  // Add User - Create
  adduser(user: User) {
    return this.http.post<User>(`${this.url}/register`, user)
  }

  // Get Users - Read
  getUsers(): Observable<User[]> {
    // return this.http.get<User[]>(`${this.url}/users`)
    return this.http.get<any[]>(`http://localhost:9999/crudUser/getAll`)
  }

  // Get User by Id - Read
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${id}`)
  }

  // Update User - Update
  updateUser(id: number, user: User): Observable<any> {
    return this.http.put<any>(`${this.url}/update/${id}`, user)
  }

  // Delete User - Delete
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/delete/${id}`)
  }
  // register(registerRequest: RegisterRequest): Observable<AuthenticationResponse> {
  //   return this.http.post<AuthenticationResponse>(
  //     `${this.url}/register`,
  //     registerRequest
  //   );
  // }
}
