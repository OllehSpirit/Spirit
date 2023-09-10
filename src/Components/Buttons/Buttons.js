import Main from '../../Pages/Main'
import ThreeDButton from "./3d Button/ThreeDButton";
import ButtonHoverFillBackground from "./Button Hover Fill Background/ButtonHoverFillBackground";
import ButtonsHoverStyles from './Buttons Hover Styles/ButtonsHoverStyles'
import ArrowButtonEffect from './Arrow Button Effect/ArrowButtonEffect'
import GradientButtonWithGradientShadow from './Gradient Button With Gradient Shadow/GradientButtonWithGradientShadow'
import ShadowButton from './Shadow Button/ShadowButton'
import ButtonShimmer from './Button Shimmer/ButtonShimmer'
import BulletButton from './Bullet Button/BulletButton'

function Buttons(){
    
    return(
        <div >
            <Main/>

           <ButtonHoverFillBackground/>
           <ThreeDButton/>
           <ButtonsHoverStyles/>
           <ArrowButtonEffect/>
           <ShadowButton/>
           <GradientButtonWithGradientShadow/>
           <ButtonShimmer/>
           <BulletButton/>
        </div>
    );
}
export default Buttons;