import {BehaviorSubject} from 'rxjs';
import {StoreEffects} from '../effects/store-effects';
import {AddPreEffect} from '../effects/add/add-pre.effect';
import {GetPostEffect} from '../effects/get/get-post.effect';
import {SetPostEffect} from '../effects/set/set-post.effect';
import {AddPostEffect} from '../effects/add/add-post.effect';
import {RemovePreEffect} from '../effects/remove/remove-pre.effect';
import {SetPreEffect} from '../effects/set/set-pre.effect';
import {GetPreEffect} from '../effects/get/get-pre.effect';
import {RemovePostEffect} from '../effects/remove/remove-post.effect';
import {GenericIterableStore} from '../generics/iterable-store.generic';

export class IterableStore<T> implements GenericIterableStore<T> {
  private readonly source = new BehaviorSubject<Array<T>>(this.initial);

  readonly state$ = this.source.asObservable();

  constructor(public initial: Array<T>,
              public effects: IterableStoreEffects<T>,
              public name: string) {}

  add(value: T): void {
    this.effects.pre?.forEach(effect => effect.apply(`[${this.name}]: add`));
    this.effects.preAdd?.forEach(effect => effect.apply(value));
    const values = [...this.get(), value];
    this.set(values);
    this.effects.post?.forEach(effect => effect.apply(`[${this.name}]: add`));
    this.effects.postAdd?.forEach(effect => effect.apply(value));
  }

  get(): Array<T> {
    this.effects.pre?.forEach(effect => effect.apply(`[${this.name}]: get`));
    this.effects.preGet?.forEach(effect => effect.apply());
    const value = this.source.getValue();
    this.effects.post?.forEach(effect => effect.apply(`[${this.name}]: get`));
    this.effects.postGet?.forEach(effect => effect.apply(value));
    return value;
  }

  remove(value: T): void {
    this.effects.pre?.forEach(effect => effect.apply(`[${this.name}]: remove`));
    this.effects.preRemove?.forEach(effect => effect.apply(value));
    const values = this.get().filter(v => v !== value);
    this.set(values);
    this.effects.post?.forEach(effect => effect.apply(`[${this.name}]: remove`));
    this.effects.postRemove?.forEach(effect => effect.apply(value));
  }

  set(value: Array<T>): void {
    this.effects.pre?.forEach(effect => effect.apply(`[${this.name}]: set`));
    this.effects.preSet?.forEach(effect => effect.apply());
    this.source.next(value);
    this.effects.post?.forEach(effect => effect.apply(`[${this.name}]: set`));
    this.effects.postSet?.forEach(effect => effect.apply(value));
  }
}

export interface IterableStoreEffects<T> extends StoreEffects {
  preAdd?: AddPreEffect<T>[];
  postAdd?: AddPostEffect<T>[];
  preGet?: GetPreEffect<T[]>[];
  postGet?: GetPostEffect<T[]>[];
  preRemove?: RemovePreEffect<T>[];
  postRemove?: RemovePostEffect<T>[];
  preSet?: SetPreEffect<T[]>[];
  postSet?: SetPostEffect<T[]>[];
}
