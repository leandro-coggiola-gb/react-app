import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../Home/Home";

function App() {
  return (
      <div>
          <Header/>
          <main id='content'>
              <Home/>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
