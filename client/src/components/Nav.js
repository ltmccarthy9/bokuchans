
import { useNavigate } from "react-router-dom";


const Nav = () => {

    const navigate = useNavigate();

   const goHome = () => {
    navigate("/");
   }

   const goSauce = () => {
    navigate("/sauce-food");
   }

   const goCurry = () => {
    navigate("/curry");
   }

   const goEvents = () => {
    navigate("/events");
   }

   const goInfo = () => {
    navigate("/info");
   }

   return (
    <div className="banner">
        <div onClick={goHome} className="boku">
                <h1 className="title">Bokuchan's.</h1>
            </div>
        <div className="pages">
            
            <div onClick={goSauce} className={"navcard"}>
                <h5>Sauces & Foods</h5>
            </div>
            <div onClick={goCurry} className="navcard">
                <h5>Japanese Curry House</h5>
            </div>
            <div onClick={goEvents} className="navcard">
                <h5>Events</h5>
            </div>
            <div onClick={goInfo} className="navcard">
                <h5>Additional Information</h5>
            </div>
            
        </div>
    </div>
        
    );
}

export default Nav;