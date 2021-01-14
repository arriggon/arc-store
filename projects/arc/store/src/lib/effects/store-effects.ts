import {InteractPreEffect} from './interact/interact-pre.effect';
import {InteractPostEffect} from './interact/interact-post.effect';

export interface StoreEffects {
  pre?: InteractPreEffect[];
  post?: InteractPostEffect[];
}
