import html2canvas from 'html2canvas';
import { changeDpiDataUrl, changeDpiBlob } from "changedpi"

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

const DPI = 72 * 2

export const toPng = (el: Node, options?: Options): Promise<string> => {
  return html2canvas(el as any, options).then((canvas) =>{
    return changeDpiDataUrl(canvas.toDataURL("image/png", 0.92), DPI); ;
  });
}

export const toJpeg = (el: Node, options?: Options): Promise<string> => {
  return html2canvas(el as any, options).then((canvas) =>{
    return changeDpiDataUrl(canvas.toDataURL("image/jpeg", 0.92), DPI); ;
  });
}

export const toBlob = (el: Node, options?: Options): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    html2canvas(el as any, options).then((canvas) =>{
      return canvas.toBlob(function(blob) {
        changeDpiBlob(blob, DPI).then(function(blob: any){
          resolve(blob);
        })
      },'image/jpeg', 0.92);
    })
  });
}

if (typeof window !== "undefined") {
  // @ts-ignore
  window.DomToImage = {
    toPng,
    toJpeg,
    toBlob
  }
}
