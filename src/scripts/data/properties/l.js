export default {
  'left': {
    description: `设置定位元素距离左边的位置，当position为static时不会生效
    <ul>
    <li>相对定位(relative)：相对于当前与其自己位置的偏移距离</li>
    <li>绝对定位(absolute/fixed)：当前元素左边与父元素左边的偏移距离</li>
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
        description: '距离左边20像素'
      },
      {
        name: '0px',
        id: 'px-0',
        description: '距离左边0像素'
      },
      {
        name: '50%',
        id: 'per-50',
        description: '距离左边50%'
      }
    ]
  },
  'letter-spacing': {
    description: '定义字母的间距。对于中文来说每个字就是一个字母',
    values: [
      {
        name: 'normal',
        description: '正常的间距，由当前字体或浏览器定义。'
      }, {
        name: '10px',
        description: '通过指定具体的&lt;length&gt;来增加文本内容的字母间距。',
        id: 'a'
      }
    ]
  },
  'line-height': {
    description: '设置文本的行高',
    values: [
      {
        name: 'normal',
        description: '取决于用户代理。桌面浏览器（包括火狐浏览器）使用默认值，约为1.2，这取决于元素的 font-family'
      },
      {
        name: '1.5',
        id: 'a',
        description: '如果值为没有单位的数字，行高则是该数字乘以当前的字体大小'
      },
      {
        name: '20px',
        id: 'b',
        description: '使用长度设置行高，比如px，em，rem和百分比'
      }
    ]
  },
  'list-style-image': {

  },
  'list-style-position': {

  },
  'list-style-type': {

  },
  'list-style': {

  }
};
