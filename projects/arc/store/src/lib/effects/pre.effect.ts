import {GenericPreEffect} from '../generics/pre-effect.generic';

export class PreEffect<T> implements GenericPreEffect<T> {
  constructor(public callback: (value?: T) => T) {}

  apply(value?: T): T {
    return this.callback(value);
  }
}
