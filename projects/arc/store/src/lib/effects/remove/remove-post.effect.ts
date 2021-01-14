import {PostEffect} from '../post.effect';

export class RemovePostEffect<T> extends PostEffect<T> {
  constructor(callback: (value?: T) => void) {
    super(callback);
  }
}
