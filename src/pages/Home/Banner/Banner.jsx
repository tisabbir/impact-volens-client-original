const Banner = ({banner}) => {

    const {image, title, description} =banner;
  return (
    <div>
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="h-[600px] w-[500px] object-cover mx-auto"
            src={image}
          />
        </div>
        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg lg:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 mx-auto">
      
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
              {title}
            </h2>
            <p className="mt-4">
             {description}
            </p>
           
            <div className="mt-8">
              <a
                href="#"
                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-indigo-600 py-4 px-10 hover:bg-indigo-800 hover:shadow-md md:w-48"
              >
               Join Us
              </a>
            </div>
          </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
