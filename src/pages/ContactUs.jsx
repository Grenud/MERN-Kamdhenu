import Button from "../component/Button.jsx";
import cow from "../assets/cowcover3.png";

function ContactUs() {
  const phoneNumber = "+917302756618";
  const email = "welcome@kamdhenuseva.com";
  const instagramUrl = "https://www.instagram.com/your_instagram_handle/";

  return (
    <section className="main-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-4">
      <section className="lg:col-span-4 col-span-6">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide my-3 lg:my-4">
          Our Location
        </h1>
        <section className="w-full my-5">
          <iframe
            className="w-full h-[300px] md:h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3621036.977885515!2d77.715488!3d27.588292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736fb8c0918c63%3A0x5dd68797914571fe!2sYogiraj%20Devraha%20Baba%20(Samadhi%20sthal%20and%20Ashram)!5e0!3m2!1sen!2sus!4v1719995002484!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section className="flex flex-col items-start gap-3 p-4 lg:p-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-wide my-3">
            Drop Us a Line
          </h2>
          <p className="font-semibold tracking-wide text-muted">
            Want to reach out? We&apos;d love to hear from you!
          </p>
          <form className="w-full bg-green-700 grid grid-cols-1 md:grid-cols-2 gap-6 p-4 justify-center items-center">
            <div className="w-full h-full">
              <img
                src={cow}
                alt="Cow image"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  className="w-full py-3 px-4 border-0 outline-0 border-b-2 border-green-600 bg-green-100 rounded-md focus:border-green-400 placeholder:text-gray-600 placeholder:opacity-70"
                  name="fullName"
                  placeholder="Your name*"
                  required
                />
                <input
                  className="w-full py-3 px-4 border-0 outline-0 border-b-2 border-green-600 bg-green-100 rounded-md focus:border-green-400 placeholder:text-gray-600 placeholder:opacity-70"
                  name="email"
                  type="email"
                  placeholder="Your email*"
                  required
                />
              </div>
              <div className="w-full mb-6">
                <input
                  className="w-full py-3 px-4 border-0 outline-0 border-b-2 border-green-600 bg-green-100 rounded-md focus:border-green-400 placeholder:text-gray-600 placeholder:opacity-70"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="w-full mb-6">
                <textarea
                  className="w-full h-40 py-3 px-4 border-0 outline-0 border-b-2 border-green-600 bg-green-100 rounded-md focus:border-green-400 placeholder:text-gray-600 placeholder:opacity-70"
                  name="message"
                  placeholder="Message"
                  required
                />
              </div>
              <div className="text-center flex justify-center">
                <Button
                  btnText="SUBMIT"
                  className="py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                />
              </div>
            </div>
          </form>
        </section>
      </section>

      <section className="col-span-6 lg:col-span-2 text-sm flex flex-col gap-4 my-4 lg:px-4 p-0">
        <div className="w-full flex flex-col gap-2">
          <h2 className="font-semibold lg:mt-4">CONNECT WITH US</h2>
          <div className="flex justify-start gap-6 my-4">
            {/* Call Icon */}
            <a
              href={`tel:${phoneNumber}`}
              className="text-green-600 hover:text-green-800 text-2xl"
            >
              <img src="/phone.svg" alt="Phone" className="h-6 w-6 md:h-8 md:w-8" />
            </a>
            {/* Email Icon */}
            <a
              href={`mailto:${email}`}
              className="text-green-600 hover:text-green-800 text-2xl"
            >
              <img src="/mail.png" alt="Mail" className="h-6 w-6 md:h-8 md:w-8" />
            </a>
            {/* Instagram Icon */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 text-2xl"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                className="h-6 w-6 md:h-8 md:w-8"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8 font-light">
          <h2 className="font-semibold">CONTACT INFO</h2>
          <div className="flex flex-col gap-2">
            <p>Call us</p>
            <p>+91 7302756618</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>E-mail</p>
            <p>welcome@kamdhenuseva.com</p>
          </div>
          <p>
            SHRI DEVRAHA BABA GAU SEVA SANSTHAN TRUST, Dangoli, Mant Mathura
            281202 (Uttar Pradesh)
          </p>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">HOURS OF OPERATION</h3>
              <p>9:00 am - 8:00 pm EST</p>
              <p>Monday - Friday</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Closed and relax</h3>
              <p>Saturday & Sunday</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ContactUs;
