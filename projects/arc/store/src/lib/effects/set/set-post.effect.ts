import {PostEffect} from '../post.effect';

export class SetPostEffect<T> extends PostEffect<T> {
  constructor(callback: (value?: T) => void) {
    super(callback);
  }
}
