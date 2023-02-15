import { useSpanishContext } from '@context/spanishContext';

const Location = () => {
  const { spanish } = useSpanishContext();
  return (
    <div className='px-2 text-white page-spacing'>
      <div className='flex flex-col items-center'>
        <div className='py-4 mt-8 sm:mt-4'>
          <h2 className='font-serif text-3xl sm:text-5xl'>Ometepe Art & Education</h2>
          <p className='mt-6 mb-6 text-center'>
            <a
              href='https://goo.gl/maps/2MPC2Z41EZpxxMmu7'
              className='text-xl text-white border-b-2'
              target='_blank'
              rel='noreferrer'
            >
              9402 116th St E Puyallup, WA 98373
            </a>
          </p>
        </div>
        <div className='hidden md:block'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.3500204000716!2d-122.3035839!3d47.150998799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490fc53b304b0a5%3A0xb2abf08bb6ac8942!2s9402%20116th%20St%20E%2C%20Puyallup%2C%20WA%2098373!5e0!3m2!1sen!2sus!4v1660269186624!5m2!1sen!2sus'
            width='700'
            height='550'
            style={{ border: '0' }}
            loading='lazy'
            allowFullScreen={true}
            referrerPolicy='no-referrer-when-downgrade'
            className='mx-auto'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
