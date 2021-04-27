import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-listado-aeronaves',
  templateUrl: './listado-aeronaves.component.html',
  styleUrls: ['./listado-aeronaves.component.css']
})
export class ListadoAeronavesComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Nombre', 'Tipo'];
  dataSource = new MatTableDataSource();
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public valorPlaca = ""

  constructor(private autSvc: MenuService,
    private spinner: NgxSpinnerService) { }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

  ngOnInit(): void {
    this.obtenerAeronaves();
  }

  obtenerAeronaves() {
    this.spinner.show();
    this.autSvc.obtenerListadoAeronaves().pipe(
      finalize(() => {
        console.log('Servicio completado correctamente');
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      }
      )).subscribe(resp => {        
        this.dataSource.data = resp;     
        console.log(this.dataSource.data);
      });
  }

}
