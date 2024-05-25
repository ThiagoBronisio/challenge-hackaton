import { RouterProvider } from 'react-router-dom'
import './global.css'
import router from './routes/rotes/Routes'

function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App
