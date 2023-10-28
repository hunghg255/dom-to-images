# dom-to-images

[![npm version](https://badgen.net/npm/v/dom-to-images)](https://npm.im/dom-to-images)

This combines [dom-to-image-chrome-fix-retina](https://npm.im/dom-to-image-chrome-fix-retina) and [changedpi](https://www.npmjs.com/package/changedpi).

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
<script src="https://unpkg.com/dom-to-images/dist/index.js"></script>

<script>
  DomToImage.toPng(document.body).then(function (dataUrl) {
    const a = document.createElement('a')
    a.download = 'image.png'
    a.href = dataUrl
    a.click()
  })
</script>
```
