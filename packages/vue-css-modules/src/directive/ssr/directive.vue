<template>
    <div
        v-cssm
        class="directive"
    >
        <div
            v-cssm
            class="directive"
        >
            {{ $style.directive }}
        </div>
    </div>
</template>

<script>
import { directive as cssModuleDirective } from './../../../dist/vue-css-modules.module';

export default {
    directives: {
        cssm: cssModuleDirective,
    }
};
</script>

<style module lang="scss">
.directive {
    color: red;
}
</style>
