import './Skills.scss';

function Skills(): JSX.Element {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-box">
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>
            React
            <br />
            (Redux, Zustand, TanStack Query, React Router, React Hook Form)
          </li>
          <li>HTML/CSS</li>
          <li>SASS</li>
          <li>Git, Github</li>
          <li>Vite, Webpack</li>
          <li>Material UI</li>
          <li>REST API</li>
          <li>Figma</li>
        </ul>
        <ul>
          <li>Node.js</li>
          <li>Websockets</li>
          <li>NestJS</li>
          <li>Docker</li>
          <li>Swagger</li>
          <li>Prisma</li>
          <li>PostgreSQL</li>
          <li>Jest</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
