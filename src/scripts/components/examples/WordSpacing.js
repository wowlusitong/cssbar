import React from 'react';

const WordSpacing = () => (
  <div>
    <div className="text">你 好 我 正 在 cssbar 学 习</div>
    <div className="text">你好，我正在cssbar学习</div>
    <div className="text">Hello,  I'm studying on cssbar.com</div>
  </div>
);

export default {
  'Normal': WordSpacing,
  '10px': () => <div className="px"><WordSpacing /></div>
};
