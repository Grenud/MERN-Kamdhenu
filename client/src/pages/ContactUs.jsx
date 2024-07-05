import Button from "../component/Button.jsx";
function ContactUs() {
  const phoneNumber = "+917302756618";
  const email = "welcome@kamdhenuseva.com";
  return (
    <section className="main-container grid lg:grid-cols-6 mb-4">
      <section className="lg:col-span-4 col-span-6">
        <h1 className="text-2xl font-bold tracking-wide my-3 lg:my-4">Our Location</h1>
        <section className="w-full my-5">
          <iframe
            className="w-full h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3621036.977885515!2d77.715488!3d27.588292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736fb8c0918c63%3A0x5dd68797914571fe!2sYogiraj%20Devraha%20Baba%20(Samadhi%20sthal%20and%20Ashram)!5e0!3m2!1sen!2sus!4v1719995002484!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section className="flex flex-col items-start gap-3">
          <h2 className="text-2xl font-bold tracing-wide my-3">
            Drop Us a Line
          </h2>
          <p className="text-muted font-light tracking-wide">
            Want to reach out? We&apos;d love to hear from you!
          </p>
          <form className="w-full flex flex-col gap-2 bg-light p-6">
            <div className="w-full flex flex-col md:flex-row gap-4">
              <input
                className="py-2 pr-4 pl-4 border-0 outline-0 border-b-2 border-gray-700 placeholder:text-light placeholder:opacity-80 rounded-lg"
                name="fullName"
                placeholder="Your name*"
              />
              <input
                className="py-2 pr-4 pl-4 border-0 outline-0 border-b-2 border-gray-700 placeholder:text-light placeholder:opacity-80 rounded-lg"
                name="email"
                placeholder="Your email*"
              />
            </div>
            <input
              className="py-2 pr-4 pl-4 border-0 outline-0 border-b-2 border-gray-700 placeholder:text-light placeholder:opacity-80 rounded-lg"
              name="fullName"
              placeholder="Subject"
            />
            <textarea
              className="py-2 pr-4 pl-4 border-0 outline-0 border-b-2 border-gray-700 placeholder:text-light placeholder:opacity-80 rounded-lg"
              name="fullName"
              placeholder="Message"
            />
            <Button btnText="SUBMIT" />
          </form>
          {/* TODO */}
        </section>
      </section>
      <section className="col-span-6 lg:col-span-2 text-sm flex flex-col gap-4 my-4 lg:px-4 p-0">
        <div className="w-full flex flex-col gap-2">
          <h2 className="font-semibold lg:mt-4">CONNECT WITH US</h2>
          {/* Link to open phone dialer */}
          <a
            href={`tel:${phoneNumber}`}
            className="w-full h-12 flex items-center justify-center bg-secondary hover:bg-primary text-light duration-300 rounded-full hover:scale-[.98]"
          >
            Call {phoneNumber}
          </a>
          {/* Link to open Gmail app */}
          <a
            href={`mailto:${email}`}
            className="w-full h-12 flex items-center justify-center bg-secondary hover:bg-primary text-light duration-300 rounded-full hover:scale-[.98]"
          >
            Email {email}
          </a>
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
            SHRI DEVRAHA BABA GAU SEVA SANSTHAN TRUST , Dangoli, Mant Mathura
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
