<template>
    <div>
        <div
            v-raw-html="require('./test.svg')"
            data-v-546595b4
            class="directive"
        />
    </div>
</template>

<script>
import VueRawHTML from './../../../dist/vue-raw-html';

export default {
    directives: {
        'raw-html': VueRawHTML.ssrDirective,
    }
};
</script>

<style scoped lang="scss">
.directive {
    color: red;
}
</style>
