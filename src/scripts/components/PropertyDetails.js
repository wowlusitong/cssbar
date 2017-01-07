import React from 'react';

import Property from '~/components/Property';
import data from '~/data/properties';

export default class PropertyDetails extends React.PureComponent {

  render() {
    const name = this.props.params.name;
    return (
      <div>
        <Property name={name} property={data[name]} />
      </div>
    );
  }
}
