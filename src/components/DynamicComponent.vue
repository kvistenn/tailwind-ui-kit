<template>
    <img v-if="component.tag == 'img'" :class="classes" v-bind="component.attributes" />
    <input v-else-if="component.tag == 'input'" :class="classes" v-bind="component.attributes" />
    <path v-else-if="component.tag == 'path'" :class="classes" v-bind="component.attributes" />
    <component v-else :is="component.tag" :class="classes" v-bind="component.attributes">
        <DynamicComponent v-for="(child, index) in component.children" :key="index" :component="child" :size="size"
            :variant="variant" v-if="component.children && component.children.length > 0" />
        {{ component.text ? component.text : '' }}
    </component>
</template>

<script>

import { useSettingsStore } from '../stores/settings.js';

export default {
    name: 'DynamicComponent',
    setup() {
        const settings = useSettingsStore();
        return {
            settings,
        }
    },
    props: {
        component: {
            type: Object,
            required: true,
        },
        size: {
            type: String,
            default: 'md',
        },
        variant: {
            type: String,
            default: 'default',
        },
    },
    computed: {
        classes() {
            const classes = this.component.classes;
            var variantClasses = null;
            const output = [];

            console.log(this.component);

            if (!classes) {
                return '';
            }

            if (this.variant && classes.variants && classes.variants[this.variant]) {
                variantClasses = classes.variants[this.variant];
            }

            const pushClass = (key, subKey) => {
                if (key === 'base') {
                    if (variantClasses && variantClasses.base) {
                        output.push(variantClasses.base);
                    }
                    if (classes.base) {
                        output.push(classes.base);
                    }
                } else {
                    if (variantClasses && variantClasses[key]) {
                        if (subKey) {
                            if (variantClasses[key][subKey]) {
                                output.push(variantClasses[key][subKey]);
                            }
                        } else {
                            output.push(variantClasses[key]);
                        }
                    } else if (classes[key]) {
                        if (subKey) {
                            if (classes[key][subKey]) {
                                output.push(classes[key][subKey]);
                            }
                        } else {
                            output.push(classes[key]);
                        }
                    }
                }
            };

            pushClass('base');
            pushClass('sizes', this.size);
            pushClass('thickness', this.settings.thickness);
            pushClass('dark', 'base');
            pushClass('hover');
            pushClass('focus');

            return output.join(' ');
        },
    },
};
</script>