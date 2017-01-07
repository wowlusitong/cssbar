export default {
  'margin-bottom': {
    description: '设置元素的底部外边距',
    values: [
      {
        name: '0',
        description: '元素底部没有外边距'
      },
      {
        name: '10px',
        id: 'a',
        description: '使用长度设置外边距，比如px，em，rem和百分比'
      },
      {
        name: '-10px',
        id: 'b',
        description: '也可以使用负数'
      }
    ]
  },
  'margin-left': {
    description: '设置元素的左面外边距',
    values: [
      {
        name: '0',
        description: '元素左面没有外边距'
      },
      {
        name: '10px',
        id: 'a',
        description: '使用长度设置外边距，比如px，em，rem和百分比'
      },
      {
        name: '-10px',
        id: 'b',
        description: '也可以使用负数'
      },
      {
        name: 'auto',
        id: 'auto',
        description: '自动计算外边距，如果margin-left与margin-right都设置为auto，并且是固定宽度的，那么当前元素会居中显示'
      }
    ]
  },
  'margin-right': {
    description: '设置元素的右面外边距',
    values: [
      {
        name: '0',
        description: '元素右面没有外边距'
      },
      {
        name: '10px',
        id: 'a',
        description: '使用长度设置外边距，比如px，em，rem和百分比'
      },
      {
        name: '-10px',
        id: 'b',
        description: '也可以使用负数'
      },
      {
        name: 'auto',
        id: 'auto',
        description: '自动计算外边距，如果margin-left与margin-right都设置为auto，并且是固定宽度的，那么当前元素会居中显示'
      }
    ]
  },
  'margin-top': {
    description: '设置元素的顶部外边距',
    values: [
      {
        name: '0',
        description: '元素顶部没有外边距'
      },
      {
        name: '10px',
        id: 'a',
        description: '使用长度设置外边距，比如px，em，rem和百分比'
      },
      {
        name: '-10px',
        id: 'b',
        description: '也可以使用负数'
      }
    ]
  },
  'margin': {
    description: '设置元素的外边距，是margin-top margin-right margin-bottom 和 margin-left的缩写',
    values: [
      {
        name: '0',
        description: '元素没有外边距'
      },
      {
        name: '10px',
        id: 'a',
        description: '当设置1个值得时候，会对四面都生效，使用长度设置外边距，比如px，em，rem和百分比'
      },
      {
        name: '10px 20px',
        id: 'b',
        description: `当设置2个值得时候，分别为上/下，左/右
        <ul>
          <li>第一个值：margin-top,margin-bottom</li>
          <li>第二个值：margin-top,margin-bottom</li>
        </ul>
        `
      },
      {
        name: '10px 20px 30px',
        id: 'c',
        description: `当设置3个值得时候，分别为上，左/右，下
        <ul>
          <li>第一个值：margin-top</li>
          <li>第二个值：margin-left,margin-right</li>
          <li>第三个值：margin-bottom</li>
        </ul>
        `
      },
      {
        name: '10px 20px 30px 40px',
        id: 'd',
        description: `当设置4个值得时候，分别为上，右，下，左
        <ul>
          <li>第一个值：margin-top</li>
          <li>第二个值：margin-right</li>
          <li>第三个值：margin-bottom</li>
          <li>第四个值：margin-left</li>
        </ul>
        `
      },
      {
        name: '0px auto',
        id: 'e',
        description: 'margin-left与margin-right都设置为auto，并且是固定宽度的，那么当前元素会居中显示'
      }
    ]
  },
  'max-height': {
    description: '设置元素的最大高度',
    values: [
      {
        name: '0',
        description: '没有最小宽度'
      },
      {
        name: '50px',
        id: 'a',
        description: '当设置最大高度后，元素的高度可以比指定值小，但是不能比它更高'
      }
    ]
  },
  'max-width': {
    description: '设置元素的最大宽度',
    values: [
      {
        name: '0',
        description: '没有最大宽度'
      },
      {
        name: '300px',
        id: 'a',
        description: '当设置最大宽度后，元素的宽度可以比指定值小，但是不能比它更宽'
      }
    ]
  },
  'min-height': {
    description: '设置元素的最小高度',
    values: [
      {
        name: '0',
        description: '没有最小高度'
      },
      {
        name: '150px',
        id: 'a',
        description: '当设置最小高度后，元素的高度可以比指定值高，但是不能比它小'
      }
    ]
  },
  'min-width': {
    description: '设置元素的最小宽度',
    values: [
      {
        name: '0',
        description: '没有最小宽度'
      },
      {
        name: '300px',
        id: 'a',
        description: '当设置最小宽度后，元素的宽度可以比指定值宽，但是不能比它小'
      }
    ]
  },
  // 'mix-blend-mode': {
  //
  // }
};
