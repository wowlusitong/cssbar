/* @flow */

import React from 'react';
import {Link} from 'react-router';

import allExamples from '~/components/examples';
import {toCamelcase} from '~/utils/format';

export default class Property extends React.Component {

  renderDefault() {
    return (
      <span>默认值</span>
    );
  }

  handleClick(name: string, event) {
    event.preventDefault();

    location.hash = name;
  }
  
  render() {
    const {property, name} = this.props;

    return (
      <section className="property-wrap" id={name}>
        <h2>
          <strong>
            <a href="#" onClick={this.handleClick.bind(this, name)}>{name}</a>
          </strong>
        </h2>
        <p dangerouslySetInnerHTML={{__html: property.description}} />
        {(property.values || []).map((value, i) => {
          const propertyExample = allExamples[toCamelcase(name)];
          const Example = typeof propertyExample === 'function'
            ? propertyExample
            : propertyExample && propertyExample[toCamelcase(value.name)];
          return <section className="example" key={i}>
            <div className="description">
              <p>
                <span>{name}: {value.name};</span>
                {i === 0 && this.renderDefault()}
              </p>
              <p dangerouslySetInnerHTML={{__html: value.description}} />
            </div>
            <div className={`preview ${value.id || value.name}`}>
              {Example && <Example />}
            </div>
          </section>;
        })}
      </section>
    );
  }
}
