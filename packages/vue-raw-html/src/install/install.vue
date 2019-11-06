<template>
    <div
        class="directive"
    >
        <div
            v-raw-h
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
