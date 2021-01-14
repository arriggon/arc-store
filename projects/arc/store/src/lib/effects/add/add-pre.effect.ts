import {PreEffect} from '../pre.effect';

export class AddPreEffect<T> extends PreEffect<T> {
  constructor(callback: (value?: T) => T) {
    super(callback);
  }
}
