<template>
    <div
        v-raw-html="require('./test.svg')"
        class="directive"
    />
</template>

<script>
import { directive as rawHTMLDirective } from './../../../dist/vue-raw-html.module';

export default {
    directives: {
        'raw-html': rawHTMLDirective,
    }
};
</script>

<style scoped lang="scss">
.directive {
    color: red;
}
</style>
