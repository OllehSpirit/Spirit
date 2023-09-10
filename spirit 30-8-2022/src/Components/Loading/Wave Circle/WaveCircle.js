import classes from './WaveCircle.module.css'

function WaveCircle(){
    return(
        <div className={classes.wave}>
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
        </div>
    );
}
export default WaveCircle;