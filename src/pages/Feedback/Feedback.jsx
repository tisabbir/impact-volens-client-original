import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Feedback = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const handleFeedback = (e) => {
        e.preventDefault();
        const feedback = e.target.feedback.value;
        const volunteerName = post.volunteerName;
        const volunteerEmail = post.volunteerEmail;
        const postTitle = post.title;
        const feedbackInfo = {
            feedback,
            volunteerName,
            volunteerEmail,
            postTitle,
        }

        axios.post('https://impact-volens-server.vercel.app/reviews', feedbackInfo)
        .then(res =>{
            console.log(res.data);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your feedback has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/manage')
        })
        .catch(err => {
            console.log(err);
        })

    }
    return (
        <div className="mt-12 ">
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 mx-auto">
  <div className="flex flex-col items-center w-full">
    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
    <div className="text-center space-y-1 mt-4">
        <h1 className="text-xl">Volunteer Opportunity: {post.title}</h1>
        <p>Description: {post.description}</p>
        <p className="">Category: {post.category}</p>
    </div>
    <div className="flex flex-col items-center py-6 space-y-3">
      <span className="text-center">How was your experience?</span>

    </div>
    <form onSubmit={handleFeedback} className="flex flex-col w-full">
      <textarea rows="3" placeholder="Message..." name="feedback" className="p-4 rounded-md resize-none bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"></textarea>
      <input type="submit" value={'Leave Feedback'} className="py-4 my-8 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 hover:bg-violet-700 text-gray-50 dark:text-gray-900" />
    </form>
  </div>
  <div className="flex items-center justify-center">
    <a rel="noopener noreferrer" href="#" className="text-sm text-gray-600 dark:text-gray-400">Maybe later</a>
  </div>
</div>

        </div>
    );
};

export default Feedback;