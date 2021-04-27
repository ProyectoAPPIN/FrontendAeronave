import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ordenes-compra',
  templateUrl: './ordenes-compra.component.html',
  styleUrls: ['./ordenes-compra.component.scss']
})
export class OrdenesCompraComponent implements OnInit {

  @Output() convert = new EventEmitter<any>();
  @Output() clear = new EventEmitter<any>();

  excelFile: File;
  resultJSON: any[];
  fileName = '';
  fileValid: boolean;
  reader = new FileReader();
  @ViewChild('excelSelector') inputFile: ElementRef;
  public fileString;
  mostrarTable = false;

  get nombre() { return this.ordenesCompraForm.get('nombre'); }
  get tipo() { return this.ordenesCompraForm.get('tipo'); }

  constructor(
    private spinner: NgxSpinnerService,
    ) { }

  public ordenesCompraForm = new FormGroup({
    nombre: new FormControl(''),
    tipo: new FormControl('')
  });

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 800);
        
  }
  
  Guardar(){
    console.log(this.nombre.value);
    console.log(this.tipo.value)
    Swal.fire({
      title: 'Arenova registrada exitosamente',
      width: 300,         
      confirmButtonText: `Ok`,          
    }).then((result) => {         
      if (result.isConfirmed) {        
      }      
    })     
  }

}
