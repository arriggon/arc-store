import {GenericStore} from './store.generic';

export interface GenericIterableStore<T> extends GenericStore<Array<T>> {
  add(value: T): void;
  remove(value: T): void;
}
