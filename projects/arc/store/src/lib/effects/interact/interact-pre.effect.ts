import {PreEffect} from '../pre.effect';

export class InteractPreEffect extends PreEffect<string> {
  constructor(callback: (value: string) => any) {
    super(callback);
  }
}
