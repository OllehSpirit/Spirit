import { Route,Routes } from 'react-router-dom';

import Main from './Pages/Main';
import Buttons from './Components/Buttons/Buttons';
import Lists from './Components/Lists/Lists';
import Loading from './Components/Loading/Loading';

function App() {
  return (
    <div>
      <Routes>

        <Route path='/' exact element={<Main/>}/>
        
        <Route path='/Buttons' element={<Buttons/>}/>

        <Route path='/Lists' element={<Lists/>}/>

        <Route path='/Loading' element={<Loading/>}/>

      </Routes>
    </div>
  );
}

export default App;
