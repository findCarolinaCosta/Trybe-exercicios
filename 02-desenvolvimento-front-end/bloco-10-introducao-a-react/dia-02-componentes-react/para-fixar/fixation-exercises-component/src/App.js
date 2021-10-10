import Image from './Image';
import './App.css';
import catImg from './images/cat-img.jpg'

function App() {
  return (
    <div>
      <Image source={catImg} alternativeText={'Cute cat staring'} />
    </div>
  );
}

export default App;
