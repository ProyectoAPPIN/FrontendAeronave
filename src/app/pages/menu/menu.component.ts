import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';
import { finalize } from 'rxjs/operators';
import { Constantes } from 'src/app/utils/constantes.util';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { SodimacCommonConstants } from 'src/app/common/constantes.class';
import { AlertService } from 'src/app/services/alert/alert.service';
import Swal from 'sweetalert2';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  icon: string;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  icon: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  public opened = true;

  listadoMenu: any = [];
  usuarioLogeado: any = {
    usuario:""
  }
  estadoProceso:boolean;

  data: any;
  usuario;
  nombreUsuario;
  cargo;
  alerta: string = '';

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      icon: node.icon,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor(
    private menuService: MenuService,
    private spinner: NgxSpinnerService,
    private _alertService: AlertService,
    private route: Router) {
      
    //this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
 
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 800);
    this.data = JSON.parse(sessionStorage.getItem(Constantes.DATOS_SESION_USUARIO));
    this.usuario = this.data;
    this.nombreUsuario = this.data.Name;
    this.cargo  = this.data.Cargo;    
    this.obtenerMenu();
  }
   obtenerMenu() {
    this.usuarioLogeado.usuario = this.usuario;
    //this.usuarioLogeado.usuario = "BARN01";
     //console.log(this.usuarioLogeado);     
    this.menuService.obtenerListadoMenu().pipe(
      finalize(() => {
        console.log('Servicio completado correctamente');
        setTimeout(() => {
          // this.spinner.hide();
        }, 500);
      }
      )).subscribe(resp => {
        console.log(resp);
        this.listadoMenu = resp;
        this.dataSource.data = this.listadoMenu;
        console.log(this.listadoMenu);       
        
      });
  }

  cargarMenu(submenu:string){    
    //alert(submenu);
    //"Seguimiento OC"
    if(submenu == "Registro Aeronaves"){      
      this.route.navigate([SodimacCommonConstants.routing.SeguimientoOC]);
    } 
    if(submenu == "Listado Aeronaves"){      
      this.route.navigate([SodimacCommonConstants.routing.ListadoAeronaves]);
    } 
    if(submenu == "Solicitud Alquiler"){      
      this.route.navigate([SodimacCommonConstants.routing.Solicitud]);
    } 
  }
}
