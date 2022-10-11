import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  
  public flag: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.flag=!this.flag;
  }
  onEnter(){
    console.log('Adios');
  }

  validation(event: any){
    console.log(event)
    console.log(event.target)
    console.log((event.target as HTMLInputElement).value)
    let temporal = ((event.target as HTMLInputElement).value).replace(/[^A-Za-zá-úÁ-Ú ]|[*÷×]/g, '');
    console.log(temporal);
    (event.target as HTMLInputElement).value = temporal
  }
}
