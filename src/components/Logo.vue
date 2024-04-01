<script setup>
    const props = defineProps({
        classes: {
            type: String,
            default: ''
        }
    })
</script>

<template>
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.97 8.61" :class="classes">
            <path d="m4.62,5.48c0,.49-.13.87-.4,1.14s-.64.4-1.12.4-.85-.13-1.11-.4-.39-.65-.39-1.14V0H0v5.44c0,1.01.27,1.79.81,2.34s1.31.83,2.29.83,1.76-.28,2.3-.83.81-1.33.81-2.34V0h-1.61v5.48Z"/>
            <rect x="8.34" width="1.66" height="8.52"/>
            <polygon points="13.75 0 13.07 0 12.15 1.42 12.15 0 11.61 0 11.61 2.85 12.15 2.85 12.15 2.23 12.56 1.67 13.23 2.85 13.87 2.85 12.9 1.18 13.75 0"/>
            <rect class="cls-1" x="14.14" y="0" width=".55" height="2.84"/>
            <polygon class="cls-1" points="14.89 0 14.89 .52 15.66 .52 15.66 2.85 16.2 2.85 16.2 .52 16.97 .52 16.97 0 14.89 0"/>
        </svg>
    </span>
</template>