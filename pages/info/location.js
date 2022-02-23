import Construction from "../../src/components/Construction/Construction.js";
import { useAppContext } from "../../src/Context/appContext.js";

const Location = () => {
  const { spanish } = useAppContext();
  return (
    <div>
      <Construction title={spanish ? "Localización" : "Location"} />
    </div>
  );
};

export default Location;
