import * as React from 'react';
import * as Nuclear from 'nuclear-js';

let toImmutable = Nuclear.toImmutable;

let reactor = new Nuclear.Reactor({
  debug: true
});

let actionTypes = {
  INC_COUNT: 'INC_COUNT'
};

let actions = {
  increaseCount(state, count) {
    return state.set('count', count + 1);
  }
};

let store = new Nuclear.Store({
  getInitialState() {
    return toImmutable({
      count: 0
    })
  },

  initialize() {
    this.on(actionTypes.INC_COUNT, actions.increaseCount);
  }
});

reactor.registerStores({'counter': store});

let getters = {
  currentCount: [
    ['counter', 'count'],
    (count) => {
      return count;
    }
  ]
};

export default React.createClass({
  displayName: 'CounterComponent',

  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      count: getters.currentCount,
    };
  },

  getMessage() {
    let count = this.state.count;
    let msg = count + ' time';
    if (count > 1) {
      msg += 's';
    }
    msg += ' clicked';
    return msg;
  },

  render() {
    return (
      <span onClick={this.onClick}>{this.getMessage()}</span>
    );
  },

  onClick(event) {
    reactor.dispatch(actionTypes.INC_COUNT, this.state.count);
  }
});