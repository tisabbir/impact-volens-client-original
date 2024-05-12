import { useContext } from "react";
import Banners from "../Banner/Banners";
import Donation from "../Donation/Donation";
import Types from "../Types/Types";
import VolunteerNeeds from "../VolunteerNeeds/VolunteerNeeds";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAuth from "../../../hooks/useAuth";

const Home = () => {

    const {name} = useAuth();
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
