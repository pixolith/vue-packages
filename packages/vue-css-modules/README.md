# Vue CSS Modules

<p>
<img align="left" src="https://raw.githubusercontent.com/css-modules/logos/master/css-modules-logo.png" width="150" height="150" />
<img src="https://avatars2.githubusercontent.com/u/11898073?s=200&v=4" width="150" height="150" alt="pixolith"/>
</p>

<p align="left">
  <img src="https://img.shields.io/badge/Licence-MIT-brightgreen"/>
</p>

## What is this

In some cases there is a need for conflict-free class names in css files especially in large projects. Surely you can do this by hand but css modules provide a programmatic approach to guarantee this without having to keep track of the class names. This plugin aims to simplify the usage within the vue context.

## Why

So why this? This plugin provides a way to use css-modules in vue single file components in a less complicated fashion allowing you to write cleaner template files using a custom directive (and an optional mixin).

Before:

```html
<template>
    <div class="another-class" :class="$style['my-css-module-class']"></div>
</template>
```

After:

```html
<template>
    <div v-cssm class="another-class my-css-module-class"></div>
</template>
```

🚀 Write class names as you're used to and convert them into unique class names resulting in conflict-free css in all your modules 🚀 (See: <https://github.com/css-modules/css-modules)>

</p>

## Install

```shell
npm install @pixolith/vue-css-modules
```

## CDN

```html
<script src="https://unpkg.com/@pixolith/vue-css-modules/dist/vue-css-modules.umd.js">
```

## Requirements

**Vue-Loader** is required to compile your SFCs (Single File Components) and create the computed `$style` property. This means instructing webpacks **css-loader** to handle the hashing for the resulting css to be mapped.
Instructions to setup can be found here: <https://vue-loader.vuejs.org/guide/css-modules.html#usage>

When using **Nuxt** this needs to be added to the `nuxt.config.js`.

```javascript
    loaders: {
        css: {
            modules: true,
            localIdentName: '[local]_[hash:base64:8]',
        },
    },
```

Please note that when not using **Nuxt** you will have to configure webpack to use both css-modules and normal class names if you want to mix. **Nuxt** does this for you automatically depending on your `<style></style>` settings (e.g. scoped, module).

## Usage

### In templates as directive

Register the directive anywhere in your vue application or as **plugin** in **Nuxt**

```javascript
import Vue from 'vue';
import { directive as cssModuleDirective } from '@pixolith/vue-css-modules';

or es modules
import { directive as cssModuleDirective } from '@pixolith/vue-css-modules/dist/vue-css-modules.module';

Vue.directive('cssm', cssModuleDirective);
```

this gives you access to `v-cssm` converting all class in your template files which have a corresponding `<style module></style>` css rule to unique class names. All other classes remain untouched having full control over your class names via styles. Note that `cssm` is the name of the directive and therefore can be changed however you like.

```html
<template>
    <div
        v-cssm
        class="my-class"
    >
</template>

<style lang="scss" module>
    .my-class {
        position: relative;
        height: 100%;
        width: 100%;
    }
</style>
```

will result in:

```html
<div class="my-class_[hash:base64:8]"></div>

<style>
    .my-class_[hash:base64:8] {
        position: relative;
        height: 100%;
        width: 100%;
    }
</style>
```

### Global CSS

There are two ways to define global css:

1. Add the :global scope to your css rule

```html
<style lang="scss" module>
    :global {
        .global-class-name {
            color: green;
        }
    }
</style>
```

2. Ommitting module and adding a new style tag basicly has the same effect

```html
<style lang="scss">
    .global-class-name {
        color: green;
    }
</style>
```

For mixins, colors and anything that is used in preprocessing i'd recommend the style-ressource-loader (<https://www.npmjs.com/package/style-resources-loader)>

### As a mixin

```javascript
import Vue from 'vue';
import { mixin as cssModuleMixin } from '@pixolith/vue-css-modules';

or es modules
import { mixin as cssModuleMixin } from '@pixolith/vue-css-modules/dist/vue-css-modules.module';

Vue.mixin(cssModuleMixin);

```

You will have access to `this.$cssm('my-class')` in order to get the hashed classes for your normal classes.

### As a global plugin

```javascript
import Vue from 'vue';
import { install as VueCSSModules } from './../../dist/vue-css-modules.module';

Vue.install(VueCSSModules);
```

#### Pass a custom key

```javascript
Vue.install(VueCSSModules, {
    key: 'cat',
});
```

This will create the mixin `this.$cat()` and the directive `v-cat` instead of the default `$cssm` and `v-cssm`.

### Server Side Rendering

In order to render the directive in node.js on the server you need to pass custom instructions to the bundle renderer.
See: <https://ssr.vuejs.org/api/#directives>

```javascript
import VueCSSModules from '@pixolith/vue-css-modules';

const renderer = createRenderer({
    directives: {
        cssm: VueCSSModules.ssrDirective,
    },
});
```

### Nuxt Config example for SSR

When using _nuxt_ this can be added to `nuxt.config.js`. See Nuxt.js docs: <https://nuxtjs.org/api/configuration-render#bundleRenderer>

```javascript
import VueCSSModules from '@pixolith/vue-css-modules';

bundleRenderer: {
    directives: {
        cssm: VueCSSModules.ssrDirective,
    }
}
```

With this the SSR renderer (for instance with `nuxt generate`) will be able to generate full html for this custom directive resulting in unique classnames prerendered.

### Donations

Even though on a company account this project is maintained on personal time. If you want to support the development of this feel free to buy me a beer at <https://www.paypal.me/mdslktr.>
