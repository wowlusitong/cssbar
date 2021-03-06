export default {
  'resize': {
    description: '设置元素是否能被用户进行手动缩放，可以将鼠标放到元素右下角进行操作',
    values: [
      {
        name: 'none',
        description: '不可以调整大小，也不会在右下角显示图标'
      },
      {
        name: 'horizontal',
        description: '用户可以手动调整元素的宽度，意味着用户只能横向进行鼠标拖动调整，右下角会显示可拖拽图标'
      },
      {
        name: 'vertical',
        description: '用户可以手动调整元素的高度，意味着用户只能纵向进行鼠标拖动调整，右下角会显示可拖拽图标'
      },
      {
        name: 'both',
        description: '用户可以手动调整元素的宽度与高度，意味着用户可以随意进行鼠标拖动调整，右下角会显示可拖拽图标'
      }
    ]
  },
  'right': {
    description: `设置定位元素距离右边的位置，当position为static时不会生效
    <ul>
    <li>相对定位(relative)：相对于当前与其自己位置的偏移距离</li>
    <li>绝对定位(absolute/fixed)：当前元素右边与父元素右边的偏移距离</li>
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
        description: '距离右边20像素'
      },
      {
        name: '0px',
        id: 'px-0',
        description: '距离右边0像素'
      },
      {
        name: '5%',
        id: 'per-5',
        description: '距离右边5%'
      }
    ]
  }
};
