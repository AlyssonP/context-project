import Component1 from './views/Component1'

import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './views/UserContext';

function App() {
  return (
    <>
    <UserProvider>
      <Component1/>
    </UserProvider>
     
    </>
  )
}

export default App
