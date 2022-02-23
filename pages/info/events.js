import Construction from "../../src/components/Construction/Construction.js";
import { useAppContext } from "../../src/Context/appContext.js";

const Events = () => {
  const { spanish } = useAppContext();
  return (
    <div>
      <Construction title={spanish ? "Eventos" : "Events"} />
    </div>
  );
};

export default Events;
