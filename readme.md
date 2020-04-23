# Stencil Feather
Feather Icon web component using stencil.js and [Feather Icons](https://feathericons.com/) svg sprite.

## Installation

```bash
npm install vue feather-icons stencil-feather
npm start
```

### In browser
``` html
<script src="/path/to/stencil-feather.js"></script><!-- Register automatically once loaded -->
```

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

#### Angular
Import the stencil-feather into the 'main.ts'
stencil-feather component `f-icon` should then be available in any of the Angular components
``` js
import { defineCustomElements } from 'stencil-feather/loader';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements();
```

#### React
Import the stencil-feather into the 'index.js'
stencil-feather component `f-icon` should then be available in any of the React components
``` js
import { applyPolyfills, defineCustomElements } from 'stencil-feather/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});
```

## Usage
Icons can be configured with inline props:

``` html 
<f-icon name="anchor"></f-icon>
```

## Size
Five size classes 1x 2x, 3x, 4x and 5x
Default: 1x

``` html
  <f-icon name="activity"></f-icon> 
  <f-icon name="activity" size="2x"></f-icon> 
  <f-icon name="activity" size="3x"></f-icon>
  <f-icon name="activity" size="4x"></f-icon>
  <f-icon name="activity" size="5x"></f-icon>
```

## Inputs
| Property/Attribute | Type/Default/Description |
| name  | Type: string, Default: null, Name of Feather Icon |
| size  | Type: string, Default: 1x, Provides one of five size classes: 2x, 3x, 4x and 5x  |

