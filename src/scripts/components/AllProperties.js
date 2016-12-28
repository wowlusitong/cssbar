import React from 'react';

import Property from '~/components/Property';
import data from '~/data/properties';
import Footer from '~/components/Footer';

export default class AllProperties extends React.Component {
  constructor() {
    super();
    this.state = {
      propertyNames: Object.keys(data)
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const top = document.querySelector(window.location.hash || 'main').offsetTop;
      document.querySelector('main').scrollTop = top - 2;
    }, 0);
  }

  render() {
    return (
      <div>
        {this.state.propertyNames.map(name =>
          <Property key={name} name={name} property={data[name]} />
        )}
        <Footer />
      </div>
    );
  }
}
