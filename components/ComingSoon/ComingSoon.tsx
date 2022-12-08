import { useAppContext } from '../../Context/appContext';
import Link from 'next/link';

const ComingSoon = ({ title, text }) => {
  const { spanish } = useAppContext();
  return (
    <>
      <div className='p-6 mt-6 text-center'>
        <h1 className='text-3xl text-white lg:text-5xl'>{title}</h1>
        <h2 className='mt-4 text-2xl italic text-white'>{text}</h2>
      </div>
      <div className='flex justify-center py-8'>
        <Link href='/' passHref>
          <svg
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            width='260'
            height='168'
            fill='white'
            viewBox='0 0 429 278'
          >
            <path d='M136.4 17.1c-4 4.2-13.3 9.5-22.4 12.8-8 2.9-9.9 5.4-4.4 5.9 1.9.2 4.5-.5 6.5-1.7 4.2-2.6 6.9-2.7 6.9-.3 0 5.2 12 47.8 14.3 50.9 1.5 2.1 5 1.5 8-1.2 3.3-3.1 3.4-5.7.6-12.7-1.2-2.9-3-7.8-3.9-10.8-1-3-4.3-11.6-7.4-19L129 27.5l2.7-2c4.8-3.5 9.3-8.3 9.3-9.9 0-2.4-1.3-2-4.6 1.5zM176.2 26.4c-3 6.6-8.2 42.6-6.9 47.8.9 3.4 4.3 4.5 15.7 5.3 7.6.5 9.9.3 11.5-.9 2.4-1.7 2.2-1.8-8.2-3.7-8.2-1.4-7.9-.8-5.9-10.9l1.2-6.5 6.6.3c4.8.2 6.8-.1 7.7-1.2 2.1-2.6.3-3.6-6.5-3.6-4.5 0-6.4-.4-6.4-1.3.1-.6 1.1-5.9 2.4-11.7l2.2-10.5 7.9-.5c7.7-.5 10.5-2 6.8-3.5-1-.4-7.4-1-14.3-1.2l-12.6-.5-1.2 2.6zM238.1 44.8c-4.6 7-25.7 42.7-26.4 44.5-2.2 5.8 7.2 8.1 11.9 3 1.4-1.5 4.8-6.7 7.6-11.5 2.8-4.9 5.5-9.1 6.1-9.5.5-.3 4.5-.5 8.8-.4 9.6.3 14-1.5 17.7-7.2 4.6-6.9 2.6-14.4-4.6-17.4-3.4-1.4-3.9-1.4-7.9.6-5.3 2.5-5.3 2.5-5.3.3s-2.7-6.2-4.3-6.2c-.7 0-2.3 1.7-3.6 3.8zm18.7 8c.4 2.9-4 10.5-7.7 13.1-3 2.1-7.6 2.8-8.5 1.2-.7-1.1 4.7-9.7 8.7-13.9 3.6-3.8 7-4 7.5-.4zM69.2 57.7c-3.8 3.9-8.1 8.9-9.6 11.2l-2.8 4 3.6 5.3c4.3 6.5 24.9 27.8 29.5 30.6 3 1.8 3.7 1.9 6 .7 2.9-1.5 14.4-14 15.4-16.8 1.5-4.1-.7-3.5-6.5 1.8-3.4 3-6.4 5.5-6.8 5.5-.4 0-3-2.7-5.9-5.9l-5.1-6 4-4.6c3.9-4.5 5.3-9.5 2.7-9.5-.7 0-3 2.3-5.1 5-2.1 2.8-4.2 4.9-4.6 4.8-1.3-.5-15-17.2-15-18.4 0-.6 1.2-2.1 2.6-3.5 4.2-3.9 6.8-8.9 5.5-10.2-.9-.9-2.8.6-7.9 6z' />
            <path d='M277 88.8c-8.4 4.3-23.3 13.8-29.7 18.9-2.9 2.3-4.3 4.2-4.3 5.8 0 2.3 0 2.3-5.1-1-6.8-4.6-11.8-5.8-20.9-5.2-6.6.5-8.9 1.3-18.8 6.3-12.9 6.5-16.5 6.8-22.8 1.7-14.9-12-35.6-18.9-49.9-16.5-25.2 4.2-39.3 26.5-39.6 62.7-.1 13.9 1.1 21.8 5.1 32.7 11.2 30.5 33.2 43.2 60.5 34.7 8-2.4 15.8-7.5 27.6-18.1 12.7-11.3 13.9-11.6 26-7.9 12.6 3.8 18.2 4.5 24.7 2.8l5.2-1.4v2.8c0 3.3.9 5.9 2.1 5.9.5 0 .9-1.2.9-2.8 0-3.5 2.3-6.8 6-8.7 4.5-2.3 28.6-1.7 27.8.6-.2.5-4.3 5-9.3 9.9-11 11.1-17.9 15-26.7 15-6.6 0-9.8-2.1-9.8-6.6 0-1.4-.4-2.3-1-1.9-1.4.9-1.2 4.1.5 7.4 3 6 13.8 7.1 23.2 2.5 5.5-2.7 16.3-12.4 24-21.8l4.1-4.9 5.6.7 5.6.7-.7 7.4c-1.2 14.8 4.2 18.3 15.8 9.9 4.4-3.2 10.2-10 16.8-19.7 2.7-4 3.7-4.7 6.5-4.7 5.9 0 6.2 2.1 1.3 8.1-8.2 10.1-9.9 16.4-5.2 19.5 3.5 2.3 8.3.4 15.4-6.2l5.9-5.4-.6 4.5c-.3 2.8 0 5 .8 6 2 2.4 7.2 1.8 12.2-1.4 4.5-2.9 13.4-12.8 12.3-13.9-.2-.3-3.2 2.3-6.6 5.7-6.8 6.9-10.8 9.4-12.9 8.1-2-1.3-.7-7.9 3.4-16.4 3.2-6.7 4-7.6 6.9-8 1.7-.3 4.9-.8 7-1.1 6.1-1 4.5-2.8-1.8-2-3 .3-5.5.4-5.5 0 0-1.3 4-8.2 5.4-9.4 1.8-1.5 2.1-4.7.6-5.6-2.2-1.4-4.8.8-7.9 6.8-4.2 7.8-4.8 8.5-7.3 8.9-2.5.4-3.7 2.8-1.4 2.8 2.7 0 1.8 2.2-3.7 9.4-5.7 7.6-13 14.2-16.2 14.8-4.9.8-2-8.4 5.9-18.8 6.3-8.4 6.2-8.8-1.9-8.5-6.2.2-7.2-1-4.6-5.3 3.2-5.1 2.3-6.1-2.5-3-4.8 3.1-7.9 7.5-6.3 9.1 1.4 1.4.1 3.9-6.6 12.8-6.7 8.9-13.7 14.4-18.2 14.5-2.9 0-3.6-3.7-2.3-11.5.5-3.3 1-6.1 1-6.3 0-.1 1.6-.2 3.5-.2 5.8 0 13-3.8 11-5.8-.3-.3-.9-.1-1.3.5-1.6 2.5-12.2 4.7-12.2 2.5 0-2.5 6.7-20 10.6-28 2.6-5.1 4.4-9.6 4.1-9.9-2-2-6.4 1.8-16.5 14.4-6.1 7.6-12.4 15.4-14 17.3l-2.9 3.4-10.4-1.7c-5.7-1-12.3-1.7-14.6-1.7h-4.2l2.7-5.2c1.5-2.9 3.6-9.8 4.8-15.7l2-10.6 23.5-2.7c12.8-1.5 37.7-4.3 55.2-6.2l31.8-3.5 3.6 2.5c2 1.3 4.4 2.4 5.5 2.4 1.1 0 2.3 1.1 2.8 2.5 1.3 3.5 3.8 3.1 4.8-.8l.8-3.2.7 2.7c1 3.7 4.7 3.9 4.7.3 0-3.1 1.2-3.2 2.5-.4 1.6 3.6 3.3 2.8 4.9-2.4.4-1.2 1.6-1.7 4.5-1.7 5.4 0 7.1-.8 7.1-3.4 0-1.2 1.1-3.8 2.5-5.8 3.4-5 3.2-8-1-12.7-1.9-2.1-3.5-4.8-3.5-6.1 0-2-.3-2.1-4.2-1.5-2.4.3-5 .8-5.8 1.1-.9.2-2.2-.9-3.3-2.7-1.3-2.3-2.2-2.9-3.5-2.4-.9.4-4.2.9-7.2 1.1-7.1.5-8 .9-8 3.4 0 1.1-.5 2-1.1 2-.6 0-2.8 1.8-5 4-2.4 2.4-4.9 4-6.3 4-1.3 0-26.1 2-55 4.5-29 2.5-52.9 4.5-53 4.5-.2 0-1.2-3.5-2.1-7.8-1-4.2-2.1-8.5-2.6-9.5-1.7-3.1-.2-1.8 2.5 2.3s7.2 7.7 8.2 6.7c.4-.3-1.2-3.8-3.5-7.7-2.2-4-4.1-7.5-4.1-7.8 0-.4 3.1-2.3 6.9-4.3l6.9-3.7 5 5.5c4.6 5.1 7.2 6.1 7.2 2.9 0-.7-1.6-3.1-3.5-5.3-1.9-2.3-3.5-4.6-3.5-5.1s4.7-3.4 10.5-6.5c10.1-5.2 10.6-5.4 11.6-3.5 1.8 3.4 8.1 9.8 9.5 9.8 2.2 0 1.6-2.2-2.2-8-5.4-8.2-12.3-16-14.3-16-.9 0-5 1.7-9.1 3.8zM149.5 105c8.8 2.9 12 4.6 26 14.4 3.5 2.4 4.7 2.7 10 2.4 4.8-.3 7.2-1.1 12-4.1 15.9-9.8 30.2-10 40.9-.6 6.1 5.3 8.3 10 9.9 20.1l1.3 8.2 4.9-.2c5.6-.3 60.3-4.4 90.9-6.8 10.9-.8 19.9-1.4 20.1-1.2.1.2.5 2.4.7 5 .4 3.2.2 4.8-.6 4.8-.6.1-26.5 2.9-57.6 6.3l-56.5 6.3-.6 8.9c-1 13.2-5 22.8-12.1 28.9-7.7 6.6-17.6 7.4-32 2.6-14.5-4.9-15.4-4.6-30 8.7-15.8 14.3-28.1 19.8-43.1 19.1-15.9-.7-27.6-9.5-36.1-27.1-7-14.5-8.1-19.5-8-38.7.1-17.8 1.7-26.3 6.8-37.6 2.7-5.9 10-14.3 15.3-17.5 9.5-5.9 23.2-6.5 37.8-1.9zm256.1 26.5c2.4 2.5 4.4 5.1 4.4 5.9 0 .8-1.1 2.8-2.5 4.4-1.4 1.7-2.5 3.9-2.5 5s-.6 2.2-1.3 2.5c-.7.3-7.9 1.1-16 1.8-13.4 1.2-14.9 1.1-16.4-.4-3.3-3.3-3.3-16.1.1-19.5 1.3-1.3 15.4-3.4 27.4-4.1 1.5-.1 3.8 1.5 6.8 4.4zm-112.3 56.2-4.3 12.8-4.8-.3c-2.6-.2-4.8-.5-5-.7-.2-.2 2.4-3.8 5.7-8 3.3-4.1 7.4-9.6 9.1-12 1.7-2.5 3.2-4.5 3.4-4.5.2 0-1.7 5.7-4.1 12.7z' />
            <path d='M190.1 135.7c-.7 1.6-1.3 3-1.3 3.3-.1.3-.8 1.1-1.7 1.9-1.1.9-.9.9.9-.1 1.3-.8 3-2.9 3.7-4.7 1.6-3.8.1-4.2-1.6-.4z' />
            <path d='M200.2 133.7c-2.2.4-2.3.8-1.7 4.1.4 2 .8 4.3.8 4.9 0 .7.8 1.3 1.8 1.3s2 .4 2.4 1c.3.5 1.4.1 2.5-1 2.4-2.4 5-2.6 5-.4 0 1.3-.3 1.4-1.3.5-1.9-1.5-2.7-.4-2.7 4.1 0 3-.4 3.8-1.8 3.8-1 0-2.3-.5-3-1.2-.9-.9-1.2-.9-1.2 0 0 .7-.5 1.2-1.1 1.2-.6 0-.9-.7-.6-1.4.4-1 .1-1.3-.9-.9-.7.3-1.4 1.6-1.4 3 0 1.3-.3 2.2-.7 2-.5-.3-1.7-.1-2.8.4-1.9.7-1.9.8.1.8 1.2.1 2.4.8 2.8 1.6 1.4 3.6-5.9 17.5-9.1 17.5-.7 0-2.6 1.4-4.3 3-2.6 2.6-3.8 3-8.4 3-10.1 0-23.6-5.6-23.6-9.7 0-.8-.8-2.5-1.7-4-1.2-1.8-1.8-5.1-2-11.2-.5-18.3-.4-17.8-3.3-17.8-1.9 0-3.5 1.3-6.3 5.1-2.6 3.5-3.4 5.3-2.6 6.1.7.7 1.6.3 2.9-1.3 1.9-2.3 4-2.9 4-1.1 0 .6.6.9 1.4.6.8-.3 2 .1 2.7.9.7.8.8 1.4.3 1.3-.5-.1-2 0-3.4.1-1.7.2-2 .4-.8.7 1 .2 1.5 1 1.1 1.9-.3.8 0 1.4.6 1.4s1.1.5 1.1 1.1c0 .5-.5.7-1.2.3-.7-.5-.9-.2-.5.9.3.9 0 1.8-.9 2.1-.8.3-1.2.2-.9-.3.3-.5.1-1.2-.5-1.6-.5-.3-1-.1-1 .4 0 .6-.7 1.1-1.5 1.1-1.8 0-2-1.7-.2-2.3 1.8-.6.4-1.7-2.6-1.9-2.9-.3-2.7-1 .5-1.5 1.1-.2 2.7-1.1 3.4-2.1 1.8-2.4.8-2.9-1.6-.7-1.6 1.5-2.2 1.6-3.5.5-1.4-1.1-2.2-.7-5.8 2.8-2.3 2.3-5.3 5.1-6.7 6.2l-2.5 2.1 12.1-.6 12.1-.7.6 3.1c1 5 5.7 14 8.1 15.6 4.4 2.9 14.8 5.5 22.2 5.5 6.5 0 7.6-.3 9.6-2.4 1.3-1.4 3.6-3 5.1-3.6 1.6-.5 3.1-1.9 3.4-3 .3-1.1.9-2 1.4-2 1.2 0 5.9-9.5 5.9-11.8 0-1.1-.7-2.5-1.5-3.2-2.3-1.9-1.8-2.7 1.8-2.8 9.1-.1 42.6-2.4 45.1-3 2.8-.7 2.5-.9-4.5-3.6-8.3-3.3-23.5-10.4-29.1-13.8-2.1-1.2-4.1-1.9-4.5-1.5-1 1 4.8 6.7 6.1 6 .6-.3.8-.3.4.2-.5.5 2.1 2.8 5.7 5.2 5.1 3.4 7.8 4.5 13.1 5.2 3.6.6 6.9 1.3 7.3 1.7 1.1 1.1-14.3-.8-17-2.2-1.5-.7-3-1-3.4-.6-.5.4-.5.2-.2-.4.4-.6-.3-2-1.4-3-1.7-1.6-2.2-1.6-3.1-.4-.8 1.2-.9 1.2-.4-.3.4-1.2-.2-2.1-1.7-2.8-1.2-.6-3.5-2.8-5.2-4.9-1.6-2.2-3.4-3.9-4-3.8-.5 0-2.1.3-3.3.5zm4.5 7.8c.8 2.3-.4 3-2.2 1.2-1.9-2-1.9-2.7 0-2.7.9 0 1.8.7 2.2 1.5zm7.5 7.7c-.5.5-.8-.2-.7-1.9.3-4.3.8-5.1 1.2-1.9.3 1.6 0 3.3-.5 3.8zm-2.2-2.4c0 1.5-.2 1.5-1 .2-1.3-2-1.3-3.3 0-2.5.6.3 1 1.4 1 2.3z' />
            <path d='M184.6 137.3c-3.3 2.8-3.5 3.3-1.7 3.4 1.1.1 2.3-.2 2.6-.8.3-.5-.2-.6-1.2-.3-1 .4-.2-.7 1.7-2.4 4.7-4.2 3.5-4.1-1.4.1zM193.2 136.5c-1.7 3.6-1.5 4.8.6 4.1 1.4-.5 1.4-.4-.2.9-1.4 1.1-1.6 1.5-.5 1.5 3.1 0 4.2-1.7 3.5-5.4-.8-4.2-1.8-4.6-3.4-1.1zM153 136.9c0 1.8 4.9 6.3 6.1 5.6.6-.4.9-.8.7-.9-.2 0-1.8-1.4-3.6-3-1.7-1.7-3.2-2.4-3.2-1.7z' />
            <path d='M149.7 138.3c-.3.8-.2 3.8.1 6.8l.7 5.4 6.3.8c5.1.6 6.6.5 7.8-.8 1.8-1.8 2-1.8 4.3-.6 1.4.8 1.7.6 1.6-.7-.1-.9-.7-2.7-1.3-3.9-1.5-2.7-.6-5.3 1.8-5.3 2.2 0 3 2.2 2.6 7.2-.3 3.3-.1 3.5 1.5 2.5 1.5-.9 2.3-.9 3.7 0 2 1.4 6.9 3.7 10 4.7 1.7.6 2.2.3 2.2-1 0-3-4.9-8.3-9.8-10.5-2.6-1.2-5.6-3-6.7-4-2.6-2.3-7.5-1.3-9 1.9-.5 1.2-1.7 2.4-2.5 2.7-.9.3-2.4 1.9-3.3 3.5-1.4 2.4-2.4 3-4.7 2.8-2.9-.2-2.9-.2-1-2 2.5-2.3 2.5-2-.6-6.5-3.2-4.8-3.1-4.6-3.7-3zm5.1 7.1c-.2.1-1.2.8-2.3 1.6-1.8 1.4-1.9 1.3-.8-.1.7-.9 1-1.9.6-2.3-.4-.4.1-.4 1 0 1 .3 1.7.7 1.5.8z' />
            <path d='M158.6 138.5c1 .8 2.3 1.5 2.8 1.5.6 0 .1-.7-1-1.5-1-.8-2.3-1.5-2.8-1.5-.6 0-.1.7 1 1.5zM130 143.7c-4.1 3-12.4 8.4-18.5 12-6 3.6-11.2 6.7-11.5 7-1.4 1.3 15.6-1.2 17.3-2.6 5.7-4.5 18-16.9 19.2-19.4.7-1.5 1.3-2.7 1.2-2.6-.1 0-3.6 2.5-7.7 5.6zM158.5 155.4c9.3 4.7 9.5 4.9 9.5 10.4.1 4.3.2 4.6 1.5 2.8.8-1.1 1.5-3.2 1.5-4.7 0-3.3 3.7-4.8 9.3-3.9 4.9.9 10.1-.1 10.5-2 .2-1-1.7-2.2-5.7-3.6-6.5-2.2-9.1-1.6-9.1 2.5 0 1.7-.6 2.1-3.4 2.1-2.4 0-3.6-.5-4-1.8-.9-2.7-3.6-3.9-10.6-4.6l-6.5-.7 7 3.5z' />
            <path d='M153.3 159.9c-1.4 1.1.2 8.1 1.9 8.1.5 0 .6-.5.2-1.1-.5-.8-.1-.8 1.4 0 2.9 1.6 3.5 1.4 2.9-.9-.3-1 0-2.1.7-2.3.8-.3.8-.8-.1-1.9-.7-.8-1.1-1.7-.8-2 .7-.7-5.3-.6-6.2.1zM185.5 162.4c-2.8 3.4-3.1 5-1.4 6.7 1.5 1.5 2.2 1.6 4.3.6 1.4-.7 2.6-1.8 2.6-2.5 0-.6.6-1.2 1.3-1.3.6 0 .2-.4-1-.9-1.3-.5-2.3-1.4-2.3-1.9 0-1.5-2.4-2-3.5-.7zM168.8 171.7c.8.3.5 1.1-1 2.5l-2.3 1.9 2.8-.4c2-.3 2.5-.1 1.8.6-.6.6-1.1 1.4-1.1 1.7 0 1.2 3.5.7 4.8-.7.7-.7.9-1.3.4-1.3s-.7-1.1-.4-2.5c.4-2.3.1-2.5-2.9-2.4-1.9 0-2.8.3-2.1.6zM227.8 177c-1.6 3.6-3.2 4-2.6.5.3-1.4.2-2.5-.3-2.5-1.3 0-1.6 1.3-1 4.3l.6 2.9 2.6-2.1c1.5-1.1 2.9-1.7 3.3-1.4.3.3.6-.6.6-2 0-3.6-1.5-3.4-3.2.3zM219.7 177.6c-.3.3-.4 1.1-.1 1.8.3.7-.4 2.1-1.6 3.1-1.8 1.6-3 .8-1.3-.9 1.1-1 1.2-3.6.2-3.6-.5 0-1.1 1.1-1.5 2.5-.6 2.3-.7 2.4-1.9.8-1.2-1.6-1.4-1.6-2.9-.1-.9.9-1.6 2.1-1.6 2.7 0 .5-.9.9-1.9.8-1.5-.1-1.7-.4-.9-1.4.8-1 .7-1.2-.6-.7-1.9.7-2 2.3-.3 4.6 1.2 1.5 1.4 1.5 2.5-.3.9-1.3 1.9-1.8 3.2-1.4 1 .3 2.1.1 2.5-.5.4-.6 1.3-.9 2.1-.6.7.3 1.6.1 1.9-.4.4-.6 1.5-1 2.5-1 2.4 0 3.3-1.5 2.5-4-.6-2-1.6-2.5-2.8-1.4zM119.5 179.9c-.6 1 2.5 3.1 4.4 3.1 1.7 0 1.3-2.7-.5-3.4-2.2-.8-3.2-.8-3.9.3z' />
            <path d='M193.1 182.6c.2.7 3.9 4.4 8.2 8.4l7.7 7.2 6.3-2.5c6.3-2.5 18.4-5.4 24.6-5.9 2-.2 3.7-.9 3.9-1.8.4-1.2.2-1.3-.9-.4-.8.6-3.6 1.2-6.4 1.3-6.6.3-10.5.9-13 2.1-1.1.5-4.8 2-8.2 3.3l-6.1 2.4-3.4-3c-1.8-1.7-5.5-5.1-8.2-7.6-2.7-2.5-4.7-4.1-4.5-3.5zM134.2 185.1c.2.6 4.3 2.3 9.1 3.9 13.2 4.2 12.8 3.9 8.2 6.1-2.2 1-2.9 1.6-1.5 1.3 1.4-.3 3.5-1.2 4.7-2 1.2-.8 3.6-1.2 5.5-.9l3.3.5-3.2-1.2c-1.8-.6-3.3-1.5-3.3-1.9 0-.5-.9-.9-1.9-.9-1.1 0-5.8-1.4-10.4-3-9.3-3.3-11.1-3.6-10.5-1.9zM119.5 191c-1.2 2 .6 5 3 5 3 0 3.9-2.4 1.6-4.4-2-1.8-3.7-2-4.6-.6zM117.7 200.2c-.8 2.7.8 4.7 2.4 3.1 1.3-1.3.9-4.5-.7-5-.6-.2-1.4.6-1.7 1.9zM154.5 205.3c1.9 1.5 1.9 1.8.4 4.4-.9 1.5-2.1 2.7-2.8 2.5-.7-.1-1 .2-.6.8.6 1-.7 1.6-8.5 4.6-2.2.8-2.8 1.3-1.5 1.3 3.4.1 12.9-5.3 14.5-8.2 1.6-2.9.7-5.7-2.1-6.5-.8-.2-.5.3.6 1.1zM119.2 210.2c.2 1.2 1 2.3 1.8 2.3 2.2 0 1.9-3.9-.3-4.3-1.5-.3-1.8.1-1.5 2zM135.3 210.7c-.7.2-1.3 1-1.3 1.6 0 1.8 3.1 4.6 4.6 4 1.7-.6 1.8-3.5.2-5.1-1.3-1.3-1.6-1.3-3.5-.5zM126 213.9c0 2.2 3.7 3.8 5.2 2.3 1.7-1.7.1-4.2-2.7-4.2-1.8 0-2.5.5-2.5 1.9zM120.4 217.4c1.1.9 2.4 1.6 3 1.6 1.2 0 .7-.5-2.4-1.9-2.4-1.1-2.4-1.1-.6.3zM126.3 219.7c.9.2 2.5.2 3.5 0 .9-.3.1-.5-1.8-.5-1.9 0-2.7.2-1.7.5zM135.3 219.7c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5zM27.6 110.4c-1.4 1.4-2.6 3.2-2.6 4.1 0 2.7 5.6 9.9 11.9 15.5 3.4 2.8 5.8 5.6 5.5 6.1-.3.5-3.1.9-6.2.9-6.2 0-12.9 1.3-14.4 2.8-.5.5-1.1 2.5-1.5 4.5-.5 3.3-.3 3.7 3.8 6.3 2.4 1.5 10.5 5.4 17.9 8.5 7.4 3.1 16.5 7.1 20.3 8.8 7.3 3.3 9 5.7 3.2 4.8-3.8-.6-5.3.6-3.5 2.8 2.2 2.7 7.9 1.8 11.1-1.6 2.4-2.5 2.9-4 2.9-8 0-4.3-.4-5.1-3.4-7.4-3.9-2.9-28.3-12.6-36.6-14.5-8.5-1.9-8.9-2.3-3-3.1 11.9-1.5 16.2-1.1 21 2.1 2.5 1.6 5.2 3 6.1 3 2.5 0 4.2-2.7 3.5-5.4-.7-2.9-5-4.6-11.2-4.6-3.7 0-5.1-.7-10.1-4.9-3.2-2.6-6.9-6-8.2-7.5-2.1-2.3-2.2-2.6-.7-2.6 1 0 5.7 1.7 10.5 3.9 9.7 4.3 23.3 8.7 30.2 9.6 6 .9 10.5-1.3 12.5-6.1 1.7-4 1.1-7.4-1.3-7.4-1 0-1.4.6-1 2 .4 1.5 0 2-1.6 2-3.3 0-11.8-2.5-15.7-4.5-5.1-2.6-29.9-11.7-33.7-12.2-2.5-.4-3.8.1-5.7 2.1zm32.3 30.5c1 .6 1 1 .1 1.6-.7.4-1.9 0-2.8-.9-1.4-1.3-1.4-1.6-.2-1.6.8 0 2.1.4 2.9.9zM43.5 189.5c-10.1 2.8-12.7 4.2-19.2 10-3.7 3.3-5.4 5.6-5.9 8.1-.8 4.5 0 5.3 2.9 2.7 3.4-3.2 9.8-6.1 22.8-10.4 9.5-3.1 13.6-3.9 20.5-4.1 7.2-.3 8.8 0 9.7 1.4 1.7 2.6-1.3 5.1-10.6 8.7-12.1 4.5-24 7.2-34.7 7.8-5.2.3-9.7.7-9.9.9-.9.9 1.1 5.4 3.8 8.1 3.6 3.8 11.2 5.7 19.1 4.7 10.2-1.2 23.3-6 29.6-10.9 7.6-5.9 9.6-9.5 8.8-15.5-.9-6.2-1.9-7.7-7.2-11.1-4.2-2.6-5.3-2.9-13.1-2.8-5.7 0-11.3.8-16.6 2.4zM174.2 231.6c-2.6 1.8-2.9 6.5-.7 10.4 1.9 3.3 1.8 4-.2 4-7.2 0-14.3 4.9-14.3 9.8 0 6.1 6.6 8.7 17.4 7 9.2-1.4 17.6-6.8 17.6-11.2 0-1.7-.5-1.5-3 1.5-3.7 4.6-11.3 7.9-19.8 8.6-6 .5-6.9.3-8.7-1.7-1.8-1.9-1.8-2.4-.5-4.7 2.6-4.5 6.5-6.6 13-7.1 3.3-.2 6-.8 6-1.3s-.6-.9-1.4-.9c-2.3 0-4.6-4.1-4.6-8.1 0-7.2 6.2-8.1 9.5-1.4 1.1 2.2 2.1 4.2 2.3 4.4.1.3.7 0 1.2-.5 1.6-1.6-.1-5.1-4-7.9-3.9-2.9-6.6-3.2-9.8-.9zM220.2 232.5c-1.6 1.3-4.2 4.9-5.7 7.8-2.3 4.4-3.2 5.3-5 4.9-3-.5-9.6 3-12.9 6.8-2.9 3.5-3.2 5-1.4 6.8 2.2 2.2 5.2 1.2 9.6-3 3.8-3.7 4.3-3.9 3.6-1.8-.5 1.4-.9 4.5-.9 7 0 3.6.4 4.5 1.9 4.8 1 .2 2.3-.1 3-.8.8-.8.7-1-.6-.5-2.8 1.1-3.2-2-1.4-8.8 1.6-5.7 2.3-6.7 8.1-11.4 6.5-5.4 10.1-10.4 9.1-12.9-.8-2.1-4.1-1.7-7.4 1.1zm5.7 1.6c-1.6 3-7.9 9.8-10.2 11.1-1.8.9-1.8.7.4-3.1 2.7-4.9 8.8-11.3 10-10.5.5.3.4 1.4-.2 2.5zm-15.8 14.8c-1.2 2.1-10.8 10.1-12.2 10.1-1.5 0-1-3.4.9-5.8 2.5-3.2 7.3-6.2 10-6.2 1.9 0 2.1.3 1.3 1.9zM281.6 242c-1.4 2.2-3 4-3.5 4s-.7.8-.4 1.8c.2 1.1-1.1 3.5-3.7 6.5-6.1 6.9-10.3 6-6.5-1.4 2.8-5.4.4-5.2-5.5.5-7.7 7.3-11.2 7.7-7 .8 2.4-3.9 7.5-7.2 11.3-7.2 1.6 0 2.6-.4 2.2-1-1.8-2.9-10 .7-16 7-6.3 6.6-13.5 9.1-13.5 4.6 0-4.4 8.3-12.3 10-9.6.6.9.9.9 1.5 0 1.1-1.8-1.1-3.3-3.8-2.6-1.4.3-4.6 2.5-7.2 4.9-4.7 4.2-4.8 4.4-3.4 7.2 1.8 3.9 6.5 4.5 11.3 1.6 3-1.9 3.5-1.9 4.6-.6 2 2.4 5.4 1.8 8.6-1.6l2.9-3.1.5 3.4c.6 4.2 2.6 4.6 7.2 1.4l3.7-2.5.3 2.2c.5 3.5 4.1 3.3 8.4-.5 2.1-1.8 3.4-2.7 3-2-1.2 1.9.3 5.2 2.4 5.2 1 0 3.3-1.2 5-2.6 3.1-2.7 3.1-2.7 3.7-.5.7 2.9 4.7 3.7 7.9 1.6 1.4-.9 2.8-1.4 3.1-1.1.3.3 1.8-.1 3.4-1 2.8-1.4 2.9-1.4 1.9 1.1-1.5 4 .1 3 6.2-3.7 5.8-6.5 8.1-7.3 5.3-1.8-3.9 7.6.8 10.5 7.4 4.4 2.3-2 4.1-4 4.1-4.4 0-.4-1.6.8-3.6 2.6-6.2 5.9-8.5 3.4-4.4-4.7 1.2-2.2 1.8-4.4 1.5-4.9-1-1.5-6 1.5-9.4 5.7-3.5 4.2-3.8 3.9-1.6-1.4 1.8-4.3 1.8-4.3.1-4.3-.8 0-1.9 1.4-2.5 3.2-.6 1.8-2.1 4.2-3.3 5.5-2.6 2.8-5.4 3.1-4.3.5 1.5-3.4 1.7-6.2.6-6.2-.6 0-1.1.6-1.1 1.3 0 2.4-3.1 7.7-5.1 8.8-4.2 2.2-5.2-2.2-1.9-7.6 2.2-3.5 4.5-4.9 6.2-3.9.6.4.9.1.6-.7-.9-2.8-3.9-2-7.3 1.8-7.2 8-9.7 10.3-11.1 10.3-1.9 0-1.7-2.7.6-7.9 2.4-5.2 2.4-5.1.6-5.1-.8 0-1.8 1-2.1 2.1-.9 2.9-8.4 10.9-10.1 10.9-2 0-1.7-3.5.6-8 1.5-3 2.6-4 4.5-4 1.3 0 2.7-.5 3-1 .4-.7-.2-.9-1.9-.4-3.1.7-3.2-.2-.6-3.6 2.3-3 2.5-4 .6-4-.7 0-2.5 1.8-4 4z' />
            <path d='M292.5 241c-1.7 1.8-1.7 2-.1 2 .9 0 1.9-.7 2.3-1.5.9-2.5-.2-2.7-2.2-.5zM225.8 251.1c-3.5 5.4-7.9 9.1-9.4 7.6-1.1-1.1.5-5.5 3.2-8.6 2.5-3 2.5-3.1.5-3.1-2.7 0-6.5 7.2-5.7 10.6.9 3.5 5.9 3.3 8.3-.3l1.8-2.7.5 2.9c.7 4 3.9 4.4 7.6 1.1 1.6-1.4 2.4-2.6 1.8-2.6-.6 0-1.7.7-2.4 1.5-3.8 4.5-5.5-1.7-2-7 2.3-3.4 2.6-5.5.8-5.5-.7.1-3 2.8-5 6.1z' />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default ComingSoon;
