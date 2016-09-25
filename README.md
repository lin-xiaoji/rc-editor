# rc-editor
---

React Editor Component,based on draft-js





## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 10+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |

## Screenshots

<img src="http://lin-xiaoji.github.io/rc-editor/Screenshots.png" />


## Development

```
npm install
npm start
```

## Example



online example: http://lin-xiaoji.github.io/rc-editor/



## install


npm install rc-editor


## Usage

```js
import React from 'react'
import { render } from 'react-dom'
import RcEditor from 'rc-editor'
render(<RcEditor />
    ,container);


```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>prefixCls</td>
          <td>String</td>
          <td>rc-editor</td>
          <td>css class prefix</td>
        </tr>
        <tr>
          <td>lang</td>
          <td>String</td>
          <td>zh-CN</td>
          <td>language,en zh-CN</td>
        </tr>
        <tr>
          <td>lang</td>
          <td>String</td>
          <td>zh-CN</td>
          <td>language,en zh-CN</td>
        </tr>
        <tr>
          <td>width</td>
          <td>String</td>
          <td>100%</td>
          <td>editor width</td>
        </tr>
        <tr>
          <td>height</td>
          <td>String</td>
          <td>280px</td>
          <td>editor height</td>
        </tr>
        <tr>
          <td>defaultValue</td>
          <td>String</td>
          <td></td>
          <td>defaultValue,support HTML</td>
        </tr>
        <tr>
          <td>plugins</td>
          <td>Array</td>
          <td>[]</td>
          <td>customize plugin</td>
        </tr>
        <tr>
          <td>toolbars</td>
          <td>Array</td>
          <td>[]</td>
          <td>shwo toolbar items</td>
        </tr>
    </tbody>
</table>


## Test Case

```
npm test
```



## License

rc-editor-core is released under the MIT license.
