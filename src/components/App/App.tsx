import './App.scss';
import Description from 'components/Description/Description';
import Contacts from 'components/Contacts/Contacts';
import Skills from 'components/Skills/Skills';
import Education from 'components/Education/Education';
import Experience from 'components/Experience/Experience';
import EnglishLevel from 'components/EnglishLevel/EnglishLevel';
import About from 'components/About/About';

function App(): JSX.Element {
  return (
    <>
      <div className="container">
        <Description />
        <About />
        <div className="info">
          <div className="info-left">
            <Contacts />
            <Skills />
            <EnglishLevel />
          </div>
          <div className="info-right">
            <Education />
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
