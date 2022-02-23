import Image from "next/image";

const Victor = () => {
  return (
    <div>
      <div className='section has-text-centered'>
        <h1 className='is-size-1 is-size-3-mobile has-text-light has-text-weight-light title mt-6'>
          Victor Fuentes
        </h1>
        <h2 className=' is-italic is-size-4 is-size-6-mobile has-text-weight-light has-text-light subtitle mb-0'>
          Painter and Poet
        </h2>
      </div>
      <div className='columns is-centered has-text-centered section pt-0'>
        <div className='column is-four-fifths'>
          <figure className='image is-16by9 shadow'>
            <Image
              className='shadow'
              src='/victor-portrait.jpg'
              layout='fill'
              alt='Victor Fuentes, painter'
            />
          </figure>
          <div className='section'>
            <article className='message is-dark is-medium' id='mission'>
              <div className='message-header'>
                <p>Artist Statement</p>
              </div>
              <div className='message-body'>
                <p className='is-size-6-mobile has-text-justified'>
                  The intention of my painting is to project Latin-American art and culture through
                  themes from my Latin roots. In this context, the goal of my work is to transmit my
                  knowledge, my sensibility and my love of art to the different cultures in
                  Washington State. In this sense, the visual arts has been my greatests connection
                  with the Pacific Northwest. Here, the various cultures allow me to learn from them
                  and thereby enrich my artwork - liberating my brush toward new expressions and
                  colors. I believe art lives within each one of us and this life force seeks a
                  universe of forms and colors that enrich humanity and touch the spirit.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Victor;
