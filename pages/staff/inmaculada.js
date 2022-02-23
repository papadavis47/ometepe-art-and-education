import Image from "next/image";
const Inmaculada = () => {
  return (
    <>
      <div className='section has-text-centered'>
        <h1 className='is-size-1 is-size-3-mobile has-text-light has-text-weight-light title mt-6'>
          Inmaculada Cruz
        </h1>
        <h2 className=' is-italic is-size-4 is-size-6-mobile has-text-weight-light has-text-light subtitle'>
          Painter and Chef
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
                <p>Artist Biography</p>
              </div>
              <div className='message-body'>
                <p className='is-size-6-mobile has-text-justified'>
                  Inmaculada Cruz was born on the Island of Ometepe, Nicaragua. From childhood, the
                  flora and fauna of this island influenced her artistic development. She learned to
                  paint the nature around her as she perceived it: the trees, flowers, animals,
                  farms, the people and their customs. She discovered later that her painting is
                  primitive - native and natural. It is not derivative in style and it is not
                  dependent upon sophisticated techniques.
                </p>
                <br />
                <p className='is-size-6-mobile has-text-justified'>
                  To this day, more than sixty years after beginning her artistic journey, her
                  painter’s soul continues to search for new forms and new techniques. She is
                  constantly renewing the way she works. For many years now she has been painting
                  not just the forms that she sees or that she remembers, but also those forms
                  produced by her imagination.
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
