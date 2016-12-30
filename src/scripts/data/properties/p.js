export default {
  'padding-bottom': {
    description: '设置元素的底部内边距',
    values: [
      {
        name: '0',
        description: '元素底部没有外边距'
      },
      {
        name: '20px',
        id: 'a',
        description: '使用长度设置外边距，比如px，em，rem和百分比'
      }
    ]
  },
  'padding-left': {
    description: '设置元素的左面内边距',
    values: [
      {
        name: '0',
        id: 'default',
        description: '元素左面没有外边距'
      },
      {
        name: '20px',
        id: 'a',
        description: '使用长度设置外边距，比如px，em，rem和百分比'
      }
    ]
  },
  'padding-right': {
    description: '设置元素的右面内边距',
    values: [
      {
        name: '0',
        id: 'default',
        description: '元素右面没有外边距'
      },
      {
        name: '20px',
        id: 'a',
        description: '使用长度设置外边距，比如px，em，rem和百分比'
      }
    ]
  },
  'padding-top': {
    description: '设置元素的顶部内边距',
    values: [
      {
        name: '0',
        description: '元素顶部没有外边距'
      },
      {
        name: '20px',
        id: 'a',
        description: '使用长度设置外边距，比如px，em，rem和百分比'
      }
    ]
  },
  'padding': {
    description: '设置元素的内边距，是padding-top padding-right padding-bottom 和 padding-left的缩写',
    values: [
      {
        name: '0',
        description: '元素没有内边距'
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
          <li>第一个值：padding-top,padding-bottom</li>
          <li>第二个值：padding-top,padding-bottom</li>
        </ul>
        `
      },
      {
        name: '10px 20px 30px',
        id: 'c',
        description: `当设置3个值得时候，分别为上，左/右，下
        <ul>
          <li>第一个值：padding-top</li>
          <li>第二个值：padding-left,padding-right</li>
          <li>第三个值：padding-bottom</li>
        </ul>
        `
      },
      {
        name: '10px 20px 30px 40px',
        id: 'd',
        description: `当设置4个值得时候，分别为上，右，下，左
        <ul>
          <li>第一个值：padding-top</li>
          <li>第二个值：padding-right</li>
          <li>第三个值：padding-bottom</li>
          <li>第四个值：padding-left</li>
        </ul>
        `
      }
    ]
  },
  'pointer-events': {

  },
  'position': {

  }
};
