import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clase-c';
  public valor: number=0;

  incremento(event: any){
    console.log(event);
  //  this.valor= this.valor + event;
     this.valor=event;
  }

  reiniciar(event: any){
    console.log(event);
  //  this.valor= this.valor + event;
    // this.valor=0;
    console.log(event);
  }
}
