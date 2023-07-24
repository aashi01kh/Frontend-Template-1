// App.js
import './App.css';
import AnotherSection from './components/AnotherSection';
import BlueSpace from './components/BlueSpace/BlueSpace';
import BusinessNavigation from './components/Business/BusinessNavigation';
import BlueFooter from './components/Footer/Footer';
import InfoSection from './components/InfoSection';
import LogosSection from './components/LogosSection';
import ServicesSection from './components/Services/ServicesSection';

const App = () => {
  return (
    <div className="App">
      <BlueSpace />
      <BusinessNavigation />
      <InfoSection /> 
      <div style={{ height: '60px' }} />
      <AnotherSection/>
      <div style={{ height: '30px' }} />
      <LogosSection/>
      <div style={{ height: '150px' }} />
     <ServicesSection />
     <div style={{ height: '30px' }} />
     <BlueFooter />
     <div style={{ height: '30px' }} />
    </div>
  );
};
export default App;
