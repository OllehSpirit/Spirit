import classes from './RippleEffect.module.css'

function RippleEffect(){
    return(
        <div>
            <span className={classes.span}></span>
            <span className={classes.span}></span>
            <span className={classes.span}></span>
            <span className={classes.span}></span>
            <span className={classes.span}></span>
        </div>
    );
}
export default RippleEffect;