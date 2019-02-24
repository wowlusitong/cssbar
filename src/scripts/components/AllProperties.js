import React from 'react';
import Helmet from 'react-helmet';
import {withRouter} from 'react-router';

import Property from '~/components/Property';
import data from '~/data/properties';
import Footer from '~/components/Footer';

class AllProperties extends React.Component {
  constructor() {
    super();
    this.state = {
      propertyNames: Object.keys(data)
    };
  }

  scrollTo(name) {
    const top = document.querySelector(name).offsetTop;
    document.querySelector('main').scrollTop = top - 2;
  }

  componentWillReceiveProps({location: {query: {name}}}) {
    if (name !== this.props.location.query.name) {
      this.scrollTo(`#${name}`);
    }
  }

  componentDidMount() {
    const name = this.props.location.query.name;
    name && setTimeout(() => {
      this.scrollTo(`#${this.props.location.query.name}` || 'main');
    }, 0);
  }

  render() {
    return (
      <div>
        <Helmet
          title="CSS可视化教程"
          meta={[
            {name: 'keywords', content: 'css'}
          ]}
          />
        {this.state.propertyNames.map(name =>
          <Property key={name} name={name} property={data[name]} />
        )}
        <Footer />
      </div>
    );
  }
}

export default withRouter(AllProperties)
