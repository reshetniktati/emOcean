import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {
  Quasar,
  QLayout,
  QHeader,
  QFooter,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QInput,
  QAvatar,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QForm,
  QSpace,
  QMenu,
  QSpinnerBars,
  QTooltip,
  Notify,
  QTabs,
  QTab,
  QRouteTab,
  QTabPanels,
  QTabPanel,
  QScrollArea,
  QSplitter,
  QCard,
  QCardSection,
  QCardActions,
  QSelect,
  QSlider,
  QSeparator,
  QToggle,
  Ripple,
  QDialog,
  ClosePopup
} from 'quasar'

Vue.use(Quasar, {
  config: {
  },
  components: {
    QLayout,
    QHeader,
    QFooter,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QForm,
    QInput,
    QAvatar,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QSpace,
    QMenu,
    QSpinnerBars,
    QTooltip,
    QTabs,
    QTab,
    QRouteTab,
    QTabPanels,
    QTabPanel,
    QScrollArea,
    QSplitter,
    QCard,
    QCardSection,
    QCardActions,
    QSelect,
    QSlider,
    QSeparator,
    QToggle,
    QDialog
  },
  directives: {
    Ripple,
    ClosePopup
  },
  plugins: {
    Notify
  }
})
