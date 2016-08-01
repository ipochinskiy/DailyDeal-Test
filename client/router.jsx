'use strict';

import React from 'react';
import { mount } from 'react-mounter';
import Raiting from './containers/Raiting';

const MainLayout = ({ content }) => (
    <div id="root">
        { content }
    </div>
);

FlowRouter.route('/', {
  name: 'index',
  action(params, queryParams) {
    FlowRouter.go('/rating');
  }
});

FlowRouter.route('/rating', {
  name: 'rating',
  action(params, queryParams) {
    mount(MainLayout, { content: (<Raiting />) });
  }
});
