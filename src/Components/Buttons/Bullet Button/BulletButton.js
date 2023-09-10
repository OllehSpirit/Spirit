import classes from './BulletButton.module.css'

function BulletButton(){
    return(
        <div className={classes.container}>
            <div className={classes.blur}></div>
                <button className={classes.btn1}>Bullet Button</button>
                <button className={classes.btn2}>Bullet Button</button>
        </div>
    );
}
export default BulletButton;