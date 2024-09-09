import './App.css';
import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from './components/MyCarousel';
import MyCard from './components/MyCard';
import MyFooter from './components/MyFooter';

const App = () => {
  return (
    <div class='container'>
      <MyNavbar></MyNavbar>
      <MyCarousel></MyCarousel>
      <br></br>
      <MyCard></MyCard>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;