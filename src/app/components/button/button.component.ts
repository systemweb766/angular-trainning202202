import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() bgcolor!: string;
  @Input() text!: string;
  @Input() textColor!: string;
  @Input() fontSize!: string;
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("Button")
    this.btnClick.emit()
  }
}
