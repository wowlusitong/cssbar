export default {
  'align-content': {
    description: '定义flex容器内有额外空间的情况下，如何分配每行的位置，<strong>只在多行的时候有效果</strong>。',
    values: [
      {
        name: 'stretch',
        description: '拉伸所有行来填满空间。空间为平均分配给每一行'
      },
      {
        name: 'flex-start',
        description: '从<strong>起点</strong>开始，接下来的每一行紧跟着前一行'
      },
      {
        name: 'flex-end',
        description: '从<strong>终点</strong>开始，接下来的每一行紧跟着前一行'
      },
      {
        name: 'center',
        description: '所有行朝向容器的中心填充。每行互相紧挨，相对于容器居中对齐。'
      },
      {
        name: 'space-between',
        description: '所有行在容器中平均分布。相邻两行间距相等，第一行和最后一行分别和起点和终点对齐，'
      },
      {
        name: 'space-around',
        description: `所有行在容器中平均分布，相邻两行间距相等。第一行和最后一行距离起点和终点的距离为相邻两行的一半。
        比如相邻两行间距是40px，那么第一行距离起点为20px，最后一行具体终点也为20px。
        `
      }
    ]
  },
  'align-items': {
    description: '定义flex元素的对齐方式。',
    values: [
      {
        name: 'stretch',
        description: '元素被被拉伸到与容器相同的高度或宽度。'
      },
      {
        name: 'flex-start',
        description: '元素向起点对齐。'
      },
      {
        name: 'flex-end',
        description: '元素向终点对齐。'
      },
      {
        name: 'center',
        description: '元素居中对其。'
      },
      {
        name: 'baseline',
        description: '所有元素向基线对齐。'
      }
    ]
  },
  'align-self': {

  },
  'animation-delay': {

  },
  'animation-direction': {

  },
  'animation-duration': {

  },
  'animation-fill-mode': {

  },
  'animation-iteration-count': {

  },
  'animation-name': {

  },
  'animation-play-state': {

  },
  'animation-timing-function': {

  },
  'animation': {

  },
  'appearance': {

  }
};
