import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";

const englishStatement =
  "The intention of my painting is to project Latin-American art and culture through themes from my Latin roots. In this context, the goal of my work is to transmit my knowledge, my sensibility and my love of art to the different cultures in Washington State. In this sense, the visual arts has been my greatests connection with the Pacific Northwest. Here, the various cultures allow me to learn from them and thereby enrich my artwork - liberating my brush toward new expressions and colors. I believe art lives within each one of us and this life force seeks a universe of forms and colors that enrich humanity and touch the spirit.";

const spanishStatement =
  "La intención de mi pintura es proyectar el arte y la cultura latinoamericana a través de temas de mis raíces latinas. En este contexto, el objetivo de mi trabajo es transmitir mis conocimientos, mi sensibilidad y mi amor por el arte a las diferentes culturas del estado de Washington. En este sentido, las artes visuales han sido mi mayor conexión con el noroeste del Pacífico. Aquí, las diversas culturas me permiten aprender de ellas y, por lo tanto, enriquecer mi obra de arte, liberando mi pincel hacia nuevas expresiones y colores. Creo que el arte vive dentro de cada uno de nosotros y esta fuerza vital busca un universo de formas y colores que enriquezcan a la humanidad y toquen el espíritu.";

const Victor = () => {
  const { spanish } = useAppContext();
  return (
    <div className='text-white'>
      <div className=''>
        <h1 className='mt-6'>Victor Fuentes</h1>
        <h2 className='italic'>{spanish ? "Pintor y Poeta" : "Painter and Poet"}</h2>
      </div>
      <div className=''>
        <div className=''>
          <Image
            className='shadow'
            src='/victor-portrait.jpg'
            width={800}
            height={500}
            alt='Victor Fuentes, painter'
          />
          <div>
            <div>
              <div className='my-3'>
                <p className='p-2'>{spanish ? "Declaración del artista" : "Artist Statement"}</p>
              </div>
              <div>
                <p className=''>{spanish ? spanishStatement : englishStatement}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Victor;
