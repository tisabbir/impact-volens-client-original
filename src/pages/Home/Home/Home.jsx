
import Banners from "../Banner/Banners";
import Donation from "../Donation/Donation";
import Types from "../Types/Types";
import VolunteerNeeds from "../VolunteerNeeds/VolunteerNeeds";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || Impact Volens</title>
      </Helmet>
      <Banners />
      <VolunteerNeeds />
      <Types />
      <Donation />
    </div>
  );
};

export default Home;
