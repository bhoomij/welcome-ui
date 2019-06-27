import { css } from '@xstyled/styled-components'

function getFormat(extension) {
  return extension === 'ttf' ? 'truetype' : extension
}

function getUrl(url, extension) {
  return `url('${url}.${extension}') format('${getFormat(extension)}')`
}

function getSrc(descriptor) {
  return descriptor.extensions.map(extension => getUrl(descriptor.url, extension)).join(', ')
}

function getFont(descriptor) {
  return css`
    @font-face {
      font-family: ${descriptor.name};
      src: ${getSrc(descriptor)};
      font-display: fallback;
      ${descriptor.weight &&
        css`
          font-weight: ${descriptor.weight};
        `}
      ${descriptor.style &&
        css`
          font-style: ${descriptor.style};
        `}
    }
  `
}

export const fonts = () => ({ theme: { fontFaces } }) => {
  if (!fontFaces) return null
  return (
    Object.entries(fontFaces)
      // Ignore anything else than array
      .filter(([, variations]) => Array.isArray(variations))
      .flatMap(([name, variations]) => variations.map(variation => getFont({ name, ...variation })))
      .flat()
  )
}
