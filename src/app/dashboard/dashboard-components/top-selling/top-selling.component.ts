import { Component, OnInit } from '@angular/core';
import { Product, TopSelling } from './top-selling-data';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html'
})
export class TopSellingComponent implements OnInit {
  users: any[] | undefined

  constructor(private service: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.users = data;
    })

  }

  deleteUser(id: number) {
    this.service.deleteUser(id).subscribe(data => {
      this.users = this.users?.filter(user => user.id !== id);
    })

    setTimeout(() => {
      window.location.reload();
    }, 100);

  }

  updateUser(id: number) {
    this.router.navigate(['update', id]);
  }



}
