import {observable, action} from 'mobx';

class AnimationDelay {
  @observable isRun = false;

  @action.bound
  change() {
    this.isRun = !this.isRun;
  }
}

export default new AnimationDelay();
