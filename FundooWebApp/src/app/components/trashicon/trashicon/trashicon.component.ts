import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-trashicon',
  templateUrl: './trashicon.component.html',
  styleUrls: ['./trashicon.component.scss']
})
export class TrashiconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  deleteNote() {
  }
  restoreNote() {
  }

}
