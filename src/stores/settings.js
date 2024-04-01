import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
    
    const darkMode = ref(false)
    const toggleDarkMode = () => {
        darkMode.value = !darkMode.value
        document.body.classList.toggle('dark', darkMode.value)
    }

    const primaryColor = ref('#1976D2')
    const setPrimaryColor = (color) => {
        primaryColor.value = color
    }

    const secondaryColor = ref('#424242')
    const setSecondaryColor = (color) => {
        secondaryColor.value = color
    }

    const thickness = ref('normal')
    const thicknessItems = [
        { value: 'thin', label: 'Thin' },
        { value: 'normal', label: 'Normal' },
        { value: 'thick', label: 'Thick' },
    ]
    const setThickness = (value) => {
        thickness.value = value
        console.log(thickness.value)
    }

    const fontFamily = ref('Arial')
    const setFontFamily = (value) => {
        fontFamily.value = value
    }

    return {
        darkMode,
        toggleDarkMode,
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
        thickness,
        thicknessItems,
        setThickness,
        fontFamily,
        setFontFamily
    }
})
