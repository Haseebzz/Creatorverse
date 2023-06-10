/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaTwitch, FaInstagram, FaTwitter, FaYoutube, } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io"; 
import {HiOutlineInformationCircle} from "react-icons/hi"
const Card = ({ creator }) => {
  const cardStyle = {
    backgroundImage: `url(${creator.imageURL})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 300,
    border: "1px solid gray",
    borderRadius: 8,
    transition: "transform 0.3s",
  };
  
  return (
    <div className="relative hover:scale-105 duration-300" style={cardStyle}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 "></div>
      <div className="relative p-16 text-white">
        <div className="flex  items-center justify-between">
        <h1 className="text-3xl font-bold mb-2 text-white max-h-[80px] overflow-hidden">
          {creator.name}
          </h1>
        <div className="flex ">
        <Link to={`/edit/${creator.id}`}>
        <IoMdCreate className=" text-white text-xl mr-5 text-4xl "  />
      </Link>
   
        <Link to={`/view/${creator.id}`}>
        <HiOutlineInformationCircle  className=" text-white text-xl text-4xl" />
      </Link>
                
        </div>
        </div>
        <div className="flex items-center text-3xl mt-2">
        {creator.youtubeurl && (
          <h1 className="mr-3 hover:bg-blue-700">
            <a href={creator.youtubeurl} target="_blank" rel="noopener noreferrer">
              <FaYoutube /> 
            </a>
          </h1>
        )}
        {creator.twitterurl && (
          <h1 className="mr-3 hover:bg-blue-700">
            <a href={creator.twitterurl} target="_blank" rel="noopener noreferrer">
              <FaTwitter /> 
            </a>
          </h1>
        )}
        {creator.twitchurl && (
          <h1 className="mr-3 hover:bg-blue-700">
            <a href={creator.twitchurl} target="_blank" rel="noopener noreferrer">
              <FaTwitch /> 
            </a>
          </h1>
        )}
        {creator.instagramurl && (
          <h1 className=" hover:bg-blue-700">
            <a href={creator.instagramurl} target="_blank" rel="noopener noreferrer">
              <FaInstagram /> 
            </a>
          </h1>
        )}
        </div>
        <div className="h-28 overflow-hidden ">
  <h1 className="text-xl font-bold max-h-[160px] overflow-hidden">
     {creator.description}
  </h1>
</div>
  
        
      </div>
    </div>
  );
};

export default Card;


