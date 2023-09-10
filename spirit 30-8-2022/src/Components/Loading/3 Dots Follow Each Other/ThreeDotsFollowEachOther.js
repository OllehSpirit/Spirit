import classes from './ThreeDotsFollowEachOther.module.css'

function ThreeDotsFollowEachOther(){
    return(
        <div className={classes.spinner}>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
        </div>
    );
}
export default ThreeDotsFollowEachOther;