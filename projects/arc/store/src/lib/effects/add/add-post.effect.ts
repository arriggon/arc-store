import {PostEffect} from '../post.effect';

export class AddPostEffect<T> extends PostEffect<T> {
  constructor(callback: (value?: T) => void) {
    super(callback);
  }
}
