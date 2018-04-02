// @flow

import * as React from 'react';
import { Loader, Error, Content } from './other_modules';

type State = {
  loading: boolean,
  error?: string,
  data?: string,
}

class MyComponent extends React.Component<void, State> {
  render() {
    if (this.state.loading) {
      return <Loader />;
    } else {
      if (this.state.error) {
        return <Error error={this.state.error}/>;
      } else {
        return <Content data={this.state.data} />;
      }
    }
  }
}
