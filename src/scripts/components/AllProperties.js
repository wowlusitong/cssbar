import React from 'react';
import Helmet from 'react-helmet';

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
        <Helmet
          title="CSS可视化教程 - 致力于打造国内一流的WEB前端开发教程"
          meta={[
            {name: 'keywords', content: 'cssbar, css3教程, 前端开发'},
            {name: 'description', content: 'cssbar是一个可视化css教程，每个css属性都有直观的展示，使web前端开发人员更加方便的查询，也让前端初学者，前端培训人员快速掌握css知识'}
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
