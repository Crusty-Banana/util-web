import './MainMenu.css';
import logo from '../logo.svg';
import TopBar from '../components/TopBar.js';
import ButtonsBox from '../components/ButtonsBox.js';

function MainMenu() {
    return (
        <div className="main-menu">
            <TopBar />
            <ButtonsBox />
            <header className="App-header">

            </header>
        </div>
    );
}

export default MainMenu;
