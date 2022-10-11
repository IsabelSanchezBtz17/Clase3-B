import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  public inicial: number= 1;
  @Input () valor: number= 0 ;
  @Input() public event!: Event;
  constructor() { }

  ngOnInit(): void {
  }

}
