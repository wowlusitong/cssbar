export default {
  'text-align': {
    description: '定义文字的对齐方式。',
    values: [
      {
        name: 'left/right',
        description:`默认值取决于元素的direction设置
        <ul>
          <li>当direction为ltr的时候，默认值为left</li>
          <li>当direction为rtl的时候，默认值为right</li>
        </ul>
        因为direction的默认值是ltr,所以text-align的默认值一般为left
        `
      },
      {
        name: 'center',
        description: '居中对齐'
      },
      {
        name: 'right',
        description: '右对齐'
      },
      {
        name: 'left',
        description: '左对齐'
      },
      {
        name: 'justify',
        description: '两端对齐'
      }
    ]
  },
  'text-decoration': {
    description: '定义文字的修饰效果',
    values: [
      {
        name: 'none',
        description: '不使用修饰效果'
      },
      {
        name: 'underline',
        description: '给文字增加下划线'
      },
      {
        name: 'overline',
        description: '在文字上面加一条直线'
      },
      {
        name: 'line-through',
        description: '在文字中间加一条直线'
      },
      {
        name: 'line-through',
        id: 'a',
        description: '文字的修饰效果的颜色由color设置'
      }
    ]
  },
  'text-indent': {
    description: '定义元素内的文本第一行的缩进距离',
    values: [
      {
        name: '0',
        description: '没有缩进'
      },
      {
        name: '20px',
        id: 'a',
        description: '使用长度，可以使用px, rem, em, 百分比'
      },
      {
        name: '-20px',
        id: 'b',
        description: '也可以使用负数'
      }
    ]
  },
  'text-overflow': {
    description: '定义文字溢出部分如何显示',
    values: [
      {
        name: 'clip',
        description: '将移除部分裁剪掉，也就是不显示'
      },
      {
        name: 'ellipsis',
        description: '溢出部分显示为省略号(...)'
      }
    ]
  },
  'text-shadow': {
    description: `给文字添加阴影效果，一共可以设置四个值，分别为 offset-x | offset-y | blur-radius | color<br/>
    <ul>
      <li>offset-x: 水平偏移量，正值向右偏移，负值的向左偏移</li>
      <li>offset-y: 垂直偏移量，正值向下偏移，负值的向上偏移</li>
      <li>blur-radius: 模糊半径，默认为0，值越大，模糊半径越大，阴影也就越大越淡</li>
      <li>color: 颜色</li>
    </ul>
    `,
    values: [
      {
        name: 'none',
        description: '无效果'
      },
      {
        name: '3px 5px',
        id: 'a',
        description: '可以设置2个值，分别为offset-x | offset-y'
      },
      {
        name: '3px 5px 5px',
        id: 'b',
        description: '当设置3个值，并且最后一个值&lt;length&gt;的时候，分别为offset-x | offset-y | blur-radius'
      },
      {
        name: '3px 5px red',
        id: 'c',
        description: '当设置3个值，并且最后一个值&lt;color&gt;的时候，分别为offset-x | offset-y | color'
      },
      {
        name: '3px 5px 5px red',
        id: 'd',
        description: '当设置4个值，并且最后一个值&lt;length&gt;的时候，分别为offset-x | offset-y | blur-radius | color'
      },
      {
        name: 'red 0px 0px 5px',
        id: 'e',
        description: '当设置4个值，并且最后一个值&lt;length&gt;的时候，分别为offset-x | offset-y | color | blur-radius'
      }
    ]
  },
  'text-transform': {
    description: '',
    values: [
      {
        name: 'none',
        description: '没有变化'
      },
      {
        name: 'capitalize',
        description: '每个单词开头字母大写'
      },
      {
        name: 'uppercase',
        description: '所有字母都大写'
      },
      {
        name: 'lowercase',
        description: '所有字母都小写'
      },
      {
        name: 'full-width',
        description: '设置为全宽，可以理解为字母与中文是一样的宽度。目前只有在firefox19及以上版本支持'
      }
    ]
  },
  'top': {
    description: `设置定位元素距离顶部的位置，当position为static时不会生效
    <ul>
    <li>相对定位(relative)：相对于当前与其自己位置的偏移距离</li>
    <li>绝对定位(absolute/fixed)：当前元素顶部边缘与父元素顶部边缘的偏移距离</li>
    </ul>
    `,
    values: [
      {
        name: 'auto',
        description: '元素会留在它的当前位置'
      },
      {
        name: '20px',
        id: 'px-20',
        description: '距离顶部20像素'
      },
      {
        name: '0px',
        id: 'px-0',
        description: '距离顶部0像素'
      },
      {
        name: '50%',
        id: 'per-50',
        description: '距离顶部50%'
      }
    ]
  },
  // 'transform-origin': {
  //   description: '更改元素变形的原点',
  //   values: [
  //     {
  //       name: '50% 50% 0',
  //       id: 'default',
  //       description: ''
  //     },
  //     {
  //       name: '20px 20px',
  //       id: 'a'
  //     },
  //     {
  //       name: 'top right'
  //     },
  //     {
  //       name: 'center bottom'
  //     },
  //     {
  //       name: '20px 20px 50px'
  //     }
  //   ]
  // },
  'transform': {
    description: '定义元素如何坐标空间，比如移动（translate）、旋转（rotate）、缩放（scale）、倾斜（skew）',
    values: [
      {
        name: 'none',
        description: '没有任何效果'
      },
      {
        name: 'translateX(20px)',
        id: 'translateX',
        description: '在水平坐标上移动元素，也就是元素横向移动'
      },
      {
        name: 'translateY(20px)',
        id: 'translateY',
        description: '在垂直坐标上移动元素，也就是元素纵向移动'
      },
      {
        name: 'translate(20px, 20px)',
        id: 'translate',
        description: `可以设置两个值
        <ul>
          <li>第一个值：在水平坐标上移动元素 translateX</li>
          <li>第二个值：在垂直坐标上移动元素 translateY</li>
        </ul>
        `
      },
      {
        name: 'scaleX(0.8)',
        id: 'scaleX',
        description: '在水平坐标上缩放元素'
      },
      {
        name: 'scaleY(1.3)',
        id: 'scaleY',
        description: '在垂直坐标上缩放元素'
      },
      {
        name: 'scale(1.3, 0.5)',
        id: 'scale',
        description: `可以设置两个值
        <ul>
          <li>第一个值：在水平坐标上移动元素 translateX</li>
          <li>第二个值：在垂直坐标上移动元素 translateY</li>
        </ul>
        `
      },
      {
        name: 'rotate(45deg)',
        id: 'rotate',
        description: '旋转元素'
      },
      {
        name: 'skewX(15deg)',
        id: 'skewX',
        description: '在水平坐标上倾斜元素'
      },
      {
        name: 'skewY(15deg)',
        id: 'skewY',
        description: '在垂直坐标上倾斜元素'
      },
      {
        name: 'skew(15deg, 25deg)',
        id: 'skew',
        description: `可以设置两个值
        <ul>
          <li>第一个值：在水平坐标上倾斜元素 translateX</li>
          <li>第二个值：在垂直坐标上倾斜元素 translateY</li>
        </ul>
        `
      },
      {
        name: 'translate(30px, 30px) rotate(45deg)',
        id: 'a',
        description: '可以设置多个值进行组合'
      }
    ]
  },
  'transition-delay': {

  },
  'transition-duration': {

  },
  'transition-property': {

  },
  'transition-timing-function': {

  },
  'transition': {
  }
};
