import React from 'react';
import {withRouter} from 'react-router';

import data from '~/data/properties';

class PropertyNav extends React.Component {
  constructor(props) {
    super(props);
    this.names = Object.keys(data);
    this.state = {
      names: this.names.filter(name => name.includes(props.value))
    };
  }

  handleClick(name: string, event) {
    event.preventDefault();
    const isDetailPage = this.props.params.name;
    if (isDetailPage) {
      //FIXME use react-router
      location.href = `/#${name}`;
    } else {
      location.hash = name;
    }
  }

  componentWillReceiveProps({value}) {
    if (value !== this.props.value) {
      this.setState({
        names: this.names.filter(name => name.includes(value))
      });
    }
  }


  render() {
    const {value} = this.props;
    const {names} = this.state;

    return (
      <ul className="property-nav-wrap">
        {names.map(property =>
          <li key={property}>
            <a onClick={this.handleClick.bind(this, property)}
              dangerouslySetInnerHTML={{__html:
                property.replace(RegExp(`(${value})`), '<span class="highlight">$1</span>')
              }}/>
          </li>
        )}
      </ul>
    );
  }
}

export default withRouter(PropertyNav);
