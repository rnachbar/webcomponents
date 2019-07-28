import {
  Component, OnInit,
  Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'nachbar-title',
  templateUrl: './nachbar-title.component.html',
  styleUrls: ['./nachbar-title.component.css']
})
export class NachbarTitleComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
