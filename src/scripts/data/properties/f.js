export default {
  'flex': {
    description: 'flex是flex-grow,flex-shrink和flex-basis的缩写',
    values: [
      {
        name: '0 1 auto'
      },
      {
        name: '1',
        id: 'a'
      }
    ]
  },
  'flex-basis': {
    description: '定义flexbox弹性容器内元素的初始大小',
    values: [
      {
        name: 'auto',
        description: '元素将会根据内容自动分配大小'
      },
      {
        name: '150px',
        description: '定义固定的尺寸，可以使用px, em, 或者rem',
        id: 'a'
      },
      {
        name: '30px',
        description: '定义固定的尺寸，可以使用px, em, 或者rem',
        id: 'b'
      }

    ]
  },
  'flex-direction': {
    description: '定义flexbox弹性容器内部元素的排列方向',
    values: [
      {
        name: 'row',
        description: '默认方向是从左到右排列，内容的方向与文本方向是一样的'
      },
      {
        name: 'row-reverse',
        description: '默认方向是从右到左排列，表现方式与row是相同的，但是方向是相反'
      },
      {
        name: 'column',
        description: '默认方向是从上到下排列'
      },
      {
        name: 'column-reverse',
        description: '默认方向是从下到上排列'
      }
    ]
  },
  'flex-flow': {
    description: 'flex-flow是flex-direction和flex-wrap的缩写',
    values: [
      {
        name: 'row nowrap',
        description: '横向排列并且不换行',
      },
      {
        name: 'row-reverse wrap',
        description: '横坐标以反方向排列并且超出部分换行显示',
        id: 'a'
      },
      {
        name: 'column nowrap',
        description: '纵向排列并且不换行',
        id: 'b'
      },
      {
        name: 'column wrap',
        description: '纵向排列并且超出部分换行显示',
        id: 'c'
      }
    ]
  },
  'flex-grow': {
    description: '定义flexbox弹性容器内部元素的放大比例,也可以理解为该元素能分配到剩余空间的比例',
    values: [
      {
        name: '0',
        id: 'default',
        description: '元素不会分配剩余的空间，它只会使用它自己需要的空间'
      },
      {
        name: '1',
        id: 'a',
        description: '当前例子中，只有一个元素设置了flex-grow，其他的元素没有设置flex-grow，那么设置了该属性的元素则会分配剩余的所有空间'
      },
      {
        name: '2',
        id: 'b',
        description: '因为flex-grow属性是相对的，它的放大比例会依赖其他兄弟元素设置的值'
      }
    ]
  },
  'flex-shrink': {
    description: '定义flexbox弹性容器内部元素的收缩比例',
    values: [
      {
        name: '1',
        id: 'default',
        description: '如果容器内没有足够的空间，设置了该值的元素将会缩小'
      },
      {
        name: '0',
        id: 'a',
        description: '设置了该值得元素将不会收缩'
      }
    ]
  },
  'flex-wrap': {
    description: '指定flex元素单行显示还是多行显示',
    values: [
      {
        name: 'nowrap',
        description: 'flex的元素将一行上显示，即使元素溢出，也不会换行。'
      },
      {
        name: 'wrap',
        description: 'flex的元素将会换行显示。'
      },
      {
        name: 'wrap-reverse',
        description: 'flex的元素会换行，但是反向排列，最后一行在上面，依次排列'
      }
    ]
  },
  'float': {

  },
  'font-family': {
    description: '定义文本内容的字体，如果设置多个值，每个属性值中间以逗号(,)进行分隔。当设置多个字体的时候，浏览器会以从左到右的顺序选择第一个字体，如果本机没有安装该字体则会继续选择下一个，以此类推',
    values: [
      {
        name: '""',
        description: '如果不指定font-family的话，会使用默认字体',
        id: 'default'
      },
      {
        name: '"Microsoft YaHei",STKaiti',
        id: 'a'
      },
      {
        name: 'consolas, monospace',
        id: 'b'
      }
    ]
  },
  'font-size': {
    description: '定义文本内容的字体大小',
    values: [
      {
        name: 'medium',
        description: '用户的默认字体大小'
      },
      {
        name: '20px',
        description: '使用像素单位',
        id: 'a'
      }
    ]
  },
  'font-style': {

  },
  'font-variant': {

  },
  'font-weight': {

  },
  'font': {

  }
};
