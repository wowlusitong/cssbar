import React from 'react';
import {observer} from 'mobx-react';

import AnimationDelayStore from '~/stores/AnimationDelay';

@observer
export default class AnimationDelay extends React.Component {

  handleClick() {
    AnimationDelayStore.change();
  }

  render() {
    const {isRun} = AnimationDelayStore;
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          {isRun ? '停止' : '开始'}
        </button>
      </div>
    );
  }
}
