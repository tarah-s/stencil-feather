# Stencil Feather
Feather Icon web component using stencil.js and [Feather Icons](https://feathericons.com/) svg sprite.

## Installation

```bash
npm install feather-icons stencil-feather
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
stencil-feather component `feather-icon` should then be available in any of the Vue components

``` js
import { applyPolyfills, defineCustomElements } from 'stencil-feather/loader';

Vue.config.ignoredElements = [/feather-\w*/];

applyPolyfills().then(() => {
  defineCustomElements();
})
```

#### Angular
Import the stencil-feather into the 'main.ts'
stencil-feather component `feather-icon` should then be available in any of the Angular components
``` js
import { defineCustomElements } from 'stencil-feather/loader';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements();
```

#### React
Import the stencil-feather into the 'index.js'
stencil-feather component `feather-icon` should then be available in any of the React components
``` js
import { applyPolyfills, defineCustomElements } from 'stencil-feather/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});
```

## Usage
Icons can be configured with inline props:

As an icon
``` html 
<feather-icon name="anchor"></feather-icon>
```

As an sprite
``` html 
<feather-sprite name="anchor"></feather-sprite>
```

## Size
Add any font size as em, px or rems
Default: 1em

``` html
  <feather-icon name="activity"></feather-icon> 
  <feather-icon name="activity" size="2em"></feather-icon> 
  <feather-icon name="activity" size="3em"></feather-icon>
  <feather-icon name="activity" size="4em"></feather-icon>
  <feather-icon name="activity" size="5em"></feather-icon>
```

## Inputs
| Property/Attribute | Type/Default/Description                                                         |
| ------------------ | -------------------------------------------------------------------------------- |
| name               | Type: string, Default: null, Name of Feather Icon                                |
| size               | Type: string, Default: 1em, Add any font size as em, px or rems                  |

