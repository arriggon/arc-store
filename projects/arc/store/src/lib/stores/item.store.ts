import {BehaviorSubject} from 'rxjs';
import {GetPostEffect, SetPostEffect, SetPreEffect, StoreEffects, GetPreEffect} from '../effects';
import {GenericStore} from '../generics';

export class ItemStore<T> implements GenericStore<T> {
  private readonly source = new BehaviorSubject<T>(this.initial);

  readonly state$ = this.source.asObservable();

  constructor(public initial: T,
              public effects: ItemStoreEffects<T>,
              public name: string) {}

  get(): T {
    this.effects.pre?.forEach(effect => effect.apply(`[${this.name}]: get`));
    this.effects.preGet?.forEach(effect => effect.apply());
    const value = this.source.getValue();
    this.effects.post?.forEach(effect => effect.apply(`[${this.name}]: get`));
    this.effects.postGet?.forEach(effect => effect.apply(value));
    return value;
  }

  set(value: T): void {
    this.effects.pre?.forEach(effect => effect.apply(`[${this.name}]: set`));
    this.effects.preSet?.forEach(effect => effect.apply(value));
    this.source.next(value);
    this.effects.post?.forEach(effect => effect.apply(`[${this.name}]: set`));
    this.effects.postSet?.forEach(effect => effect.apply(value));
  }
}

export interface ItemStoreEffects<T> extends StoreEffects {
  preGet?: GetPreEffect<T>[];
  postGet?: GetPostEffect<T>[];
  preSet?: SetPreEffect<T>[];
  postSet?: SetPostEffect<T>[];
}
