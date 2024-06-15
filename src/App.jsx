import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighLights from './components/Highlights';
import Advertise from './components/Advertise';
const App = () => {
  return (
    <>
      <body className="bg-black">
        <Navbar />
        <Advertise />
        <Hero />
        <HighLights />
      </body>
    </>
  );
};

export default App;
