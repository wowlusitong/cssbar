import React from 'react';
import App from '~/components/App';

export default () => (
  <div className="page-404">
    <div className="not-found">请求的页面不存在,请检查url路径是否正确。</div>
    <App />
  </div>
);
