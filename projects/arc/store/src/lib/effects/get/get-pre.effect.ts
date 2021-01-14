import {PreEffect} from '../pre.effect';

export class GetPreEffect<T> extends PreEffect<T> {
  constructor(callback: () => T) {
    super(callback);
  }
}
