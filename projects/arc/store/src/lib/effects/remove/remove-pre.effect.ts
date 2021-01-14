import {PreEffect} from '../pre.effect';

export class RemovePreEffect<T> extends PreEffect<T> {
  constructor(callback: (value?: T) => T) {
    super(callback);
  }
}
