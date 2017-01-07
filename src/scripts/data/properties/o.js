export default {
  'opacity': {
    description: '指定元素的透明度',
    values: [
      {
        name: '1',
        id: 'default',
        description: '默认值，1为完全不透明'
      },
      {
        name: '0',
        id: 'a',
        description: '0是完全透明'
      },
      {
        name: '0.3',
        id: 'b',
        description: '指定0-1之间的数字，越接近0就越透明',
      },
      {
        name: '0.7',
        id: 'c',
        description: '指定0-1之间的数字，越接近0就越透明',
      }
    ]
  },
  'order': {

  },
  'outline-color': {

  },
  'outline-style': {

  },
  'outline-width': {

  },
  'outline': {

  },
  // 'overflow-wrap': {
  //
  // },
  'overflow-x': {
    description: '当一个块级元素的内容在水平方向发生溢出时，CSS属性overflow-x决定应该截断溢出内容，显示滚动条，或者直接显示溢出内容。',
    values: [
      {
        name: 'visible',
        description: '内容不会被修剪，会呈现在元素框之外'
      },
      {
        name: 'hidden',
        description: '内容会被修剪，并且其余内容不可见'
      },
      {
        name: 'scroll',
        description: '内容会被修剪，浏览器会显示滚动条以便查看其余内容'
      },
      {
        name: 'auto',
        description: '由浏览器定夺，如果内容被修剪，就会显示滚动条'
      }
    ]
  },
  'overflow-y': {
    description: '当一个块级元素的内容在垂直方向发生溢出时，CSS属性overflow-x决定应该截断溢出内容，显示滚动条，或者直接显示溢出内容。',
    values: [
      {
        name: 'visible',
        description: '内容不会被修剪，会呈现在元素框之外'
      },
      {
        name: 'hidden',
        description: '内容会被修剪，并且其余内容不可见'
      },
      {
        name: 'scroll',
        description: '内容会被修剪，浏览器会显示滚动条以便查看其余内容'
      },
      {
        name: 'auto',
        description: '由浏览器定夺，如果内容被修剪，就会显示滚动条'
      }
    ]
  },
  'overflow': {
    description: '作用于block型元素上。定义了内容元素溢出时的处理：裁剪内容，使用滚动条来显示 或直接显示超出部分',
    values: [
      {
        name: 'visible',
        description: '内容不会被修剪，会呈现在元素框之外'
      },
      {
        name: 'hidden',
        description: '内容会被修剪，并且其余内容不可见'
      },
      {
        name: 'scroll',
        description: '内容会被修剪，浏览器会显示滚动条以便查看其余内容'
      },
      {
        name: 'auto',
        description: '由浏览器定夺，如果内容被修剪，就会显示滚动条'
      }
    ]
  }
};
