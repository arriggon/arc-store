import {PostEffect} from '../post.effect';

export class GetPostEffect<T> extends PostEffect<T> {
  constructor(callback: (value: T) => void) {
    super(callback);
  }
}
