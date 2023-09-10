import classes from './ButtonsHoverStyles.module.css'

function ButtonsHoverStyles(){

    return(
        <div className={classes.container}>
            Buttons Hover Styles:
            <div className={classes.wrap}>
                <a className={classes.diaSwipe} href="#a">Diagonal Swipe</a>
                <a className={classes.diaClose} href="#b">Diagonal Close</a>
                <a className={classes.swipe} href="#c">Swipe</a>
                <a className={classes.douClose} href="#d">Double Swipe</a>
                <a className={classes.positn} href="#e">Position Aware<span></span></a>
                <a className={classes.alternate} href="#f"><span>Alternate</span></a>
                <a className={classes.smoosh} href="#g">Smoosh</a>
                <a className={classes.zoningIn} href="#h"><span>Zoning In</span></a>
                <a className={classes.corners} href="#i"><span>4 Corners</span></a>
                <a className={classes.slice} href="#j">Slice</a>
                <a className={classes.verOverlap} href="#k"><span>Vertical Overlap</span></a>
                <a className={classes.horOverlap} href="#l"><span>Horizontal Overlap</span></a>
                <a className={classes.coolis} href="#m">Collision</a>
            </div>
      </div>
    );
}
export default ButtonsHoverStyles;