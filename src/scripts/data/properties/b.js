const borderColor =  [
  {
    name: 'currentColor',
    description: '当前文字颜色'
  },
  {
    name: 'red',
    description: '一个颜色值，包括颜色名称、十六进制、rgb、rgba、hsl、hsla'
  }
];
export const borderWidth = [
  {
    name: 'medium',
    description: '定义中等边框，在chrome/firefox等于3px'
  },
  {
    name: 'thin',
    description: '定义细边框，在chrome/firefox等于1px'
  },
  {
    name: 'thick',
    description: '定义粗边框，在chrome/firefox等于5px'
  },
  {
    name: '1px',
    id: 'px-1',
    description: '1px边框，使用[length]指定具体的宽度。'
  },
  {
    name: '10px',
    id: 'px-10',
    description: '10px边框，使用[length]指定具体的宽度。'
  }
];
export const borderStyle = [
  {
    name: 'none',
    description: '不显示边框'
  },
  {
    name: 'solid',
    description: '显示为一个单线、直的实心边框'
  },
  {
    name: 'dotted',
    description: '显示为一些列点状边框'
  },
  {
    name: 'dashed',
    description: '显示为虚线边框，夹角为直角'
  },
  {
    name: 'double',
    description: '显示为两条直线，两条线之间的宽度取决于 border-width 的值'
  },
  {
    name: 'groove',
    description: '显示为雕刻效果的边框，与ridge效果相反'
  },
  {
    name: 'ridge',
    description: '显示为一个像出屏3D效果的边框，类似于屋脊，与groove效果相反'
  },
  {
    name: 'inset',
    description: '显示为一个内嵌效果的边框，与outset效果相反'
  },
  {
    name: 'outset',
    description: '显示为一个凸出的3D效果边框，与inset效果相反'
  },
  {
    name: 'hidden',
    description: '不显示边框，但是在表格中会有最高的优先级'
  }
];

