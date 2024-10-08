function CowCard({ imgSrc, name }) {
  // Utility function to clean up the name
  const cleanName = name.replace(/\b[A-Z]{1,2}\d{1,2}\b/, '').trim() + " Gaumata";

  return (
    <section className="bg-gray-100 text-black border-2 shadow-md rounded-lg overflow-hidden flex flex-col gap-2">
      <figure className="overflow-hidden">
        <img
          src={imgSrc}
          alt={`Image of ${name}`} // Dynamic alt text for accessibility
          className="hover:scale-105 duration-300 h-72 object-cover w-full"
        />
      </figure>
      <div className="pl-3 flex flex-col gap-1 pb-2">
        <h2 className="text-lg font-semibold tracking-wider">{name}</h2>
        <h2 className="font-semibold tracking-wide text-xl">
          Help us care for {cleanName}
        </h2>
        <p className="text-sm tracking-wide">
          Support and reward options for our sponsoring partners:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
          <div className="flex gap-2 items-center"><div className="w-3 h-3 rounded-full bg-white" ></div> Custom amount</div>
          <div className="flex gap-2 items-center"><div className="w-3 h-3 rounded-full bg-green-400"></div> 1 month
          </div>
          <div className="flex gap-2 items-center"><div className="w-3 h-3 rounded-full bg-[#CD7F32]"></div> 3 months
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-[#C0c0c0]" ></div> 6 months
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-[#FFD700]"></div> 12 months
          </div>
        </div>
      </div>
    </section>
  );
}

export default CowCard;
