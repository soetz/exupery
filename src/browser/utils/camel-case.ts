export class CamelCase {

  private static notUnicodeLetterOrNumber = /(\p{P}|\p{M}|\p{S}|\p{Z}|\p{C})/u;

  public static transform = (value: string): string => {
    if(!value) return value;

    let result = '';
    let lastCharacterWasSkipped = false;
    for(const character of value) {
      if(!CamelCase.notUnicodeLetterOrNumber.test(character)) {
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