export default {
  'background-attachment': {

  },
  'background-clip': {

  },
  'background-color': {

  },
  'background-image': {

  },
  'background-origin': {

  },
  'background-position': {

  },
  'background-repeat': {

  },
  'background-size': {

  },
  'background': {

  },
  'border-bottom-color': {
    description: '定义下边框颜色。',
    values: borderColor
  },
  'border-bottom-left-radius': {
    description: '设置元素左下方圆角边框',
    values: [
      {
        name: '0',
        id: 'px-0',
        description: '不设置圆角'
      },
      {
        name: '10px',
        id: 'px-10',
        description: '使用像素设置圆角，也可以使用其他length单位'
      },
      {
        name: '10%',
        id: 'per-10',
        description: '使用百分比设置圆角'
      }
    ]
  },
  'border-bottom-right-radius': {
    description: '设置元素右下方圆角边框',
    values: [
      {
        name: '0',
        id: 'px-0',
        description: '不设置圆角'
      },
      {
        name: '10px',
        id: 'px-10',
        description: '使用像素设置圆角，也可以使用其他length单位'
      },
      {
        name: '10%',
        id: 'per-10',
        description: '使用百分比设置圆角'
      }
    ]
  },
  'border-bottom-style': {
    description: '定义下边框样式',
    values: borderStyle
  },
  'border-bottom-width': {
    description: '定义下边框宽度',
    values: borderWidth
  },
  'border-bottom': {
    description: '定义左边框，是border-bottom-width, border-bottom-style, border-bottom-color的缩写',
    values: [
      {
        name: 'medium none currentColor',
        id: 'medium-none-currentColor',
      },
      {
        name: '2px',
        id: 'px2',
        description: '只有一个值的情况下，相当于只设置了border-bottom-width，因为默认border-bottom-style是none，所以看起来没有效果'
      },
      {
        name: '2px solid',
        id: 'px2-solid',
        description: '只有两个值的情况下，相当于设置了border-bottom-width和border-bottom-style，而border-bottom-color则使用默认值currentColor'
      },
      {
        name: '2px solid red',
        id: 'px2-solid-red',
        description: '当有三个值得情况下，相当于以此设置了border-bottom-width、border-bottom-style和border-bottom-color'
      }
    ]
  },
  'border-collapse': {

  },
  'border-color': {
    description: '定义边框颜色',
    values: borderColor.concat([
      {
        name: 'red blue',
        id: 'red-blue',
        description: '如果有两个值得话，第一个是上下边框，第二是左右边框'
      },
      {
        name: 'red blue green',
        id: 'red-blue-green',
        description: '如果有三个值得话，第一个是上边框，第二个是下边框，第三个是左右边框'
      },
      {
        name: 'red blue green yellow',
        id: 'red-blue-green-yellow',
        description: '如果有四个值得话，分别为上、右、下、左'
      }
    ])
  },
  'border-left-color': {
    description: '定义左边框颜色。',
    values: borderColor
  },
  'border-left-style': {
    description: '定义左边框样式',
    values: borderStyle
  },
  'border-left-width': {
    description: '定义左边框宽度',
    values: borderWidth
  },
  'border-left': {
    description: '定义左边框，是border-left-width, border-left-style, border-left-color的缩写',
    values: [
      {
        name: 'medium none currentColor',
        id: 'medium-none-currentColor',
      },
      {
        name: '2px',
        id: 'px2',
        description: '只有一个值的情况下，相当于只设置了border-left-width，因为默认border-left-style是none，所以看起来没有效果'
      },
      {
        name: '2px solid',
        id: 'px2-solid',
        description: '只有两个值的情况下，相当于设置了border-left-width和border-left-style，而border-left-color则使用默认值currentColor'
      },
      {
        name: '2px solid red',
        id: 'px2-solid-red',
        description: '当有三个值得情况下，相当于以此设置了border-left-width、border-left-style和border-left-color'
      }
    ]
  },
  'border-radius': {
    description: '定义边框的圆角, 是border-top-left-radius, border-top-right-radius, border-bottom-right-radius ，border-bottom-left-radius的简写',
    values: [
      {
        name: '0',
        id: 'px-0',
        description: '不设置圆角'
      },
      {
        name: '10px',
        id: 'px-10',
        description: '使用像素设置圆角，也可以使用其他length单位'
      },
      {
        name: '10%',
        id: 'per-10',
        description: '使用百分比设置圆角'
      },
      {
        name: '50%',
        id: 'per-50',
        description: '如果将元素的width和height都设置为相同的数值，在将border-radius设置为50%，可以容易的做成一个圆形的的边框效果'
      },
      {
        name: '10px 20px',
        id: 'px-10-20',
        description: `如果设置两个值得情况下，第一个值则为border-top-left-radius(左上角)和border-bottom-right-radius(右下角)，
        第二个值是border-top-right-radius(右上角)和border-bottom-left-radius(左下角)

        `
      },
    ]
  },
  'border-right-color': {
    description: '定义右边框颜色。',
    values: borderColor
  },
  'border-right-style': {
    description: '定义右边框样式',
    values: borderStyle
  },
  'border-right-width': {
    description: '定义下边框宽度',
    values: borderWidth
  },
  'border-right': {
    description: '定义右边框，是border-right-width, border-right-style, border-right-color的缩写',
    values: [
      {
        name: 'medium none currentColor',
        id: 'medium-none-currentColor',
      },
      {
        name: '2px',
        id: 'px2',
        description: '只有一个值的情况下，相当于只设置了border-right-width，因为默认border-right-style是none，所以看起来没有效果'
      },
      {
        name: '2px solid',
        id: 'px2-solid',
        description: '只有两个值的情况下，相当于设置了border-right-width和border-right-style，而border-right-color则使用默认值currentColor'
      },
      {
        name: '2px solid red',
        id: 'px2-solid-red',
        description: '当有三个值得情况下，相当于以此设置了border-right-width、border-right-style和border-right-color'
      }
    ]
  },
  'border-style': {
    description: '定义边框样式',
    values: borderStyle.concat([
      {
        name: 'solid dotted',
        id: 'solid-dotted',
        description: '如果有两个值得话，第一个是上下边框，第二是左右边框'
      },
      {
        name: 'solid dotted double',
        id: 'solid-dotted-double',
        description: '如果有三个值得话，第一个是上边框，第二个是下边框，第三个是左右边框'
      },
      {
        name: 'solid dotted double inset',
        id: 'solid-dotted-double-inset',
        description: '如果有四个值得话，分别为上、右、下、左'
      }
    ])
  },
  'border-top-color': {
    description: '定义上边框颜色。',
    values: borderColor
  },
  'border-top-left-radius': {
    description: '设置元素左上方圆角边框',
    values: [
      {
        name: '0',
        id: 'px-0',
        description: '不设置圆角'
      },
      {
        name: '10px',
        id: 'px-10',
        description: '使用像素设置圆角，也可以使用其他length单位'
      },
      {
        name: '10%',
        id: 'per-10',
        description: '使用百分比设置圆角'
      }
    ]
  },
  'border-top-right-radius': {
    description: '设置元素右上方圆角边框',
    values: [
      {
        name: '0',
        id: 'px-0',
        description: '不设置圆角'
      },
      {
        name: '10px',
        id: 'px-10',
        description: '使用像素设置圆角，也可以使用其他length单位'
      },
      {
        name: '10%',
        id: 'per-10',
        description: '使用百分比设置圆角'
      }
    ]
  },
  'border-top-style': {
    description: '定义上边框样式',
    values: borderStyle

  },
  'border-top-width': {
    description: '定义上边框宽度',
    values: borderWidth
  },
  'border-top': {
    description: '定义上边框，是border-top-width, border-top-style, border-top-color的缩写',
    values: [
      {
        name: 'medium none currentColor',
        id: 'medium-none-currentColor',
      },
      {
        name: '2px',
        id: 'px2',
        description: '只有一个值的情况下，相当于只设置了border-top-width，因为默认border-top-style是none，所以看起来没有效果'
      },
      {
        name: '2px solid',
        id: 'px2-solid',
        description: '只有两个值的情况下，相当于设置了border-top-width和border-top-style，而border-top-color则使用默认值currentColor'
      },
      {
        name: '2px solid red',
        id: 'px2-solid-red',
        description: '当有三个值得情况下，相当于以此设置了border-top-width、border-top-style和border-top-color'
      }
    ]
  },
  'border-width': {
    description: '定义边框宽度',
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
  'border': {
    description: '定义边框，是border-width, border-style, border-color的缩写',
    values: [
      {
        name: 'medium none currentColor',
        id: 'medium-none-currentColor',
      },
      {
        name: '2px',
        id: 'px2',
        description: '只有一个值的情况下，相当于只设置了border-width，因为默认border-style是none，所以看起来没有效果'
      },
      {
        name: '2px solid',
        id: 'px2-solid',
        description: '只有两个值的情况下，相当于设置了border-width和border-style，而border-color则使用默认值currentColor'
      },
      {
        name: '2px solid red',
        id: 'px2-solid-red',
        description: '当有三个值得情况下，相当于以此设置了border-width、border-style和border-color'
      }
    ]
  },
  'bottom': {
    description: `设置定位元素距离底部的位置，当position为static时不会生效
    <ul>
    <li>相对定位(relative)：相对于当前与其自己位置的偏移距离</li>
    <li>绝对定位(absolute/fixed)：当前元素底部边缘与父元素底部边缘的偏移距离</li>
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
        description: '距离底部20像素'
      },
      {
        name: '0px',
        id: 'px-0',
        description: '距离底部0像素'
      },
      {
        name: '20%',
        id: 'per-20',
        description: '距离底部20%'
      }
    ]
  },
  'box-shadow': {

  },
  'box-sizing': {

  }
};
