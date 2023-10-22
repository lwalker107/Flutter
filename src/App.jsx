import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer, Newsfeed, Searchbar } from './components';

const App = () => {
  return (
  <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat
         bg-center">
          <Header />

      </div>

    </div>
  </BrowserRouter>
  )
  
}
export default App
