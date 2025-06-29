import { h } from 'vue'
import * as SolidIcons from '@heroicons/vue/20/solid'
import * as OutlineIcons from '@heroicons/vue/24/outline'

export default {
    install(app) {
        Object.entries(SolidIcons).forEach(([name, component]) => {
            app.component(`HeroSolid${name}`, {
                render() {
                    return h(component)
                }
            })
        })

        Object.entries(OutlineIcons).forEach(([name, component]) => {
            app.component(`HeroOutline${name}`, {
                render() {
                    return h(component)
                }
            })
        })
    }
}
