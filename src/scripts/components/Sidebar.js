import React from 'react';
import classNames from 'classnames';

import PropertyNav from '~/components/PropertyNav';

export default class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      isActive: false
    };
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      value
    });
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({
      value: '',
    });
  }

  handleFocus() {
    this.setState({
      isActive: true,
    });
  }

  handleBlur() {
    this.setState({
      isActive: false,
    });
  }

  render() {
    const {value, isActive} = this.state;
    return (
      <nav className="sidebar-wrap">
        <header>
          <div style={{flex: 1}}>

          </div>
          <div className="search-wrap">
            <i className={`fa fa-search ${classNames({active: isActive})}`} />
            <input type="text" placeholder="请输入关键字" value={value}
              onChange={this.handleChange.bind(this)}
              onFocus={this.handleFocus.bind(this)}
              onBlur={this.handleBlur.bind(this)}
              />
            {value &&
              <a href="#" onClick={this.handleClear.bind(this)}>
                <i className={`fa fa-close ${classNames({active: isActive})}`} />
              </a>
            }
          </div>
        </header>
        <PropertyNav value={value} />
      </nav>
    );
  }
}
