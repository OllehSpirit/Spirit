import {Link} from 'react-router-dom';

function Main(){
    return(
        <div>
            <p style={{color:'white'}}>
                That's the SPIRIT
            </p>
            <Link to='/Buttons'>Buttons</Link><br/>
            <Link to='/Lists'>Lists</Link><br/>
            <Link to='/Loading'>Loading</Link><br/>
        </div>
    );
}
export default Main;