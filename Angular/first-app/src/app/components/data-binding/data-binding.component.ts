import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  // Declarar as variáveis
  title: string = 'Data Binding Título';
  urlImagem: string = 'https://www.trainning.com.br/img/trainning-brand.png';
  valorInput: string = "André";
  valorTwoWay: string = "Curso Angular"
  valorTwoWay2: string = "Curso React"

  // Criar funções
  retornaTexto(): string {
    return 'Um texto retornado pela Interpolação';
  }

  emiteAlerta():void {
    alert("Emitindo um alerta na tela!")
  }
}
