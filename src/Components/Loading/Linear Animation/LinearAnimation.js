import classes from './LinearAnimation.module.css'

function LinearAnimation(){
    return(
        <div className={classes.loaderBody}>
            <div className={classes.loaderWidth}>
                <div className={classes.loader}></div>
            </div>
        </div>
    );
}
export default LinearAnimation;