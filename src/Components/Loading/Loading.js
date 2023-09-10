import Main from '../../Pages/Main'
import ShoppingCardLoadingAnimation from './Shopping Card Loading Animation/ShoppingCardLoadingAnimation'
import RollTheBall from './Roll The Ball/RollTheBall'
import SquareToCircle from './Square To Circle/SquareToCircle'
import WaveCircle from './Wave Circle/WaveCircle'
import Spin from './Spin/Spin'
import MorphSpinner from './Morph Spinner/MorphSpinner'
import FoldingCube from './Folding Cube/FoldingCube'
import ThreeBalls from './3 Balls/ThreeBalls'
import Spinner from './Spinner/Spinner'
import ThreeDotsFollowEachOther from './3 Dots Follow Each Other/ThreeDotsFollowEachOther'
import LinearAnimation from './Linear Animation/LinearAnimation'
import Loader from './Loader/Loader'
import RippleEffect from './Ripple Effect/RippleEffect'

function Buttons(){
    
    return(
        <div >
            <Main/>

           <ShoppingCardLoadingAnimation/>
           <RollTheBall/>
           <SquareToCircle/>
           <WaveCircle/>
           <Spin/>
           <MorphSpinner/>
           <FoldingCube/>
           <ThreeBalls/>
           <Spinner/>
           <ThreeDotsFollowEachOther/>
           <LinearAnimation/>
           <Loader/>
           <RippleEffect/>
        </div>
    );
}
export default Buttons;