import React from 'react';
import Helmet from 'react-helmet';

import Property from '~/components/Property';
import data from '~/data/properties';

export default class PropertyDetails extends React.PureComponent {

  render() {
    const name = this.props.params.name;
    return (
      <div>
        <Helmet
          title={`CSS ${name} 属性 | css可视化教程`}
          meta={[
            {name: 'keywords', content: `css属性,${name}`},
            {name: 'description', content: `css的${name}属性，${data[name].description}`}
          ]}
          />
        <Property name={name} property={data[name]} />
      </div>
    );
  }
}
