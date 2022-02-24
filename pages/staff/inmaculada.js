import Image from "next/image";
import { useAppContext } from "../../src/Context/appContext.js";

const bioParagraphOneSpanish =
  "Inmaculada Cruz nació en la Isla de Ometepe, Nicaragua. Desde pequeña, la flora y fauna de esta isla influyó en su desarrollo artístico. Aprendió a pintar la naturaleza que la rodeaba tal como la percibía: los árboles, las flores, los animales, las granjas, la gente y sus costumbres. Más tarde descubrió que su pintura es primitiva, nativa y natural. No tiene un estilo derivado y no depende de técnicas sofisticadas.";

const bioParagraphTwoSpanish =
  "Al día de hoy, más de sesenta años después de iniciar su trayectoria artística, su alma de pintora sigue buscando nuevas formas y nuevas técnicas. Ella está renovando constantemente su forma de trabajar. Desde hace muchos años pinta no solo las formas que ve o recuerda, sino también las formas producidas por su imaginación.";

const bioParagraphOneEnglish =
  "Inmaculada Cruz was born on the Island of Ometepe, Nicaragua. From childhood, the flora and fauna of this island influenced her artistic development. She learned to paint the nature around her as she perceived it: the trees, flowers, animals, farms, the people and their customs. She discovered later that her painting is primitive - native and natural. It is not derivative in style and it is notdependent upon sophisticated techniques.";

const bioParagraphTwoEnglish =
  "To this day, more than sixty years after beginning her artistic journey, her painter’s soul continues to search for new forms and new techniques. She is constantly renewing the way she works. For many years now she has been painting not just the forms that she sees or that she remembers, but also those forms produced by her imagination.";

const Inmaculada = () => {
  const { spanish } = useAppContext();
  return (
    <>
      <div className='section has-text-centered'>
        <h1 className='is-size-1 is-size-3-mobile has-text-light has-text-weight-light title mt-6'>
          Inmaculada Cruz
        </h1>
        <h2 className=' is-italic is-size-4 is-size-6-mobile has-text-weight-light has-text-light subtitle'>
          {spanish ? "Pintora y Chef" : "Painter and Chef"}
        </h2>
      </div>
      <div className='columns is-centered has-text-centered section pt-0'>
        <div className='column is-three-quarters'>
          <figure className='image is-3by2 shadow'>
            <Image src='/inmaculada.jpg' alt='Inmaculada Cruz, painter' layout='fill' />
          </figure>
          <div className='section'>
            <article className='message is-dark is-medium' id='mission'>
              <div className='message-header'>
                <p>{spanish ? "Biografia del artista" : "Artist Biography"}</p>
              </div>
              <div className='message-body'>
                <p className='is-size-6-mobile has-text-justified'>
                  {spanish ? bioParagraphOneSpanish : bioParagraphOneEnglish}
                </p>
                <br />
                <p className='is-size-6-mobile has-text-justified'>
                  {spanish ? bioParagraphTwoSpanish : bioParagraphTwoEnglish}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inmaculada;
