const DonationCard = ({ data }) => {
  const {image, title, description, division} = data;

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
          <button className="btn bg-[#EF4323] text-white">Donate Now</button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
