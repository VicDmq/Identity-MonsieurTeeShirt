import ProductPage from '../Products/index'
import ColorPage from '../Colors/index'
import ConfirmationPage from '../Confirmation/index'

const routes = [
  {
    path: '/',
    component: ProductPage
  },
  {
    path: '/colors',
    component: ColorPage
  },
  {
    path: '/confirmation',
    component: ConfirmationPage
  }
]

export default routes
