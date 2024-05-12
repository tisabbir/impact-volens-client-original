import Banners from "../Banner/Banners";
import Donation from "../Donation/Donation";
import Types from "../Types/Types";
import VolunteerNeeds from "../VolunteerNeeds/VolunteerNeeds";

const Home = () => {
  return (
    <div>
      <Banners />
      <VolunteerNeeds />
      <Types />
      <Donation />
    </div>
  );
};

export default Home;
