function CowCard({ imgSrc }) {
  return (
    <section className="bg-light text-neutral-800 rounded-lg overflow-hidden p-2  flex flex-col gap-2">
      <figure className="overflow-hidden duration-300">
        <img
          src={imgSrc}
          alt="gautama"
          className="hover:scale-105 duration-300"
        />
      </figure>
      <h2 className="font-semibold tracking-wide text-xl">
        Help us to Care Sharaddha Gaumata
      </h2>
      <p className="text-sm tracking-wide">
        Support and reward options for our sponsoring partners GUARDIANSHIP OF A
        COW WHITE custom amount GREEN 1 month BRONZE 3 months SILVER 6 months
        GOLD…
      </p>
    </section>
  );
}

export default CowCard;
