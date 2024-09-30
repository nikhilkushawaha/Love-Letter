import './Message.css';
import heart from './heart.gif'
let heartbit = './heartbit.mp3';
function Message(){
    
    function music(){
        new Audio(heartbit).play()
    }

    return(
        <div className="message" >
            <h1>Do You Love Me?</h1>
            <img src={heart} alt="heartbit"/>
            <div className="buttons">
               <button className="yesButton" type="submit" onClick={music}>Yes</button>
               <button className="noButton" type="submit" >No</button>
            </div>
        </div>
    );
}

export default Message;