import ashramCover from "../assets/AshramDevraha.png";
import krishna5 from "../assets/Krishna5.jpeg";
import MembershipTable from "../component/MembershipTable";
import { Link } from "react-router-dom";

function JoinMission() {
  return (
    <main className="main-container flex flex-col p-4 lg:p-12 gap-8 mt-0 md:mt-14">
      {/* Cover Image */}
      <figure className="relative w-full">
        <img
          src={ashramCover}
          alt="ashram-cover-image"
          className="w-full h-auto object-cover rounded-lg shadow-2xl"
        />
      </figure>

      {/* Introductory Text */}
      <section className="text-neutral-700 text-sm sm:text-base md:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed space-y-6">
        <p>
          You can become the guardian of one or more cows, her (their) friend,
          visit her (them) in the ashram of Sri Devraha Baba or receive news
          about her (them) remotely. You can also become just a happy donator
          and the doors of the Sri Devraha Baba ashram will always be open to
          you. All friends of our Goshala cows always receive special blessings
          from Guruji Mahatma Sri Devdas Ji Maharaj.
        </p>
      </section>

      {/* Krishna Image & Information */}
      <section className="w-full md:max-w-4xl md:mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-2xl space-y-6">
          {/* Image */}
          <figure className="w-full">
            <img
              src={krishna5}
              alt="Krishna image"
              className="w-full h-auto object-cover rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
            />
          </figure>

          {/* Text Content */}
          <div className="text-neutral-500 leading-relaxed text-justify">
            <p>
              In the Sri Devraha Baba Ashram goshala the mother cows receive full,
              balanced, and high-quality nutrition, care, and most importantly – 
              the love of caring people who came to the goshala from a calling in 
              the heart. In the name of human well-being, global well-being, cows 
              must be healthy and happy. Our employees – friends of Gomata – 
              thoroughly know how to meet all her needs, to make her stay in the 
              goshala comfortable and joyful. We carefully select environmentally 
              friendly feeds from trusted suppliers near Vrindavan for a varied 
              and balanced feeding of our cows taking into account the seasons.
            </p>
            <p>
              So, in winter, we give cows a variety of warming grains: oats,
              wheat, amaranth, wajour, chopped hay from rice shoots, corn, as
              well as root crops – potatoes, carrots, beets, and, finally, a little
              gur for raising body temperature and mood! In the warmer months,
              they eat a lot of fresh meadow grass, rich in vitamins and trace
              elements: clover, ryegrass, oatmeal, alfalfa, and many others. In the
              ashram goshala, 7 days a week, there is a veterinarian to perform
              routine preventive measures: an examination, spraying, inclusion of
              vitamins or medicines in the feed. If necessary, we attract
              additional medical resources. We are very fond of our cows, the
              full-fledged inhabitants of the Ashram of Sri Devraha Baba, who are
              under His direct protection.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info and Links */}
      <section className="w-full md:max-w-4xl md:mx-auto flex flex-col gap-4 mt-6">
        <p className="text-neutral-700 text-base md:text-lg">
          You can view the expenditure grid of the Ashram goshala. Indicators
          may vary depending on changes in the market for products and services.
        </p>

        <Link to={'/'} className="text-[#6d9051] font-semibold underline hover:text-green-700 transition-all duration-300">
          Cow protection costs – click here
        </Link>

        <h5 className="text-gray-400 text-lg font-semibold">
          Support and reward options for our sponsoring partners
        </h5>

        {/* Membership Table */}
        <MembershipTable />
      </section>
    </main>
  );
}

export default JoinMission;
