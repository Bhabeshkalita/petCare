
import { Route, Switch } from 'react-router';
import './App.scss';
// import Footer from './Component/Common/Footer/footer';
// import NavBar from './Component/Common/NavBar/navBar';
// import Header from './Component/Home/Header/Header';
// import LostFound from './Component/Home/LostFound/LostAndFound';
// import OurService from './Component/Home/ourService/ourService';
import HomePage from './Page/HomePage/homePage';
import ProductPage from './Page/ProductPage/Product.page';

function App() {
  return (
    // <div>
    //   <NavBar />
    //   <Header />
    //   <OurService />
    //   <LostFound />
    //   <Footer />
    // </div>
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/product' exact component={ProductPage} />
    </Switch>
  );
}

export default App;
