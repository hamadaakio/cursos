import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css'],
})
export class PaiComponent {
  tituloHeader: string = 'componente Pai';
  tituloDescription: string = 'Passando informações entre componentes';

  tituloFilho!: string;
  dadoRecebido: any;

  receberDados(event: any): void {
    this.dadoRecebido = event;
    alert(this.dadoRecebido)
  
  }
}
