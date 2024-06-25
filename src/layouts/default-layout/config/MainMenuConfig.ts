import type { MenuItem } from '@/layouts/default-layout/config/types'

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: 'dashboard',
        route: '/dashboard',
        keenthemesIcon: 'element-11',
        bootstrapIcon: 'bi-app-indicator',
      },
      {
        heading: 'Staff',
        route: '/Staff',
        keenthemesIcon: 'user-square',
        bootstrapIcon: 'bi-app-indicator',
      },
      {
        heading: 'Customer',
        route: '/Customer',
        keenthemesIcon: 'people',
        bootstrapIcon: 'bi-app-indicator',
      },
      {
        heading: 'Order',
        route: '/Order',
        keenthemesIcon: 'cube-2',
        bootstrapIcon: 'bi-app-indicator',
      },
      {
        heading: 'Product',
        route: '/Product',
        keenthemesIcon: 'basket',
        bootstrapIcon: 'bi-app-indicator',
      },
      {
        heading: 'Setting',
        route: '/Setting',
        keenthemesIcon: 'setting-2',
        bootstrapIcon: 'bi-app-indicator',
      },
      {
        heading: 'Help Center',
        route: '/help-center',
        keenthemesIcon: 'message-question',
        bootstrapIcon: 'bi-app-indicator',
      },
      {
        heading: 'Log Out',
        route: '/sign-in',
        keenthemesIcon: 'entrance-right',
        bootstrapIcon: 'bi-app-indicator',
      },
    ],
  },
]

export default MainMenuConfig
