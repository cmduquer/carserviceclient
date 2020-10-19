import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { OwnerService } from '../shared/owner/owner.service';
import {MatExpansionModule} from '@angular/material/expansion';





@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  cars: Array<any>;
  owners: Array<any>;
  ownerData: any;

  constructor(private carService: CarService, private giphyService: GiphyService, private ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerData = {};
    this.ownerService.getAll().subscribe(data => {
          this.owners = data["_embedded"]["owners"];
          this.owners.forEach(owner => {
            this.ownerData[owner["dni"]] = owner["name"];
            });
            this.carService.getAll().subscribe(data => {
      this.cars = data;
      for (const car of this.cars) {
        this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
        if (this.ownerData.hasOwnProperty(car.ownerDni)) {
          car.owner = this.ownerData[car.ownerDni]
        } else {
          car.owner = "No aparece"
        }
     }
    });
          });
  }

  panelOpenState = false;
  

}
