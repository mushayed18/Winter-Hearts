import { useNavigate } from "react-router-dom";

const DonationCard = ({ data }) => {
  const {id, image, title, description, division} = data;

  const navigate = useNavigate()

  const handleShowDetails = () => {
    navigate(`/donation-details/${id}`)
  }

  return (
    <div className="card bg-base-100 w-80 shadow-xl rounded-none">
      <figure>
        <img
          className="h-48 w-full object-cover"
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between items-center">
          <p className="font-medium text-base">{division}</p>  
          <button onClick={handleShowDetails} className="btn bg-[#EF4323] text-white">Donate Now</button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
