/* @flow */

import React from 'react';

import allExamples from '~/components/examples';
import descriptions from '~/components/descriptions';
import {toCamelcase} from '~/utils/format';

export default class Property extends React.PureComponent {

  renderDefault() {
    return (
      <span>默认值</span>
    );
  }

  render() {
    const {property, name} = this.props;
    const Description = descriptions[toCamelcase(name)];

    return (
      <section className="property-wrap" id={name}>
        <h2>
          <strong>
            <a href={`/css/${name}`} target="_blank">{name}</a>
          </strong>
        </h2>
        {property.values == null && 'Coming Soon'}
        {Description ? <Description /> : <p dangerouslySetInnerHTML={{__html: property.description}} />}
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
