import { Helmet } from "react-helmet";
import AddVolunteerNeeds from "../AddVolunteerPost/AddVolunteerNeeds";

const NeedVolunteers = () => {
  return (
    <div>
        <Helmet>
        <title>Need Volunteer || Impact Volens</title>
      </Helmet>
      <div className="flex justify-center my-6">
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search by title"
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn join-item">Search</button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg m-6 p-6">
        <h1 className="text-xl md:text-3xl text-center font-bold">
          {" "}
          Need Volunteers
        </h1>
        <p className="text-lg text-center ">
          We are currently in need of volunteers for this tasks.
        </p>
      </div>
      <div>
        <AddVolunteerNeeds />
      </div>
    </div>
  );
};

export default NeedVolunteers;
