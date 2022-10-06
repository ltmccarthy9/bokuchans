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
    navigate("/events-info");
   }
   
   return (
        <div className="banner">
            <div onClick={goHome} className="navcard">
                <h1 className="title">Bokuchan's</h1>
            </div>
            <div onClick={goSauce} className="navcard">
                <h4>Sauces & Foods</h4>
            </div>
            <div onClick={goCurry} className="navcard">
                <h4>Japanese Curry House</h4>
            </div>
            <div onClick={goEvents} className="navcard">
                <h4>Events & Additional Info</h4>
            </div>
            
        </div>
    );
}

export default Nav;