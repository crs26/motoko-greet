import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'get_count' : ActorMethod<[], bigint>,
  'greet' : ActorMethod<[string], string>,
}
