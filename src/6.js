// @flow

import * as React from 'react';
import { Loader, Error, Content } from './other_modules';

type State =
  | {
      type: 'LOADING',
    }
  | {
      type: 'ERROR',
      error: string,
    }
  | {
      type: 'SUCCESS',
      data: string,
    };
class MyComponent extends React.Component<void, State> {
  render() {
    switch (this.state.type) {
      case 'LOADING':
        return <Loader />;
      case 'ERROR':
        return <Error error={this.state.error} />;
      case 'SUCCESS':
        return <Content data={this.state.data} />;
      default:
        return 'Impossible state';
    }
  }
}
