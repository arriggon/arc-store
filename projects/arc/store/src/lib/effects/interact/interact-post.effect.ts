import {PostEffect} from '../post.effect';

export class InteractPostEffect extends PostEffect<string> {
  constructor(callback: (value: string) => void) {
    super(callback);
  }
}
