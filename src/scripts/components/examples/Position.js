import React from 'react';

const Static = () => (
    <div>
      <div>1</div>
      <div className="target">目标元素</div>
      <div>2</div>
    </div>
  );

class Fixed extends React.Component {
  constructor() {
    super();
    this.state = {
      isFixed: false
    };
  }
  toggleFixed() {
    this.setState({
      isFixed: !this.state.isFixed
    });
  }

  render() {
    const {isFixed} = this.state;
    return (
      <div>
        <div>1</div>
        <div className="target" style={{position: isFixed ? 'fixed' : 'static'}}>
          目标元素
          <button onClick={this.toggleFixed.bind(this)} className="button">
            {isFixed ? '关闭' : '启用'}fixed效果
          </button>
        </div>
        <div>2</div>
      </div>
    );
  }
}

export default {
  Static,
  Relative: Static,
  Absolute: Static,
  Fixed: Fixed
};
