import {borderStyle, borderWidth} from './b.js';

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
    description: '定义flexbox弹性容器内项目的布局顺序，元素会根据order的值进行排序，数字大的在后面',
    values: [
      {
        name: '0',
        id: 'default',
        description: 'flexbox弹性容器里面的项目顺序由html代码决定'
      },
      {
        name: '1',
        id: 'a',
      },
      {
        name: '-1',
        id: 'b',
        description: 'order可以设置为负数'
      },
      {
        name: '5',
        id: 'c'
      }
    ]
  },
  'outline-color': {
    description: '定义元素的outline颜色，outline（轮廓）可以设置元素周围的一条线，在边框的外面',
    values: [
      {
        name: 'invert/currentColor',
        description: '如果浏览器不支持invert则会使用currentColor（当前颜色），invert只有ie8以上浏览器支持'
      },
      {
        name: 'red',
        description: '一个颜色值，包括颜色名称、十六进制、rgb、rgba、hsl、hsla'
      },
      {
        name: 'red',
        id: 'a',
        description: '设置了一个2px的黑色边框，可以更加直观的看到outline的作用范围'
      }
    ]
  },
  'outline-style': {
    description: '定义元素的outline样式，outline（轮廓）可以设置元素周围的一条线，在边框的外面',
    values: borderStyle
  },
  'outline-width': {
    description: '定义元素的outline宽度，outline（轮廓）可以设置元素周围的一条线，在边框的外面',
    values: borderWidth.concat([
      {
        name: '1px 5px',
        id: 'px-1-5',
        description: '如果有两个值得话，第一个是上下边框，第二是左右边框'
      },
      {
        name: '1px 5px 10px',
        id: 'px-1-5-10',
        description: '如果有三个值得话，第一个是上边框，第二个是下边框，第三个是左右边框'
      },
      {
        name: '1px 5px 10px 15px',
        id: 'px-1-5-10-15',
        description: '如果有四个值得话，分别为上、右、下、左'
      }
    ])
  },
  'outline': {
    description: '设置元素的轮廓，是outline-style, outline-width 和 outline-color的缩写',
    values: [
      {
        name: 'medium none invert/currentColor',
        id: 'default'
      },{
        name: '5px solid red',
        id: 'a'
      }
    ]
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
    description: '当一个块级元素的内容在垂直方向发生溢出时，CSS属性overflow-y决定应该截断溢出内容，显示滚动条，或者直接显示溢出内容。',
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
  },
  'object-fit': {

  }
};
