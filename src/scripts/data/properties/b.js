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
    description: '当滚动窗口的时候，定义背景图像的表现方式，比如是否跟随滚动',
    values: [
      {
        name: 'scroll',
        description: '背景图像将随页面滚动'
      },
      {
        name: 'fixed',
        description: '背景图像不会随页面滚动，将会现对于视图固定'
      }
    ]
  },
  'background-clip': {
    description: '定义元素背景的显示区域，如是否可以延伸到边框下面',
    values: [
      {
        name: 'border-box',
        description: '背景延伸到边框下'
      },
      {
        name: 'padding-box',
        description: '背景延伸到padding下，边框下面没有背景'
      },
      {
        name: 'content-box',
        description: '背景只在内容下，边框和padding下没有背景'
      }
    ]
  },
  'background-color': {
    description: '设置元素的背景颜色',
    values: [
      {
        name: 'transparent',
        description: '默认背景颜色是透明的，也可以说是没有背景颜色'
      },
      {
        name: 'red',
        description: '使用颜色名称设置背景颜色'
      },
      {
        name: '#38d9a9',
        description: '使用十六进制设置背景颜色',
        id: 'a'
      },
      {
        name: 'rgb(255, 212, 59)',
        description: '使用rgb()设置背景颜色',
        id: 'b'
      },
      {
        name: 'rgb(255, 212, 59, 0.5)',
        description: '使用rgba()设置背景颜色',
        id: 'c'
      },
      {
        name: 'hsl(255, 93%, 72%)',
        description: '使用hsl()设置背景颜色',
        id: 'd'
      },
      {
        name: 'hsla(255, 93%, 72%, 0.7)',
        description: '使用hsla()设置背景颜色',
        id: 'e'
      }
    ]

  },
  'background-image': {
    description: '使用图片设置元素的背景',
    values: [
      {
        name: 'none',
        description: '元素没有背景图片'
      },
      {
        name: 'url(\'/images/bg.jpg\')',
        id: 'a'
      },
      {
        name: 'linear-gradient(red, blue)',
        id: 'b',
        description: '背景图片可以使用渐变色，包括线性渐变和经向渐变'
      }
    ]
  },
  'background-origin': {
    description: '定义背景图片的起始位置, background-position会以此为参照点',
    values: [
      {
        name: 'padding-box',
        description: '背景图片的起始位置在padding下，因为是在边框外，所以边框里面不会有背景'
      },
      {
        name: 'border-box',
        description: '背景图片的起始位置在边框下，可以理解为背景图片和边框是重合的（边框在背景上面）'
      },
      {
        name: 'content-box',
        description: '背景图片的起始位置在内容下'
      }
    ]
  },
  'background-position': {
    description: '定义背景图片的位置',
    values: [
      {
        name: '0% 0%',
        id: 'default',
        description: '使用百分比作为值，第一个值是横坐标，第二个值是纵坐标'
      },
      {
        name: '20px 20px',
        id: 'a',
        description: '使用像素作为值，第一个值是横坐标，第二个值是纵坐标'
      },
      {
        name: 'center bootom',
        id: 'b',
        description: '使用position关键字作为值，如：center, top, bottom, left 和 right'
      },
    ]
  },
  'background-repeat': {
    description: '定义背景是否重复平铺显示，以及重复的方式',
    values: [
      {
        name: 'repeat',
        description: '背景会重复显示，如果最后一个大小不合适的话会裁剪'
      },
      {
        name: 'no-repeat',
        description: '背景不会重复显示，只会显示一个'
      },
      {
        name: 'repeat-x',
        description: '背景会横向重复显示'
      },
      {
        name: 'repeat-y',
        description: '背景会纵向重复显示'
      },
      {
        name: 'space',
        description: '背景会重复显示，但是不会裁剪，如果剩余空间不够显示完整图像的话就不会显示了'
      },
      {
        name: 'round',
        description: '背景会重复显示，但是不会裁剪，如果剩余空间不够显示完整图像则会改变图像的大小进行填充'
      }
    ]
  },
  'background-size': {
    description: '定义背景图片的尺寸',
    values: [
      {
        name: 'auto auto',
        description: '背景图像将以原始尺寸显示'
      },
      {
        name: '150px 80px',
        id: 'a',
        description: '使用像素作为值，第一值是宽度，第二个值是高度'
      },
      {
        name: '100% 50%',
        id: 'b',
        description: '使用百分比作为值，第一值是宽度，第二个值是高度'
      },
      {
        name: 'contain',
        description: '图像将会等比例缩放以填充背景区域，因为背景图像会等比缩放完整显示，所以如果背景区域与图片比例不一致的话，会有空白区域'
      },
      {
        name : 'cover',
        description: '将背景图像缩放以便完全填充覆盖背景区域，有可能会有部分图片会被裁剪'
      }
    ]
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
