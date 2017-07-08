import React from 'react';
import {observer} from 'mobx-react';

import AnimationDelayStore from '~/stores/AnimationDelay';


@observer
export default class AnimationDelay extends React.Component {
  render() {
    const {isRun} = AnimationDelayStore;
    return (
      <div style={{animationName: isRun ? 'move' : ''}}>
        Hello World
      </div>
    );
  }
}
