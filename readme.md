# Stencil Feather
Feather Icon web component using stencil.js and [Feather Icons](https://feathericons.com/) svg sprite.

## Installation

```bash
npm install vue feather-icons stencil-feather
npm start
```

### In browser
```<script src="/path/to/stencil-feather.js"></script><!-- Register automatically once loaded -->```

### Framework Integrations
For integrations in vue, react & angular see [stenciljs](https://stenciljs.com/docs/overview) 

#### Vue
Import the stencil-feather into the 'main.js'
stencil-feather component `f-icon` should then be available in any of the Vue components

``` js
import { applyPolyfills, defineCustomElements } from 'stencil-feather/loader';

applyPolyfills().then(() => {
  defineCustomElements();
})
```

## Usage
Icons can be configured with inline props:

```<f-icon name="anchor"></f-icon>```

## Inputs
| name  | Type: string, Name of Feather Icon |
| size  | Type: string, Default: 1x, Provides one of four size classes: 2x, 3x, 4x and 5x  |

