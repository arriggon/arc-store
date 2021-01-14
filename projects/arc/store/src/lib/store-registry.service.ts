import {Injectable} from '@angular/core';
import {StoreModule} from './store.module';
import {IterableStore, IterableStoreEffects} from './stores/iterable.store';
import {ItemStore, ItemStoreEffects} from './stores/item.store';
import {GenericStore} from './generics/store.generic';

@Injectable({
  providedIn: 'root'
})
export class StoreRegistry {
  private registeredStores: Map<string, GenericStore<any>>
    = new Map<string, GenericStore<any>>();

  constructor() {}

  register<T>(initial: T, effects: ItemStoreEffects<T> | IterableStoreEffects<T>, name: string): any {
    let store;
    if (initial instanceof Array) {
      store = new IterableStore<T>(initial, effects as IterableStoreEffects<T>, name);
      this.registeredStores.set(name, store);
      return store;
    }

    store = new ItemStore<T>(initial, effects as ItemStoreEffects<T>, name);
    this.registeredStores.set(name, store);
    return store;
  }

  unregister(name: string): void {
    this.registeredStores.delete(name);
  }

  get(name: string): GenericStore<any> {
    return this.registeredStores.get(name);
  }
}