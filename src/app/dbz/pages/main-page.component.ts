import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main.page.component.html'
})

export class MainPageComponent {

  //al ponerle public al componente del service habilita que en todo el componente del main page
  //toda la informacion que este siendo utilizada en este servicio
  constructor ( private dbzService: DbzService ) {

  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id:string ): void{
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( Character: Character ): void {
    this.dbzService.addCharacter( Character );
  }

}
