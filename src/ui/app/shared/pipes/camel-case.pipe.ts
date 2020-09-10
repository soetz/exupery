import { Pipe, PipeTransform } from '@angular/core';
import { invalidPipeArgumentError } from './invalid-pipe-argument-error';

@Pipe({name: 'camelCase'})
export class CamelCasePipe implements PipeTransform {

  private notUnicodeLetterOrNumber = /(\p{P}|\p{M}|\p{S}|\p{Z}|\p{C})/u;

  public transform = (value: string): string => {
    if(!value) return value;
    if(typeof value !== 'string') {
      throw invalidPipeArgumentError(CamelCasePipe, value);
    }

    let result = '';
    let lastCharacterWasSkipped = false;
    for(const character of value) {
      if(!this.notUnicodeLetterOrNumber.test(character)) {
        result = result.concat(lastCharacterWasSkipped ? character.toUpperCase() : character);
        lastCharacterWasSkipped = false;
      }
      else {
        lastCharacterWasSkipped = true;
      }
    }

    return result[0].toLowerCase() + result.substr(1);
  }
}
