import SmallContactSnippet from '@components/SmallContactSnippet';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className='px-4 pt-16 text-white'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center sm:text-left'>
          <SmallContactSnippet />
        </div>
        <figure className='mt-6'>
          <Image
            width={800}
            height={600}
            src='/images/landing/linda.jpg'
            alt='Picture little girl in traditional Nicaraguan dress'
            className='rounded-md'
          />
        </figure>
        <figure className='mt-6'>
          <Image
            width={800}
            height={600}
            src='/images/landing/dollsgrey.jpg'
            alt='Artisan holding traditional nicaraguan dolls'
            className='rounded-md'
          />
        </figure>
      </div>
    </div>
  );
};

export default Contact;
