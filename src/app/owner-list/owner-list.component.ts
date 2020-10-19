import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner/owner.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../shared/car/car.service';
//import { runInThisContext } from 'vm';

export interface OwnerInfo {
  position: number;
  name: string;
  dni: string;
  profession: string;
  update: string;
}

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})


export class OwnerListComponent implements OnInit {
  owners: Array<any>;
  ownersWithPosition: Array<any>;
  ELEMENT_DATA: OwnerInfo[];
  pos: number = 0;
  ownersToDelete: Array<any>;
  ownersId: Array<any>;
  cars: Array<any>;

 
  constructor(private ownerService: OwnerService, private giphyService: GiphyService, private route: ActivatedRoute,
    private router: Router, private carService: CarService) { }

   displayedColumns: string[] = ['select', 'position','name', 'dni', 'profession', 'update'];

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
    this.owners = data["_embedded"]["owners"];
    this.owners.forEach(element =>{
        this.pos = this.pos + 1;
        element.position = this.pos;
        this.ownersId = element["_links"]["owner"]["href"].split('/');
        console.log(this.ownersId[this.ownersId.length-1]);
        element.id = this.ownersId[this.ownersId.length-1];
    });
 
    });

     this.carService.getAll().subscribe(data => {
      this.cars = data;
    });

    


  }

    //dataSource = new MatTableDataSource<OwnerInfo>(this.owners);
    selection = new SelectionModel<OwnerInfo>(true, []);
  

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    let numRows = 0;
    if(this.owners){
       numRows = this.owners.length;
    }
    this.ownersToDelete = this.selection.selected;
    console.log(`El numero de filas es ${numRows}`);
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.owners.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: OwnerInfo): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  refreshList() {
    this.router.navigate(['/owner-list']);
  }

  refreshPage() {
    window.location.reload();
   }

  
  remove() {
    this.ownersToDelete.forEach(element => {
      
      console.log(element["_links"]["owner"]["href"]);
      this.ownerService.remove(element["_links"]["owner"]["href"]).subscribe(result => {
        console.log("eliminado");
        
        this.refreshPage();
      }, error => console.error(error));
      
    })
   
  }
}




