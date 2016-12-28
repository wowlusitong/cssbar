import React from 'react';

import Sidebar from '~/components/Sidebar';
import AllProperties from '~/components/AllProperties';

export default class App extends React.Component {

  render() {
    return (
      <div className="body-wrap">
        <Sidebar />
        <main>
          <AllProperties />
        </main>
      </div>
    );
  }
}
