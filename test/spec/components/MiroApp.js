'use strict';

describe('MiroApp', function () {
  var React = require('react/addons');
  var MiroApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MiroApp = require('components/MiroApp.js');
    component = React.createElement(MiroApp);
  });

  it('should create a new instance of MiroApp', function () {
    expect(component).toBeDefined();
  });
});
