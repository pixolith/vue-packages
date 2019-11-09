# Vue Raw HTML

<p>
    <img align="left" src="https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg" width="150" height="150" />
    <img src="https://avatars2.githubusercontent.com/u/11898073?s=200&v=4" width="150" height="150" alt="pixolith"/>
</p>

<p align="left">
    <img src="https://img.shields.io/badge/Licence-MIT-brightgreen"/>
</p>

## What is this

This Directive provides a way to render a string as raw html propagating the vue scoping to all child elements, allowing you to use scoped css as you normally would.

## Why

Usually for rendering raw html you would use `v-html`. The Problem is, depending on the input, the scoped attributes are not passed down which makes it difficult to apply scoped styling. This directive will propagate all scoped attributes down to the children which makes styling the raw html effectively no different than any other elements.

## Install

```shell
npm install @pixolith/vue-raw-html
```

## CDN

```html
<script src="https://unpkg.com/@pixolith/vue-raw-html/dist/vue-raw-html.umd.js">
```

## Requirements

**Raw Loader** (<https://webpack.js.org/loaders/raw-loader/)> is required to inject a raw string when requiring a file of a given type. This allows webpack to handle the filetype and pass the string to this plugin.

When using **Nuxt** this needs to be added to the `nuxt.config.js`. This example is for loading .svg file types but any external file that contains parseable html can be loaded.

```javascript
    extend(config, ctx) {
        // We need to patch the url-loader regex to ignore SVG files.
        const urlLoader = config.module.rules.find(
            rule => rule.use && rule.use[0].loader === 'url-loader',
        );

        urlLoader.test = /\.(png|jpe?g|gif)$/;

        // i recommend to use the svgo-loader in conjunction since it will clean the svg beforehand
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: 'raw-loader',
                },
            ],
        });
    },
```

Please note that when not using **Nuxt** you will also have to add raw-loader to your webpack config for the filetype you want to load as string.

## Usage

### In templates as directive

Register the directive anywhere in your vue application (globally or component based) or as a **plugin** in **Nuxt**

```javascript
import Vue from 'vue';
import { directive as vueRawHTML } from '@pixolith/vue-raw-html';

or es modules
import { directive as vueRawHTML } from '@pixolith/vue-raw-html/dist/vue-raw-html.module';

Vue.directive('raw-html', vueRawHTML);
```

this gives you access to `v-raw-html="logo.svg"` renderering the contents of `logo.svg` directly into the html. Please be aware that you need to escape your unsafe input stay safe from XSS injections.

```html
<template>
    <div v-raw-html="logo.svg" class="my-class" />
</template>

<style lang="scss" scoped>
    .my-class {
        position: relative;
        height: 100%;
        width: 100%;
    }
</style>
```

will result in:

```html
<div class="my-class" data-my-scope>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="24"
        data-my-scope
    ></svg>
</div>

<style>
    div[data-my-scope].my-class {
        position: relative;
        height: 100%;
        width: 100%;
    }
</style>
```

### As a global plugin

```javascript
import Vue from 'vue';
import { install as VueRawHTML } from './../../dist/vue-raw-html.module';

Vue.install(VueRawHTML);
```

#### Pass a custom key

```javascript
Vue.install(VueRawHTML, {
    key: 'cat',
});
```

### Server Side Rendering

In order to render the directive in node.js on the server you need to pass custom instructions to the bundle renderer.
See: <https://ssr.vuejs.org/api/#directives>

```javascript
import VueCSSModules from '@pixolith/vue-raw-html';

const renderer = createRenderer({
    directives: {
        cssm: VueCSSModules.ssrDirective,
    },
});
```

This will create the directive `v-cat="rawString"`;

### Nuxt Config example for SSR

When using _nuxt_ this can be added to `nuxt.config.js`. See Nuxt.js docs: <https://nuxtjs.org/api/configuration-render#bundleRenderer>

```javascript
import VueRawHTML from '@pixolith/vue-raw-html';

bundleRenderer: {
    directives: {
        cssm: VueRawHTML.ssrDirective,
    }
}
```

With this the SSR renderer (for instance with `nuxt generate`) will be able to generate full html for this custom directive resulting in the full html string rendered on the server.

### Donations

Even though on a company account this project is maintained on personal time. If you want to support the development of this feel free to buy me a beer at <https://www.paypal.me/mdslktr.>
