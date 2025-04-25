import studentpic from "./assets/graduated.png";

function Header(props){

    return( 
        <div className="Student">
            
            <ul className="list">
                <img className="profileimg" src={studentpic} alt="profile pic"></img>
                <li><a herf="">Name: {props.name}</a></li>
                <li><a herf="">Gender: {props.gender}</a></li>
                <li><a herf="">Id: {props.id}</a></li>
                <li><a herf="">Class: {props.class}</a></li>
            </ul>
        </div>
    );
   }
   
   export default Header