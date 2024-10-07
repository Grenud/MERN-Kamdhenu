function CowCard({ imgSrc, name }) {
  // Utility function to clean up the name
  const cleanName = name.replace(/\b[A-Z]{1,2}\d{1,2}\b/, '').trim() + " Gaumata";

  return (
    <section className="bg-green-800 text-white rounded-lg overflow-hidden p-4 flex flex-col gap-4">
      <figure className="overflow-hidden">
        <img
          src={imgSrc}
          alt={`Image of ${name}`} // Dynamic alt text for accessibility
          className="hover:scale-105 duration-300"
        />
      </figure>
      <h2 className="text-lg font-semibold tracking-wider">{name}</h2>
      <h2 className="font-semibold tracking-wide text-xl">
        Help us care for {cleanName}
      </h2>
      <p className="text-sm tracking-wide">
        Support and reward options for our sponsoring partners:
        <br />
        <strong>WHITE:</strong> Custom amount
        <br />
        <strong>GREEN:</strong> 1 month
        <br />
        <strong>BRONZE:</strong> 3 months
        <br />
        <strong>SILVER:</strong> 6 months
        <br />
        <strong>GOLD:</strong> 12 months
      </p>
    </section>
  );
}

export default CowCard;
