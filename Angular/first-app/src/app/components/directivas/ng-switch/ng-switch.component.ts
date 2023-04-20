import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
  titlengSwitch: string = "ngSwitchCase"

  condicional: number = 0

  selecionar(data: number) {
    this.condicional = data;
  }
}
