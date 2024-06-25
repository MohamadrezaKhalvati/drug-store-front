import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/layouts/default-layout/DefaultLayout.vue'),
    meta: {
      middleware: 'auth',
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: {
          pageTitle: 'Dashboard',
          breadcrumbs: ['Dashboards'],
        },
      },
      {
        path: '/staff',
        name: 'Staff',
        component: () => import('@/views/staff/Staff.vue'),
        meta: {
          pageTitle: 'Staff',
          breadcrumbs: ['Staff'],
        },
      },
      {
        path: '/staff/staff-details',
        name: 'staff-details',
        redirect: '/staff/overview',
        children: [
          {
            name: 'staff-overview',
            path: '/staff/overview',
            component: () => import('@/views/staff/StaffProfile.vue'),
            meta: {
              pageTitle: 'Staff Overview',
              breadcrumbs: ['staff', 'overview'],
            },
          },
          {
            name: 'staff-edit',
            path: '/staff/edit',
            component: () => import('@/views/staff/EditProfile.vue'),
            meta: {
              pageTitle: 'Staff Edit',
              breadcrumbs: ['Staff', 'Edit'],
            },
          },
        ],
      },
      {
        path: '/Customer',
        name: 'Customer',
        component: () => import('@/views/customer/Customer.vue'),
        meta: {
          pageTitle: 'Customer',
          breadcrumbs: ['Customer'],
        },
      },
      {
        path: '/customers/customer-detail',
        name: 'customer-detail',
        component: () => import('@/views/customer/customerProfile.vue'),
        meta: {
          pageTitle: 'Customers ',
          breadcrumbs: ['Customer', ' Customer Page'],
        },
      },
      {
        path: '/Product',
        name: 'Product',
        component: () => import('@/views/product/Product.vue'),
        meta: {
          pageTitle: 'Product',
          breadcrumbs: ['Product'],
        },
      },
      {
        path: '/product/add',
        name: 'AddProduct',
        component: () => import('@/views/product/AddProduct.vue'),
        meta: {
          pageTitle: 'Add Product',
          breadcrumbs: ['Products', 'Add Product'],
        },
      },
      {
        path: '/product/edit',
        name: 'EditProduct',
        component: () => import('@/views/product/EditProduct.vue'),
        meta: {
          pageTitle: 'Edit Product',
          breadcrumbs: ['Product', 'Edit Product'],
        },
      },
      {
        path: '/Order',
        name: 'Order',
        component: () => import('@/views/order/Order.vue'),
        meta: {
          pageTitle: 'Order',
          breadcrumbs: ['Order'],
        },
      },
      {
        path: 'order/add',
        name: 'AddOrder',
        component: () => import('@/views/order/AddOrder.vue'),
        meta: {
          pageTitle: 'Add Order',
          breadcrumbs: ['Order', 'Add Order'],
        },
      },

      {
        path: '/order/edit',
        name: 'EditOrder',
        component: () => import('@/views/order/EditOrder.vue'),
        meta: {
          pageTitle: 'Edit Order',
          breadcrumbs: ['Order', 'Edit Order'],
        },
      },
      {
        path: '/order-detail',
        name: 'orderDetail',
        component: () => import('@/views/order/OrderDetail.vue'),
        meta: {
          pageTitle: 'Order Detail',
          breadcrumbs: ['Orders', 'Order Details'],
        },
      },
      {
        path: '/Report',
        name: 'Report',
        component: () => import('@/views/Report.vue'),
        meta: {
          pageTitle: 'Report',
          breadcrumbs: ['Report'],
        },
      },
      {
        path: '/Setting',
        name: 'Setting',
        component: () => import('@/views/Settings.vue'),
        meta: {
          pageTitle: 'Setting',
          breadcrumbs: ['Setting'],
        },
      },
      {
        path: '/help-center',
        name: 'help-center',
        component: () => import('@/views/HelpCenter.vue'),
        meta: {
          pageTitle: 'Help Center',
          breadcrumbs: ['Help Center'],
        },
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: '/sign-in',
        name: 'sign-in',
        component: () =>
          import('@/views/crafted/authentication/basic-flow/SignIn.vue'),
        meta: {
          pageTitle: 'Sign In',
        },
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/SystemLayout.vue'),
    children: [
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/crafted/authentication/Error404.vue'),
        meta: {
          pageTitle: 'Error 404',
        },
      },
      {
        path: '/500',
        name: '500',
        component: () => import('@/views/crafted/authentication/Error500.vue'),
        meta: {
          pageTitle: 'Error 500',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: 'smooth',
      }
    } else {
      return {
        top: 0,
        left: 0,
        behavior: 'smooth',
      }
    }
  },
})

export default router
