import {Component, OnInit} from '@angular/core';
import {ItemStore, SetPostEffect} from '@arc/store';
import {StoreRegistry} from '@arc/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testing-grounds';
  counterStore: ItemStore<number>;
  counter$: Observable<number>;

  constructor(private readonly storeRegistry: StoreRegistry) {}

  ngOnInit(): void {
    this.counterStore = this.storeRegistry.register<number>(0, {
      postSet: [new SetPostEffect(value => console.log(`Value change: ${value}`))]
    }, 'counter');
    this.counter$ = this.counterStore.state$;
  }

  increaseCounter(): void {
    this.counterStore.set(this.counterStore.get() + 1);
  }

  decreaseCounter(): void {
    this.counterStore.set(this.counterStore.get() - 1);
  }

  reset(): void {
    this.counterStore.set(0);
  }
}
