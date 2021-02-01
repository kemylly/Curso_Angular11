import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: './data-binding.component.html'
})
export class DataBindingComponent {

 public contadorClique: number = 0;
 public urlImagem: string = "../assets/gato.jpg";
 public nome: string = "";

 adicionarClique(){
   this.contadorClique++;
 }

 zerarContador(){
    this.contadorClique = 0;
 }

 Keyup(event: any){
    this.nome = event.target.value;
 }
}
