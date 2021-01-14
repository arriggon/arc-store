import {PreEffect} from '../pre.effect';

export class SetPreEffect<T> extends PreEffect<T> {
  constructor(callback: (value?: T) => T) {
    super(callback);
  }
}
