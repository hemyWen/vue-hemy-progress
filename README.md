# hemy-progress
使用svg制作进度条,线条行,环形,扇形,矩形,椭圆的常规图形进度条,也可以制作其他复杂图形的进度条,三角形,多边形,自定义图形等
# 实例
### 常规图形
![常规例子](./src/assets/1.jpg)
# 使用
<table>
  <tr>
    <th>表格</th>
    <th>值类型</th>
    <th>是否必填</th>
    <th>描述</th>
    <th>默认值</th>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>否</td>
    <td>进度条类型,line=线条,circle=环形</td>
    <td>line</td>
  </tr>
  <tr>
    <td>percentage</td>
    <td>Number</td>
    <td>是</td>
    <td>进度条百分比</td>
    <td>100</td>
  </tr>
    <tr>
    <td>fillColor</td>
    <td>String</td>
    <td>否</td>
    <td>闭合图形填充颜色,type!==line生效</td>
    <td>none</td>
  </tr>
   <tr>
    <td>strokeColor</td>
    <td>String</td>
    <td>否</td>
    <td>进度条颜色</td>
    <td>#409eff</td>
  </tr>
   <tr>
    <td>traiColor</td>
    <td>String</td>
    <td>否</td>
    <td>进度条背景颜色</td>
    <td>#eee</td>
  </tr>
   <tr>
    <td>textStyle</td>
    <td>Object</td>
    <td>否</td>
    <td>文字样式,例:{color:'red',fontSize:'25px'}</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>showText</td>
    <td>Boolean</td>
    <td>否</td>
    <td>是否显示文字</td>
    <td>true</td>
  </tr>
   <tr>
    <td>format</td>
    <td>function(percentage)</td>
    <td>否</td>
    <td>自定义进度条文字内容</td>
    <td></td>
  </tr>
  <tr>
    <td>width</td>
    <td>Number</td>
    <td>否</td>
    <td>画布宽,当type=circle为画布大小,type=rect时为矩形宽</td>
    <td>200</td>
  </tr>
  <tr>
    <td>height</td>
    <td>Number</td>
    <td>否</td>
    <td>画布高,type=rect时为矩形高</td>
    <td>200</td>
  </tr>
  <tr>
    <td>strokeWidth</td>
    <td>Number</td>
    <td>否</td>
    <td>环形宽度,type=circle时生效</td>
    <td>10</td>
  </tr>
  <tr>
    <td>strokeLinecap</td>
    <td>String</td>
    <td>否</td>
    <td>环形条线帽,butt:正常结尾,round:圆润,square:两端为方形</td>
    <td>round</td>
  </tr>
   <tr>
    <td>strokeLinejoin</td>
    <td>String</td>
    <td>否</td>
    <td>线段连接处的样式,miter:正常连接,round:圆润,bevel:切除连接处的尖尖部分</td>
    <td>miter</td>
  </tr>
  <tr>
    <td>radius</td>
    <td>Number</td>
    <td>否</td>
    <td>环形半径</td>
    <td>50</td>
  </tr>
  <tr>
    <td>isFan</td>
    <td>Boolean</td>
    <td>否</td>
    <td>是否为扇形,type=circle时生效</td>
    <td>false</td>
  </tr>
  <tr>
    <td>borderRadius</td>
    <td>Number</td>
    <td>否</td>
    <td>type=rect的圆角半径</td>
    <td>0</td>
  </tr>
  <tr>
    <td>rx</td>
    <td>Number</td>
    <td>否</td>
    <td>type=ellispe椭圆时的长半轴</td>
    <td>100</td>
  </tr>
  <tr>
    <td>ry</td>
    <td>Number</td>
    <td>否</td>
    <td>type=ellispe椭圆时的短半轴</td>
    <td>50</td>
  </tr>
</table>