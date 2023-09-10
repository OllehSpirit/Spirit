import classes from './DropDownAnimation.module.css'

function DropDownAnimation(){
    return(
        <div className={classes.dropDownMenu}>
            Profile
            <ul className={classes.dropDown}>
                <li>Contact</li>
                <li>Message</li>
                <li>Documents</li>
                <li>Mails</li>
                <li>Resources</li>
            </ul>
        </div>
    );
}
export default DropDownAnimation;