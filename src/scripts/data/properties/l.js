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
    description: '定义列表标记使用图片',
    values: [
      {
        name: 'none',
        description: '列表标记使用list-style-type的值'
      },
      {
        name: 'url(\'../images/mark.png\')',
        description: '列表标记使用自定义图片',
        id: 'a'
      }
    ]
  },
  'list-style-position': {
    description: '定义列表前面标记的位置',
    values: [
      {
        name: 'outside',
        description: '标记在列表元素外'
      },
      {
        name: 'inside',
        description: '标记在列表元素内'
      }
    ]
  },
  'list-style-type': {
    description: '定义列表的元素的外观，也就是每个列表项前面的标记样式',
    values: [
      {
        name: 'disc',
        description: '实心圆点'
      },
      {
        name: 'circle',
        description: '空心圆点'
      },
      {
        name: 'square',
        description: '实心方块'
      },
      {
        name: 'decimal',
        description: '从1开始的十进制阿拉伯数字'
      },
      {
        name: 'none',
        description: '不显示列表项目的标记'
      },
      {
        name: 'cjk-ideographic',
        description: '中日韩的数字表示'
      },
      {
        name: 'upper-latin',
        description: '大写字母'
      }
    ]
  },
  'list-style': {
    description: 'list-style属性是list-style-type，list-style-image和list-style-position的缩写',
    values: [
      {
        name: 'disc none outside',
        description: '使用默认值',
        id: 'default'
      },
      {
        name: 'circle',
        description: '设置一个值，可以是list-style-type，list-style-image和list-style-position中的任意一个',
        id: 'a'
      },
      {
        name: 'circle inside',
        description: '设置两个值，可以是list-style-type，list-style-image和list-style-position中的任意两个',
        id: 'b'
      }
    ]
  }
};
