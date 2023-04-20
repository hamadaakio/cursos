import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent {
  titleNgFor: string = 'ngFor';
  times: string[] = ['Corinthians', 'Palmeiras', 'São Paulo', 'Santos'];

  objUsers = [
    { login: 'admin', senha: 'admin', email: 'admin@admin' },
    { login: 'andré', senha: 'André', email: 'andre@admin' },
    { login: 'nutella', senha: 'nutella', email: 'nutella@admin' },
  ];

  usuarios: Array<User> = this.objUsers;

  
}

interface User {
  login: string;
  senha: string;
  email: string;
}
