<template>
    <img
        v-if="component.tag == 'img'"
        :is="component.tag"
        :class="classes"
        v-bind="component.attributes"
    />
    
    <input
        v-else-if="component.tag == 'input'"
        :is="component.tag"
        :class="classes"
        v-bind="component.attributes"
    />
    
    <path
        v-else-if="component.tag == 'path'"
        :is="component.tag"
        :class="classes"
        v-bind="component.attributes"
    />
    
    <component
        v-else
        :is="component.tag"
        :class="classes"
        v-bind="component.attributes"
    >
        <DynamicComponent
            v-if="component.children && component.children.length > 0"
            v-for="(child, index) in component.children"
            :key="index"
            :component="child"
            :device="device"
        />
        {{ component.text ? component.text : '' }}
    </component>

</template>

<script>

export default {
    name: 'DynamicComponent',
    props: {
        component: {
            type: Object,
            required: true,
        },
        device: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            classes: this.component.classes,
        };
    },
    watch: {
        device(newDevice, oldDevice) {
            if(!this.classes) {
                return;
            }
            
            const classes = this.classes.split(' ');
            const newClasses = [];

            classes.forEach((className) => {
                if(newDevice === 2) { // Mobile
                    if(!className.includes('sm:') || !className.includes('md:') || !className.includes('lg:') || !className.includes('xl:')) {
                        newClasses.push(className);
                    }
                }
                else if(newDevice === 1) { // Tablet
                    if(!className.includes('lg:') || !className.includes('xl:')) {
                        newClasses.push(className);
                    }
                }
                else if(newDevice === 0) { // Desktop
                    newClasses.push(className);
                }
            });

            console.log(newClasses.join(' '));
            this.classes = newClasses.join(' ');
        },
    },
};
</script>