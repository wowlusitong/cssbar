export default {
  'resize': {

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
