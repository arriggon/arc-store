import {GenericPostEffect} from '../generics/post-effect.generic';

export class PostEffect<T> implements GenericPostEffect<T> {
  constructor(public callback: (value?: T) => void) {}

  apply(value?: T): void {
    this.callback(value);
  }
}
