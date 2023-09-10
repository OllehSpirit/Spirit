import './Lamp.css'

function Lamp(){
    setInterval(()=>{
        if(document.getElementById('lamp').style.visibility=== 'visible')
            document.getElementById('lamp').style.visibility= 'hidden';
        else
            document.getElementById('lamp').style.visibility= 'visible';
    },1000)
    
    return(
        <div>
            <div className="lamp js-turnoff-btn">
                <div className="lamp-item lamp-top" />
                <div className="lamp-item lamp-middle" />
                <div className="lamp-item lamp-bottom" />
                <div className="lamp-item lamp-light open" id="lamp" />
            </div>
        </div>
    );
}
export default Lamp;