import {StoreRegistry} from './store-registry.service';
import {TestBed} from '@angular/core/testing';
import {InteractPreEffect} from './effects/interact/interact-pre.effect';
import {ItemStore} from './stores/item.store';

describe('StoreRegistry', () => {
  let service: StoreRegistry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreRegistry);
  });

  it('should be created', () => {
    const store: ItemStore<number> = service.register<number>(
      0,
      {pre: [new InteractPreEffect(value => console.log(value))]},
      'Counter'
    ) as ItemStore<number>;

    store.state$.subscribe(value => console.log(`New value: ${value}`));
    store.set(1);
    store.set(2);
    store.set(3);
    console.log(`Value: ${store.get()}`);
    expect(service).toBeTruthy();
  });
});
