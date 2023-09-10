import {Link} from 'react-router-dom';

import Welcome from '../Components/Welcome/Welcome';
import Lamp from '../Components/Lamp/Lamp';

function Main(){
    return(
        <div>
            <p style={{color:'white'}}>
                That's the SPIRIT
            </p>

            <Link to='/Buttons'>Buttons</Link><br/>
            <Link to='/Lists'>Lists</Link><br/>
            <Link to='/Loading'>Loading</Link><br/>
            <Link to='/LogIn_Or_SignUp'>LogIn Or SignUp</Link><br/>

            <Welcome/>
            <Lamp/>

        </div>
    );
}
export default Main;