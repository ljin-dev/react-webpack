//~!  CounterApp.jsx

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CounterComponent from '../components/CounterComponent.jsx';

export function run(renderTo, props) {
  props = props || {};
  ReactDOM.render(<CounterComponent {...props}/>, renderTo);
}