import classes from './ThreeBalls.module.css'

function ThreeBalls(){
    return(
        <div className={classes.container}>
            <div className={classes.ball}></div>
            <div className={classes.ball}></div>
            <div className={classes.ball}></div>
            <div className={classes.shadow}></div>
            <div className={classes.shadow}></div>
            <div className={classes.shadow}></div>
        </div>
    );
}
export default ThreeBalls;
