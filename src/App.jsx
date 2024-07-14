
import Header from './assets/component/Header';
import Hero from './assets/component/Hero';
const App = () => {

  return (
    <div>
      <BrowserRoute>
        <Routes>
          <Routes path="/" element={<Header/>} />
          <Routes path="/hero" element={<Hero/>} />
        </Routes>
      </BrowserRoute>
        
    </div>
  );
};

export default App;

