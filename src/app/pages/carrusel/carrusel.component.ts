import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
  styles: [`
     /deep/ .carousel-item.active {        
        height: 300px;
        width: auto;
        margin: 50px;
        position: static; 
     }
  `]
})
export class CarruselComponent implements OnInit {
  
  event_list = [    
     {
      event:' Event 2',
      eventLocation:'Dubai',
      eventDescription:'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
      img: 'http://a21.com.mx/sites/default/files/field/image/ZEROe%20concept%20aircraft%20-%20Patrol%20Flight.jpeg?random&t=1',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
  ]

  upcoming_events =  this.event_list.filter( event => event.eventStartDate < new Date());
  past_events = this.event_list.filter(event => event.eventEndingDate < new Date());
  current_events =  this.event_list.filter( event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())))
 
  constructor() { }

  ngOnInit(): void {
  }

}
