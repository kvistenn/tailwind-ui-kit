import button from './button.json';
import input from './input.json';
import grid from './grid.json';
import container from './container.json';

// Icons
import buttonIcon from '@/assets/images/icons/button.svg';
import inputIcon from '@/assets/images/icons/input.svg';
import gridIcon from '@/assets/images/icons/grid.svg';

export const components = [
    {
        label: 'Button',
        name: 'button',
        icon: buttonIcon,
        component: button
    },
    {
        label: 'Input',
        name: 'input',
        icon: inputIcon,
        component: input
    },
    {
        label: 'Grid',
        name: 'grid',
        icon: gridIcon,
        component: grid
    }
];