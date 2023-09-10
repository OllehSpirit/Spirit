import classes from './Spin.module.css'

function Spin(){
    return(
        <div className={classes.wrap}>
            <div className={classes.loader}>
                <div className={classes.inner}></div>
            </div>
        </div>
    );
}
export default Spin;