import {CalculatorFrame} from './components/CalculatorFrame';
import './App.css';
import {Title} from './components/Title' ;

function App() {
  return (
    <div className="wrapper">
    <div className="top">
<Title />
</div>
 <CalculatorFrame />
</div>
  );
}

export default App;
