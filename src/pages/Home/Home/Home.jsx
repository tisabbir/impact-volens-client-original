import { useContext } from "react";
import Banners from "../Banner/Banners";
import Donation from "../Donation/Donation";
import Types from "../Types/Types";
import VolunteerNeeds from "../VolunteerNeeds/VolunteerNeeds";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet";

const Home = () => {
  const { name } = useAuth();
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
