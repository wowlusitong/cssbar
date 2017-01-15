export default {
  'white-space': {
    description: '定义如何处理元素中的空格，为达到演示效果，以下单词之间均为3个空格',
    values: [
      {
        name: 'normal',
        description: '连续的空白符会被合并，换行符会被当作空白符来处理。'
      },
      {
        name: 'pre',
        description: '连续的空白符会被保留。在遇到换行符或者&lt;br /&gt;元素时才会换行。'
      },
      {
        name: 'nowrap',
        description: '和 normal 一样，连续的空白符会被合并。但不会换行。'
      },
      {
        name: 'pre-wrap',
        description: '连续的空白符会被保留。在遇到换行符或者&lt;br /&gt;元素，或者需要填充盒子时才会换行。'
      },
      {
        name: 'pre-line',
        description: '连续的空白符会被合并。在遇到换行符或者<br>元素，或者需要填充盒子时会换行'
      }

    ]
  },
  'width': {
    description: '定义元素的宽度',
    values: [
      {
        name: 'auto',
        description: '浏览器将会为指定的元素计算并选择一个宽度。'
      },
      {
        name: '300px',
        description: '使用[length]指定具体的宽度。'
      },
      {
        name: '50%',
        description: '使用百分比作为宽度。'
      }
    ]
  },
  'word-break': {
    description: '指定字符到达末尾时的断行规则。',
    values: [
      {
        name: 'normal',
        description: '使用默认的断行规则。'
      },
      {
        name: 'break-all',
        description: '对于non-CJK (非中文/日文/韩文) 文本，可在任意字符间断行。'
      },
      {
        name: 'keep-all',
        description: 'CJK(中文/日文/韩文) 文本不断行。 Non-CJK(非中文/日文/韩文) 文本表现同 normal。'
      }
    ]
  },
  'word-spacing': {
    description: '定义<strong>词</strong>的间距。可以简单的理解为word是以空格来区分，比如\'你好\'是一个词，\'你 好\'则是两个词',
    values: [
      {
        name: 'normal',
        description: '正常的间距，由当前字体或浏览器定义。'
      },
      {
        name: '10px',
        description: '通过指定具体的&lt;length&gt;来增加文本内容的单词间距。',
        id: 'a'
      }
    ]
  }
};
