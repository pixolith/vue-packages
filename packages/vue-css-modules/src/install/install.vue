<template>
    <div
        v-cat
        class="directive"
    >
        <div
            v-cat
            class="directive"
        >
            {{ $style.directive }}
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style module lang="scss">
.directive {
    color: red;
}
</style>
