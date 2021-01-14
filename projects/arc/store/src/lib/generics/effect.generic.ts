export interface GenericEffect<T> {
  apply(value?: T): any;
}
