// import Construction from "../../src/components/Construction";
import Image from "next/image";
import { useAppContext } from "../../src/Context/appContext.js";

const Sandra = () => {
  const { spanish } = useAppContext();
  return (
    <>
      <div className='section has-text-centered'>
        <h1 className='is-size-1 is-size-3-mobile has-text-light has-text-weight-light title mt-6'>
          Sandra Gutierrez
        </h1>
        <h2 className=' is-italic is-size-4 is-size-6-mobile has-text-weight-light has-text-light subtitle'>
          {spanish ? "Maestra" : "Teacher"}
        </h2>
      </div>
      <div className='columns is-centered  section pt-0'>
        <div className='column is-three-quarters-desktop '>
          <figure className='has-text-centered my-4'>
            <Image
              src='/sandra-profile.jpg'
              alt='Sandra - profile picture'
              width={500}
              height={500}
            />
          </figure>
          <div>
            <article className='mt-6'>
              <div className='block  has-text-white my-3 is-size-3'>
                <p className='is-size-5-mobile is-size-4  has-text-white'>
                  Sandra has been working with kids for ten years. She loves helping children to
                  learn and to understand the world around them.{" "}
                </p>
              </div>
              <div className='block  has-text-white my-3 is-size-3'>
                <p className='is-size-5-mobile is-size-4  has-text-white'>
                  Watching them grow and succeed is her greatest joy.{" "}
                </p>
              </div>
              <div className='block'>
                <p className='is-size-5-mobile is-size-4  has-text-white'>
                  She has a bachelor&apos;s degree in Business Administration with emphasis in
                  marketing. She is currently working to finish an Associate Degree in Early
                  Education over the next few months - from North Seattle College.{" "}
                </p>
              </div>
              <div className='block'>
                <p className='is-size-5-mobile is-size-4  has-text-white'>
                  She lives in Puyallup, WA with her husband, their two children and their two
                  Golden Retrievers.
                </p>
              </div>
              <div className='block'>
                <p className='is-size-5-mobile is-size-4  has-text-white'>
                  Her favorite food is Carne Asada, Nicaraguan Style.
                </p>
              </div>
              <div className='block'>
                <p className='is-size-5-mobile is-size-4  has-text-white'>
                  Sandra loves Latin music and spending time riding bicycles with her youngest son.
                </p>
              </div>
            </article>
            <div>
              <p className='has-text-weight-bold is-italic py-4 is-bold is-size-5-mobile is-size-4  has-text-white'>
                &quot;I am looking forward to meeting everyone and to making wonderful memories with
                your children!&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sandra;
