import cowSeva from "../assets/Cowseva.png";
import cowSevaPerson from "../assets/CowsevaP.png";
import Button from "../component/Button";
function AboutProject() {
  return (
    <section className="main-container">
      <h1 className="text-3xl font-bold tracking-wider my-2">About</h1>
      <figure className="w-full h-64 object-cover">
        <img
          src={cowSeva}
          alt="cow-seva-cover-image"
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>
      <p className="my-2 text-neutral-600">
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
      <section className="w-full flex flex-col lg:flex-row gap-2 my-5 text-neutral-600 p-2 bg-neutral-100">
        <div className="flex justify-around flex-col">
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
        <figure>
          <img src={cowSevaPerson} alt="cow-seva-person" />
        </figure>
      </section>
      <Button
        btnText={"ADOPT A COW"}
        className="w-72 font-semibold bg-accent1 hover:bg-accent2 text-light duration-300 my-4"
      />
    </section>
  );
}

export default AboutProject;
