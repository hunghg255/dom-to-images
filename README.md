<p align="center">
<a href="https://www.npmjs.com/package/dom-to-images" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/material-symbols:add-a-photo-outline-sharp.svg?color=%23fdb4e2" alt="logo" width='100'/></a>
</p>

<p align="center">
  A library convert html to image
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/dom-to-images" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/csvs-parsers.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/dom-to-images" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/csvs-parsers.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=dom-to-images" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/dom-to-images" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/dom-to-images/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/dom-to-images/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/dom-to-images" alt="License" /></a>
</p>

## Usage

```ts
import { toPng, toJpeg, toBlob } from "dom-to-images"

const dataUrl = await toPng(el, options)
const dataUrl = await toJpeg(el, options)
const blob = await toBlob(el, options)
```

## Options

```ts
export interface Options {
  filter?: (node: Node) => boolean
  bgcolor?: string
  width?: number
  height?: number
  style?: {}
  quality?: number
  imagePlaceholder?: string
  cacheBust?: boolean
}
```

## Browser Support

```html
<script type="module" src="https://unpkg.com/dom-to-images/dist/index.mjs"></script>

<script>
  DomToImage.toPng(document.body).then(function (dataUrl) {
    const a = document.createElement('a')
    a.download = 'image.png'
    a.href = dataUrl
    a.click()
  })
</script>
```
