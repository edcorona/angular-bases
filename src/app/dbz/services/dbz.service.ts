import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';



import { Character } from '../interfaces/character.interface';

//Injectable es un Decorador


//Sin el providedIn:root, se tendria que definir el servicio en app.module.ts en la parte de los providers

@Injectable({
  providedIn: 'root'
})
//Simple clase pero con el decorador Injectable lo hace para que la trate como servicio
//Misma Instancia Singletoon
export class DbzService {


  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(Character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...Character
    };

    //push lo agrega al final del arreglo
    this.characters.push(Character);

  }

  //onDeleteCharacter(index: number) {
  //this.characters.splice(index,1);
  //}

  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( Character => Character.id !== id);
  }




}
