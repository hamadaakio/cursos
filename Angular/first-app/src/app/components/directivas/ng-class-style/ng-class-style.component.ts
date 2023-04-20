import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-style',
  templateUrl: './ng-class-style.component.html',
  styleUrls: ['./ng-class-style.component.css'],
})
export class NgClassStyleComponent {
  titleNgClass: string = 'Ng Class | Style';
  testeClass!: boolean;

  estiloH2 = {
    color: 'green',
    'font-size.px': 20,
    'font-weight': 'bold',
  };

  alterarClasse(): void {
    this.testeClass = !this.testeClass;
  }
}
