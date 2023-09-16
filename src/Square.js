import './App.css';

function Square({value, onButtonClick}) {
  return (
    <button 
        className="square"
        onClick={onButtonClick}
    >
    {value}
    </button>
  );
                
}

export default Square;
