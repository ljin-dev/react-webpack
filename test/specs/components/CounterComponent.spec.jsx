import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import assert from 'assert';
import CounterComponent from '../../../src/components/CounterComponent';

describe('Counter component with NuclearJS', () => {
  let clickerComponent;

  before('render and locate element', function() {
    clickerComponent = TestUtils.renderIntoDocument(
      <CounterComponent />
    );
  });

  it('renders to DOM', function() {
    var span = TestUtils.findRenderedDOMComponentWithTag(
      clickerComponent,
      'span'
    );

    assert.equal(span.innerHTML, '0 time clicked');
  });

  it('displays the message with the initial count', function() {
    var span = ReactDOM.findDOMNode(clickerComponent);

    assert.equal(span.innerHTML, '0 time clicked');
  });

  it('updates the message with the count increased by 1 after being clicked', function() {
    var span = ReactDOM.findDOMNode(clickerComponent);
    TestUtils.Simulate.click(span);

    assert.equal(span.innerHTML, '1 time clicked');
  });
});
