import React from 'react';
import {withRouter, Link} from 'react-router';

import data from '~/data/properties';

class PropertyNav extends React.Component {
  constructor(props) {
    super(props);
    this.names = Object.keys(data);
    this.state = {
      names: this.names.filter(name => name.includes(props.value))
    };
  }

  componentWillReceiveProps({value}) {
    if (value !== this.props.value) {
      this.setState({
        names: this.names.filter(name => name.includes(value))
      });
    }
  }

  render() {
    const {value, params:{name}} = this.props;
    const {names} = this.state;

    return (
      <ul className="property-nav-wrap">
        {names.map(property =>
          <li key={property}>
            <Link
              to={`/?name=${name || property}`}
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
