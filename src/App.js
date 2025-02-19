import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
// import FullNavbar from './components/Navbar';
import CustomNavbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import ImageGrid from './components/ImageGrid';
import ImageItem from './components/ImageItem';

function App() {
  return (
    <div className="App">
     <CustomNavbar />
     <ImageSlider />
     <ImageGrid />
     <ImageItem />
    </div>
  );
}

export default App;
