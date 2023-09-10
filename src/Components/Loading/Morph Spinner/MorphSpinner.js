import classes from './MorphSpinner.module.css'

function MorphSpinner(){
    return(
        <div className={classes.container}>
            <span className={classes.spinner}></span>
            <span className={classes.txt}>&nbsp; Loading (Morph Spinner)</span>
        </div>
    );
}
export default MorphSpinner;