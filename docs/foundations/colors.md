---
title: Colors
---
Primary: `#0E7AFE`  
Accent: `#10b981`  
Warning: `#f59e0b`  
Danger: `#ef4444`


## Overview
## Principle
## Color system
### Color aliases
### Purposeful color
## Targeted ratio based colors
## Tonal palettes
## Gray usage
### Gray background
### Gray text
### Gray icon
### Gray border
## Color usage
### Color background
### Color text
### Color icon
### Color border
## Color semantics


### Colors

```css
--dyte-colors-brand-500: 33 96 253;
--dyte-colors-background-1000: 8 8 8;
/* ... rest of the shades */
```

CSS Variables are set in the format: `R G B`.

Here are all the color tokens, along with their default values.



#### Usage

:::info

Note the exception of `text` and `text-on-brand` colors, you only specify a
single color even though there are the following shades: 1000 - 600.

This is because the `provideDyteDesignSystem()` utility sets the color you pass
to `text-1000` and calculates lighter shades and sets them as well.

Only pass objects for `brand` and `background` colors.

:::

A set of commonly used `background` shades are available by default with the
`theme` property.

Theme values are: `light`, `dark`, `darkest`.

Edit color tokens like this. Only the colors you specify will be set.

```js
const designTokens = {
  theme: 'darkest',
  colors: {
    brand: { 500: '#0D51FD' },
    background: { 1000: '#080808' },
    text: '#ffffff',
    'text-on-primary': '#ffffff',
    'video-bg': '#181818',
  },
};
```