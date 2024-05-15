import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddVolunteerPost = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleAddPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const thumbnail = form.thumbnail.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const numberOfVolunteer = form.number.value;
       
        const post = {name,email,thumbnail, title, description, category, location, numberOfVolunteer, deadline : startDate}

        // console.log(post);

        axios.post('https://impact-volens-server.vercel.app/post', post, {withCredentials:true})
        .then(() => {
            // console.log(res.data);
            Swal.fire({
                title: "Post Added",
                text: "Successfully Added a Volunteer Need Post",
                imageUrl: "https://i.ibb.co/bsVz8fp/success-Register.jpg",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Custom image"
              })
        })
        .catch(err => {
            console.log(err);
        })
  }

  const {user} = useAuth();
  return (
    <div className="mt-12">
        <Helmet>
        <title>Add Volunteer || Impact Volens</title>
      </Helmet>
      <div className="flex justify-around items-center flex-col lg:flex-row">
        <div className="flex-1 m-4">
          <img className="rounded-lg mx-auto h-full object-cover" src="https://i.ibb.co/z2yHm8Y/vol.jpg" />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-center">Add Volunteer Post</h1>

          <form onSubmit={handleAddPost} className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="input input-bordered flex items-center gap-2">
              Thumbnail Url
              <input type="text" name="thumbnail" className="grow" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Post Title
              <input type="text" name="title" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2 lg:col-span-2">
              Description
              <input type="text" name="description" className="grow " />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Category
              <input type="text" name="category" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Location
              <input type="text" name="location" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              No. of volunteers needed
              <input type="number" name="number" className="grow" />
            </label>

            <div className="flex gap-2 items-center">
                <h1 className="text-lg font-bold">Deadline:</h1>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            </div>

            <label className="input input-bordered flex items-center gap-2">
              Organizer Name
              <input type="text" defaultValue={user.displayName} name="name" className="grow" disabled />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Organizer Email
              <input type="text" defaultValue={user.email} name="email" className="grow" disabled />
            </label>

            <input type="submit"  value={'Add Post'} className="btn btn-full lg:col-span-2 bg-indigo-600 text-white" />
              
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteerPost;
