const VolunteerNeed = ({ need }) => {
  const { post_title, thumbnail, category, deadline } = need;

  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md bg-white text-gray-800 mx-auto">
        <img
          src={thumbnail}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-wide">
              {post_title}
            </h2>
            <p className="text-gray-800">Category: {category}</p>
            <p className="text-red-800">Deadline: {deadline}</p>
          </div>
          

          <div className="tooltip" data-tip="This is not an actual need volunteer post. Please click the SEE ALL button below to get some actual volunteer post. ">
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-500 text-white"
          >
            View Details
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeed;
