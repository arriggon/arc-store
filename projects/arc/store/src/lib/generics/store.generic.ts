export interface GenericStore<T> {
  get(): T;
  set(value: T): void;
}
