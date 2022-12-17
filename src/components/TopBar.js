import './TopBar.css';

function TopBar() {
  return (
    <div className="top-bar">
        <div className="greeting-container"> 
            <h1 className="bold zero-margin top-greeting"> Hewwo Jack OwO</h1>
            <h2 className="thin zero-margin bot-greeting"> gimme youw biwws</h2>
        </div>
        <div className = "avt-container">
            {/* <img src={""} alt =""> </img> */}
        </div>
    </div>
  );
}

export default TopBar;
