import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  /**
   * Input Type: text | password | number
   */
  @Input()
  type: string = 'text';

  /**
   * Input Placeholder: string
   */
  @Input()
  placeholder: string = 'Placeholder';

  /**
   * Input Value: string
   */
  @Input()
  value: string = 'Value';

  /**
   * Input Style: style of input (color, backgroundColor, fontSize, fontWeight, height, width, borderColor, borderRadius, borderWidth)
   */
  @Input()
  style: StyleInput | undefined;

  constructor() {}

  ngOnInit(): void {}
}


export interface StyleInput {
  color: string;
  backgroundColor: string;
  fontSize: string;
  fontWeight: string;
  height: string;
  width: string;
  borderColor: string;
  borderRadius: string;
  borderWidth: string;
}