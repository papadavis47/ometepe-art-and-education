import Construction from "../../components/Construction";
import { useAppContext } from "../../Context/appContext.js";

const Events = () => {
  const { spanish } = useAppContext();
  return (
    <div>
      <Construction title={spanish ? "Eventos" : "Events"} />
    </div>
  );
};

export default Events;
