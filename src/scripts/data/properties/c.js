export default {
  'clear': {

  },
  'color': {
    description: '定义文字颜色',
    values: [
      {
        name: '[user agent stylesheet]',
        description: '浏览器默认样式',
        id: 'user-agent',
      },
      {
        name: 'red',
        description: '一个颜色值，包括颜色名称、十六进制、rgb、rgba、hsl、hsla'
      }
    ]
  },
  // 'column-count': {
  //
  // },
  // 'column-gap': {
  //
  // },
  // 'column-width': {
  //
  // },
  'content': {
    description: '定义伪元素:before和:after的内容',
    values: [
      {
        name: 'normal',
        description: ':before 和 :after 伪类元素中会被视为 none'
      },
      {
        name: '\'cssbar\'',
        id: 'a',
        description: '文本内容'
      },
      {
        name: 'url(\'/images/bg.jpg\')',
        id: 'b',
        description: '指定一个外部资源（比如图片）。如果该资源或图片不能显示，它就会被忽略或显示一些占位（比如无图片标志）。'
      },
      {
        name: 'attr(name)',
        id: 'c',
        description:`
        将元素的属性以字符串形式返回。如果该元素没有改属性，则返回一个空字符串。
        比如下面的html内容，attr(name)就可以获取到cssBar
        <pre>
&lt;div name="cssBar"&gt;
  Hello World!
&lt;/div&gt;
        </pre>
        `
      }
    ]
  },
  'cursor': {
    description: '鼠标指针悬浮在元素上时的外观',
    values: [
      {
        name: 'auto',
        description: ''
      },
      {
        name: 'default',
        description: ''
      },
      {
        name: 'none',
        description: ''
      },
      {
        name: 'context-menu',
        description: ''
      },
      {
        name: 'help',
        description: ''
      },
      {
        name: 'pointer',
        description: ''
      },
      {
        name: 'progress',
        description: ''
      },
      {
        name: 'wait',
        description: ''
      },
      {
        name: 'cell',
        description: ''
      },
      {
        name: 'crosshair',
        description: ''
      },
      {
        name: 'text',
        description: ''
      },
      {
        name: 'vertical-text',
        description: ''
      },
      {
        name: 'alias',
        description: ''
      },
      {
        name: 'copy',
        description: ''
      },
      {
        name: 'move',
        description: ''
      },
      {
        name: 'no-drop',
        description: ''
      },
      {
        name: 'not-allowed',
        description: ''
      },
      {
        name: 'all-scroll',
        description: ''
      },
      {
        name: 'col-resize',
        description: ''
      },
      {
        name: 'row-resize',
        description: ''
      },
      {
        name: 'n-resize',
        description: ''
      },
      {
        name: 'e-resize',
        description: ''
      },
      {
        name: 's-resize',
        description: ''
      },
      {
        name: 'w-resize',
        description: ''
      },
      {
        name: 'ne-resize',
        description: ''
      },
      {
        name: 'nw-resize',
        description: ''
      },
      {
        name: 'se-resize',
        description: ''
      },
      {
        name: 'sw-resize',
        description: ''
      },
      {
        name: 'ew-resize',
        description: ''
      },
      {
        name: 'ns-resize',
        description: ''
      },
      {
        name: 'nesw-resize',
        description: ''
      },
      {
        name: 'nwse-resize',
        description: ''
      },
      {
        name: 'zoom-in',
        description: ''
      },
      {
        name: 'zoom-out',
        description: ''
      }
    ]
  }
};
