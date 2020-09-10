import {Type, ɵstringify as stringify} from '@angular/core';

export function invalidPipeArgumentError(type: Type<any>, value: Record<string, unknown>): Error {
  return Error(`InvalidPipeArgument: '${stringify(value)}' for pipe '${stringify(type)}'`);
}
