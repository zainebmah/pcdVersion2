import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.page.html',
  styleUrls: ['./affiche.page.scss'],
})
export class AffichePage implements OnInit {
  menu:string = 'similaires';
  similaires :any;

  constructor() { 

    this.similaires = [
      {nome:"Chessescake com frutas vermelhas",imagemUrl:"./assets/122.jpg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {nome:"Chessescake com frutas vermelhas",imagemUrl:"./assets/must.png",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {nome:"Mousse de Chocolate com Frutas Vermelhas",imagemUrl:"./assets/hhhh.jpg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {nome:"Bolo Fofo de Limão",imagemUrl:"./assets/image.jpg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {nome:"Bolo Fofo de Especiarias",imagemUrl:"./assets/122.jpg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {nome:"Bolo Fofo de Fubar com Goiaba",imagemUrl:"./assets/images (2).jpg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
    ];
  }

  ngOnInit() {
  }

}
