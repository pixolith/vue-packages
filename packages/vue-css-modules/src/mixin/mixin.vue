<template>
    <div
        :class="$style.mixin"
    >
        {{ $cssm('mixin') }}
    </div>
</template>

<script>
import { mixin } from './../../dist/vue-css-modules.module';

export default {
    mixins: [
        mixin,
    ],
};
</script>

<style module lang="scss">
.mixin {
    color: red;
}
</style>
