import './App.scss';
import Description from 'components/Description/Description';
import Contacts from 'components/Contacts/Contacts';
import Skills from 'components/Skills/Skills';
import Education from 'components/Education/Education';
import Experience from 'components/Experience/Experience';
import EnglishLevel from 'components/EnglishLevel/EnglishLevel';

function App(): JSX.Element {
  return (
    <>
      <div className="container">
        <Description />
        <div className="info">
          <div className="info-left">
            <Contacts />
            <Skills />
          </div>
          <div className="info-right">
            <Education />
            <Experience />
            <EnglishLevel />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
