

const Type = ({type}) => {

    console.log(type);

    const {image, type_name, description} = type;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{type_name}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <button className="btn bg-indigo-600 text-white w-full">Book Now</button>
    </div>
  </div>
</div>
    );
};

export default Type;