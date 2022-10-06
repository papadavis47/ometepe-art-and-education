import { useAppContext } from "../Context/appContext.js";
import ComingSoon from "../components/ComingSoon";

const Registration = () => {
  const { spanish } = useAppContext();
  return (
    <div className='flex flex-col items-center jusify-center'>
      <ComingSoon title={spanish ? "Registracion" : "Registration"} />
    </div>
  );
};

export default Registration;
