export default {
  'z-index': {
    description: '对于一个已经定位的元素（即position属性值是非static的元素），z-index决定哪一个元素覆盖在其余元素的上面。z-index较大的元素覆盖较小的元素',
    values: [
      {
        name: 'auto',
        description: `堆叠顺序由html代码决定，比如:<pre>
&lt;div>A&lt;/div>
&lt;div>B&lt;/div>
&lt;div>C&lt;/div>
        </pre>他们的层叠关系是A < B < C，即A在最下面，C在最上面`
      },
      {
        name: '1',
        id: 'a',
        description: 'A的z-index为1，其他为默认，所以A在最上面'
      },
      {
        name: '11',
        id: 'b',
        description: 'A的z-index为1，B的z-index为2，C为默认，所以B在最上面，A在B的下面C的上面，C在最下面'
      }
    ]
  }
};
