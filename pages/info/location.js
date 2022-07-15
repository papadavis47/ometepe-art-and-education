import Construction from "../../components/Construction";
import { useAppContext } from "../../Context/appContext.js";

const Location = () => {
  const { spanish } = useAppContext();
  return (
    <div className='text-white'>
      <div>
        <div className='flex flex-col items-center'>
          <div className='py-4'>
            <h2 className='text-lg'>Ometepe Art & Education Summer Camp</h2>
            <p className=''>
              <a
                href='https://goo.gl/maps/rqMghbq7jPJZu26u5'
                className='text-white border-b-2'
                target='_blank'
                rel='noreferrer'
              >
                1501 10th Avenue E, Seattle, WA 98122
              </a>
            </p>
          </div>
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.663026918947!2d-122.32065440000001!3d47.63268119999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015271ed8578b%3A0xbf14bda4c59770de!2s1501%2010th%20Ave%20E%2C%20Seattle%2C%20WA%2098102!5e0!3m2!1sen!2sus!4v1652244871638!5m2!1sen!2sus'
              width='600'
              height='450'
              style={{ border: "0" }}
              loading='lazy'
              allowFullScreen=''
              referrerPolicy='no-referrer-when-downgrade'
              className='mx-auto is-hidden-mobile'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
