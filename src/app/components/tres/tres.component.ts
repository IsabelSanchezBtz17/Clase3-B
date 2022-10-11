import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.scss']
})
export class TresComponent implements OnInit {
 
  @Output() salida: EventEmitter<any> = new EventEmitter<any>() ;
  

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('presionado');
    this.salida.emit(1);
  }

  onClickRestar(){
    this.salida.emit(-1);
  }
  
  saludar(){
    this.salida.emit("Hola mundo");
  }

  reiniciar(event: any){
    this.salida.emit(event);
  } 
}
