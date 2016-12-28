export default {
  height: {
    description: '定义元素的高度',
    values: [
      {
        name: 'auto',
        description: '浏览器将会为指定的元素计算并选择一个高度。'
      },
      {
        name: '150px',
        id: 'px-150',
        description: '使用[length]指定具体的高度。'
      },
      {
        name: '50%',
        id: 'per-50',
        description: '使用百分比作为高度。'
      }
    ]
  }
};
