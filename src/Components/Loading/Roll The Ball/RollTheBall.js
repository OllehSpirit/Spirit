import classes from './RollTheBall.module.css'

function RollTheBall(){
    return(
        <div className={classes.bar}>
            <div className={classes.ball}></div>
        </div>
    );
}
export default RollTheBall;