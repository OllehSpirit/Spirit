import classes from './ThreeDButton.module.css'

function ThreeDButton(){
    return(
        <div className={classes.container}>
            <button className={classes.btn}>
                HOVER ON ME( ThreeDButton )
            </button>
        </div>
    );
}
export default ThreeDButton;