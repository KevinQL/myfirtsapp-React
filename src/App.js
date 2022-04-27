//import logo from './logo.svg';
import './App.css';
import {Testimonio} from  './componentes/Testimonio';

function App() {

  const info = [ 
    {
      nombre: 'Shawn Wang',
      pais: 'Singapur',
      imagen: '1',
      detailimg: "shaw",
      cargo: 'Ingeniero de Software',
      empresa: 'Amazon',
      testimonioimportante: 'freeCodeCamp cambió mi vida',
      testimonio: 'Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tuve un trabajo de seis cifras como ingeniero de software.',
      testimonio2: ''
    },
    {
      nombre: 'Sarah Chima',
      pais: 'Nigeria',
      imagen: '2',
      detailimg: "Sarah",
      cargo: 'Ingeniero de Software',
      empresa: 'ChatDesk',
      testimonioimportante: 'freeCodeCamp fue la puerta de entrada a mi carrera',
      testimonio: '',
      testimonio2: 'como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación de un nivel principiante total a un nivel muy seguro. Fue todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble' 
    },
    {
      nombre:'Emma Bostian', 
      pais: 'Suecia',
      imagen:'3', 
      detailimg:"Emma", 
      cargo: 'Ingeniero de Software',
      empresa: 'Spotify',
      testimonioimportante:'freeCodeCamp me dio las habilidades', 
      testimonio: 'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se atascó. Estudiar JavaScript, así como estructuras de datos y algoritmos en',
      testimonio2: 'y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify'
    }
  ];

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros ex alumnos sobre freeCodeCamp:</h1>
          <Testimonio 
            brand={ info[0] } />

          <Testimonio 
            brand={ info[1] } />

          <Testimonio 
            brand={ info[2] } />
            
      
      </div>
    </div>
  );
}

export default App;
