import {GenericEffect} from './effect.generic';

export interface GenericPostEffect<T> extends GenericEffect<T> {
  apply(value?: T): void;
}
