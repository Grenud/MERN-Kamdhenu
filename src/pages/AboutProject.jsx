import cowSeva from "../assets/Cowseva.png";
import cowSevaPerson from "../assets/CowsevaP.png";
import Button from "../component/Button";

function AboutProject() {
  return (
    <main className="main-container flex flex-col p-4 lg:p-12 gap-5 mt-0 md:mt-14">
      <figure className="relative">
        <img
          src={cowSeva}
          alt="cow-seva-cover-image"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </figure>
      <p className="text-neutral-700 text-sm sm:text-base md:text-lg lg:text-xl max-w-5xl mx-auto">
        The cow is an amazing divine being who carries the most powerful and
        sublime vibrations of the Universe, the true mother of mankind. She
        feeds her children, her people, with her own milk. From the milk of a
        cow, a person creates yogurt, butter, ghee, cheese, all kinds of sweets,
        etc. It is impossible to imagine a day without these blissful products.
        Indispensable ingredients such as ghee, which is sometimes called liquid
        gold; manure, which is a symbol of purification and protection; and cow
        urine, which is truly living water; and powerful biostimulants are in
        canonical Ayurveda and modern medicine. Everything that comes from the
        cow, even its breath, is healing for the body and soul. The bull in the
        farm plows the land, helps in sowing and harvesting, transports heavy
        loads and is the father of the family! The cow and the bull are the
        basis for the well-being of the family, its health and happiness. And
        from the well-being in families comes the well-being of all mankind.
      </p>
      <section className="w-full md:max-w-4xl md:mx-auto">
      <div className="text-neutral-700 text-sm sm:text-base md:text-lg lg:text-xl">
      <figure className="w-4/4 mb-6"> {/* Adjust width as needed */}
  <img
    src={cowSevaPerson}
    alt="cow-seva-person"
    className="w-full h-full object-cover rounded-lg shadow-xl"
  />
</figure>

        <div className="flex flex-col gap-4">
          <p>
            Previously there were more than a hundred breeds of cows in India
            but today there are only 32. The Ashram of Sri Devraha Baba
            undertook the mission of preserving and reproducing rare breeds. We
            can work together to protect cows and become the voice of this
            silent animal.
          </p>
          <p>
            People should know: donations to keep cows alive will be returned to
            them a hundredfold – this is evidenced by the scriptures and spoken
            by the holy sages.
          </p>
          <p>
            Cows are intelligent, gentle and affectionate animals. Each of them
            is a person with his own feelings, emotions, mood. Anyone who is
            lucky enough to communicate with a cow knows how meaningfully it
            communicates and generously shares its love with people.
          </p>
        </div>
        </div>

      </section>
      <Button
        btnText={"ADOPT A COW"}
       className="w-36 lg:ml-32"
      />
    </main>
  );
}

export default AboutProject;
