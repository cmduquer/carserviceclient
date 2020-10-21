import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OwnerService } from '../shared/owner/owner.service';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {

  owner: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private OwnerService: OwnerService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const name = params['name'];
      if (name) {
        this.OwnerService.get(name).subscribe((owner: any) => {
          if (owner) {
            this.owner = owner;
            this.owner.href = owner._links.self.href;
          } else {
            console.log(`owner with dni '${name}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/owner-list']);
  }

  save(form: NgForm) {
    this.OwnerService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.OwnerService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
