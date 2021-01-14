import {GenericEffect} from './effect.generic';

export interface GenericPreEffect<T> extends GenericEffect<T> {
  apply(value?: T): T;
}
