import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";

const Sandra = () => {
  const { spanish } = useAppContext();
  return (
    <>
      <div className='text-white'>
        <h1 className='mt-6'>Sandra Gutierrez</h1>
        <h2 className='italic'>{spanish ? "Maestra" : "Teacher"}</h2>
      </div>
      <div className=''>
        <div className=''>
          <Image
            src='/sandra-profile.jpg'
            alt='Sandra - profile picture'
            width={500}
            height={500}
          />
          <div>
            <section className='mt-6 text-white'>
              <div className=''>
                <p className=''>
                  Sandra has been working with kids for ten years. She loves helping children to
                  learn and to understand the world around them.{" "}
                </p>
              </div>
              <div className=''>
                <p className=''>Watching them grow and succeed is her greatest joy. </p>
              </div>
              <div className=''>
                <p className=''>
                  She has a bachelor&apos;s degree in Business Administration with emphasis in
                  marketing. She is currently working to finish an Associate Degree in Early
                  Education over the next few months - from North Seattle College.{" "}
                </p>
              </div>
              <div className=''>
                <p className=''>
                  She lives in Puyallup, WA with her husband, their two children and their two
                  Golden Retrievers.
                </p>
              </div>
              <div className=''>
                <p className=''>Her favorite food is Carne Asada, Nicaraguan Style.</p>
              </div>
              <div className=''>
                <p className=''>
                  Sandra loves Latin music and spending time riding bicycles with her youngest son.
                </p>
              </div>
            </section>
            <div>
              <p className='py-4 font-bold text-white'>
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
