import Construction from "../../src/components/Construction/Construction.js";
import { useAppContext } from "../../src/Context/appContext.js";

const Location = () => {
  const { spanish } = useAppContext();
  return (
    <div className='has-text-white'>
      <div>
        <div className='is-flex is-flex-direction-column is-align-items-center'>
          <div className='has-text-centered py-4'>
            <h2 className='is-size-3 is-size-5-mobile'>Ometepe Art & Education Summer Camp</h2>
            <p className='is-size-4 has-text-has-text-weight-medium '>
              <a
                href='https://goo.gl/maps/izzcyA5fQqippG4G9'
                className='has-text-white bottomBorder is-size-5-mobile'
                target='_blank'
                rel='noreferrer'
              >
                1625 19th Avenue Seattle, WA 98122
              </a>
            </p>
          </div>
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.513041268911!2d-122.30982158436912!3d47.616157679185335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ad15f542a73%3A0x6768442b2baea105!2s1625%2019th%20Ave%2C%20Seattle%2C%20WA%2098122!5e0!3m2!1sen!2sus!4v1650672957466!5m2!1sen!2sus'
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
