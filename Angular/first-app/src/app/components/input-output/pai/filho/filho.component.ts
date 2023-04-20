import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css'],
})
export class FilhoComponent {
  @Input() titulo: string = 'Título do Filhooooooo!!';
  @Output() dadoEnviado = new EventEmitter();

  enviarDados(): void {
    this.dadoEnviado.emit('Valor enviado do componente filho!');
  }
}
