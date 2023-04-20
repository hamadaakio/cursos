import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
   // Vars
   titleNgIf: string = "ngIf - ngIf Else - Hidden"
   mostrarOuNao: boolean = false
   umNumero: number = 50
   umArray: Array<any> = [1]
 
   // Functions
   alterar(): void {
     this.mostrarOuNao = !this.mostrarOuNao
   }
}
