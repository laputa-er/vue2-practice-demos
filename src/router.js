/**
 * Created by sean on 16/11/25
 */
import config from './config/config'

const viewsRouters = config.views.map(item => {
  const component = resolve => {
    require.ensure([], () => {
      resolve(require(`./views/${item}`))
    })
  }
  return {
    path: `/views/${item}`,
    name: item,
    component: component
  }
})

const routers = [
  {
    path: '/',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('./views/index'))
      })
    }
  },
  ...viewsRouters
]

export default routers
