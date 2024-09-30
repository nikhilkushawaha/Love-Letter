import Card from './component/Card';
import heartbit from './heartbit.mp3';

import './App.css';
function music(){
  new Audio(heartbit).play()
}
function App() {
  return (
    <div className="container">
    <Card className=""></Card>
    </div>
  );
}

export default App;
