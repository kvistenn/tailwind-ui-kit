<template>
    <span>
        <img src="@/assets/images/logo.svg" :class="classes" />
    </span>
</template>

<script>
    export default {
        name: 'Logo',
        props: {
            classes: {
                type: String,
                default: ''
            }
        }
    }
</script>