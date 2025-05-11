import { Outlet } from 'react-router-dom'
import Header from './header/Header'

const CommonLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div>footer</div>
    </>
  )
}

export default CommonLayouts