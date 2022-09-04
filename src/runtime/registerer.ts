import { defineNuxtPlugin } from '#app'
import { useAppManager } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
    const appManager = useAppManager()
    // Settings App
    appManager.addApp({
        "name": "MyApp",
        "title": "تطبيقي الخاص",
        "icon": "i-ci-settings-filled",
        "minWidth": 300,
        "minHeight": 300,
    })
})
