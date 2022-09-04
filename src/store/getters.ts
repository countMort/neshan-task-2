import { computed, reactive } from "vue"
import { drawerConstants } from "@/parameters"
import { isTouchPlatform } from "@/utils"
import { store } from "."
export const getters = reactive({
  drawerWidth: computed(() => {
    const isMobile = store.state.viewType ? store.state.viewType === 'mobile' : isTouchPlatform()
    const width = isMobile
      ? store.state.mapDimensions.width
      : drawerConstants.width
    return width
  }),
  loading: computed(() => {
    return store.state.searchLoading || store.state.reverseLoading
  }),
  touchPlatform: computed(() => {
    return isTouchPlatform()
  }),
})
