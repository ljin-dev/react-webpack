/// <reference path="immutable.d.ts" />

declare module 'nuclear-js' {

  export type ImmutableListOrMap = Immutable.Map<any, any> | Immutable.List<any>;

  interface ReactorConfig {
    debug?: boolean;
  }

  export type KeyPath = Array<string>;
  export type CombinationFn = (...results: Array<any>) => any;
  export type Getter = Array<KeyPath|CombinationFn>;
  export type CombinationGetter = Array<KeyPath|Getter|CombinationFn>;
  export type KeyPathOrGetter = KeyPath | Getter | CombinationGetter;
  export type ObserveFn = (result: ImmutableListOrMap) => void;

  export class Reactor {
    constructor(reactorConfig: ReactorConfig);
    dispatch(actionType: string, payload: any);
    batch(batchFn: () => void);
    evaluate(keyPathOrGetter: KeyPathOrGetter): ImmutableListOrMap;
    evaluateToJS(keyPathOrGetter: KeyPathOrGetter): any;
    observe(keyPathOrGetter: KeyPathOrGetter, observeFn: ObserveFn): void;
    registerStores(storesConfig: StoreConfigMap);
    loadState(state: Object): void;
    serialize(): Object;
  }

  interface StoreConfig {
    getInitialState: (obj: any) => ImmutableListOrMap;
    initialize: () => void;
  }

  interface StoreConfigMap {
    [storeId: string]: Store;
  }

  export class Store {
    constructor(storeConfig: StoreConfig);
    on(actionType: string, stateModifier: (state: ImmutableListOrMap, ...payload: Array<any>) => ImmutableListOrMap): void;
  }

  export const Immutable;
  export function toImmutable(obj: any): ImmutableListOrMap;
  export function isImmutable(obj: any): boolean;
  export function isKeyPath(obj: any): boolean;
  export function isGetter(obj: any): boolean;
}