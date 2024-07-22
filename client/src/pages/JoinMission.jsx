import ashramCover from "../assets/AshramDevraha.png";
import krishna5 from "../assets/Krishna5.jpeg";
import MembershipTable from "../component/MembershipTable";
import { Link } from "react-router-dom";
function JoinMission() {
  return (
    <main className="main-container flex flex-col gap-5">
      <figure>
        <img src={ashramCover} alt="ashram-cover-image" />
      </figure>
      <p className="text-neutral-500">
        You can become the guardian of one or more cows, her (their) friend,
        visit her (them) in the ashram of Sri Devraha Baba or receive news about
        her (them) remotely. You can also become just a happy donator and the
        doors of the Sri Devraha Baba ashram will always be open to you. All
        friends of our Goshala cows always receive special blessings from Guruji
        Mahatma Sri Devdas Ji Maharaj.
      </p>
      <section className="w-full">
        <div className="lg:grid grid-cols-5 gap-8 lg:gap-2 ">
          <p className="col-span-3 text-neutral-500">
            In the Sri Devraha Baba Ashram goshala the mother cows receive full,
            balanced and high-quality nutrition, care, and most importantly –
            the love of caring people who came to the goshala from a calling in
            the heart. In the name of human well-being, global well-being, cows
            must be healthy and happy. Our employees – friends of Gomata –
            thoroughly know how to meet all her needs, to make her stay in the
            goshala comfortable and joyful. We carefully select environmentally
            friendly feeds from trusted suppliers near Vrindavan for a varied
            and balanced feeding of our cows taking into account the seasons.
            So, in winter, we give cows a variety of warming grains: oats,
            wheat, amaranth, wajour, chopped hay from rice shoots, corn,, as
            well as root crops – potatoes, carrots, beets and, finally, a little
            gur for raising body temperature and mood! In the warmer months,
            they eat a lot of fresh meadow grass, rich in vitamins and trace
            elements: clover, ryegrass, oatmeal, alfalfa and many others. In the
            ashram goshala 7 days a week there is a veterinarian to perform
            routine preventive measures: an examination, spraying, inclusion of
            vitamins or medicines in the feed. If necessary, we attract
            additional medical resources. We are very fond of our cows, the
            full-fledged inhabitants of the Ashram of Sri Devraha Baba, who are
            under His direct protection.
          </p>
          <figure className="col-span-2">
            <img src={krishna5} alt="" />
          </figure>
        </div>
        <div className="flex flex-col gap-4 mt-4">
        <p>
          You can view the expenditure grid of the Ashram goshala. Indicators
          may vary depending on changes in the market for products and services.{" "}
        </p>
        <Link to={'/'} className="underline">Cow protection costs – click here</Link>
        <h5 className="text-gray-400">Support and reward options for our sponsoring partners</h5>
        </div>
        <MembershipTable/>
      </section>
    </main>
  );
}

export default JoinMission;
