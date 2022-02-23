import React from "react";
import EnglishStatement from "../src/components/EnglishStatement";
import Image from "next/image";

const Test = () => {
  return (
    <div className='column'>
      <h1 className='has-text-light has-text-centered'>This is for testing stuff!</h1>
      <EnglishStatement />
      <div className='block mt-5'>
        <div className='card'>
          <div className='card-content'>
            <div className='content'>
              Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non
              mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-4by3'>
            <Image src='/linda.jpg' alt='Linda' layout='fill' />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Test;
