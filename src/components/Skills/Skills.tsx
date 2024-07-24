import './Skills.scss';

function Skills(): JSX.Element {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>
          React
          <br />
          (Zustand, TanStack Query, React Router, React Hook Form)
        </li>

        <li>HTML/CSS</li>
        <li>SASS</li>
        <li>Git, Github</li>
        <li>Vite, Webpack</li>
        <li>Material UI</li>
        <li>Figma</li>
      </ul>
    </section>
  );
}

export default Skills;
