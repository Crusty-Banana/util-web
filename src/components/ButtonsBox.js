import './ButtonsBox.css';

function ButtonsBox() {
  return (
    <div className="ButtonsBox">
        <button className="type-one-button bigger-font">+</button>
        <button className="type-one-button bigger-font">-</button>
        <button className="type-one-button">history</button>
        <button className="type-one-button">delete</button>
    </div>
  );
}

export default ButtonsBox;
