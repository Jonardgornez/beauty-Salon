
import { Outlet ,NavLink} from 'react-router-dom'


const AdminLayout = () => {
  return (
     <div>
       <nav className='h-full p-2 bg-black'>
            <NavLink to="dashboard" className="bg-blue-700 p-4 text-white mr-2">dashboard</NavLink>
            <NavLink to="test" className="bg-blue-700 p-4 text-white">Test</NavLink>
       </nav>
       <Outlet/>
     
     </div>

  )
}

export default AdminLayout
