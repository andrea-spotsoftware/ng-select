import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
const momentFunc = "default" in moment ? moment["default"] : moment;
import * as Inputmask from 'inputmask/dist/inputmask/inputmask.numeric.extensions';
const inputmaskFunc = "default" in Inputmask ? Inputmask["default"] : Inputmask;
import { OnInit } from '@angular/core';

@Component({
  selector: 'ngx-custom-input',
  templateUrl: './custom-input.component.html'
})
export class CustomInputComponent implements OnInit {

  @Input() readonly = false;
  
  @ViewChild('inputmask') inputmask: ElementRef;
  
  value: string;

  ngOnInit(): void {
    const mask = new inputmaskFunc({
      'alias': 'numeric',
      'allowMinus': true,
      'allowPlus': false,
      'unmaskAsNumber': true,
      'radixPoint': '.',
      'groupSeparator': ',',
      'autoGroup': true,
      'showMaskOnHover': false,
      'digits': 2,
      'digitsOptional': true,
      'prefix': '',
      'clearMaskOnLostFocus': false,
      'placeholder': '0',
      'integerDigits': '+',
      'integerOptional': true,
      'nullable': false,
      'positionCaretOnClick': 'none',
      'rightAlign': false
    });

    mask.mask(this.inputmask.nativeElement);

    this.value = momentFunc().format('LLL');
  }
}
