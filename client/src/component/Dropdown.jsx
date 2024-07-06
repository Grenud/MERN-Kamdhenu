import { Link } from "react-router-dom";

export function Services() {
  return (
    <div className="relative lg:absolute lg:top-10 lg:left-20 md:left-10 min-w-52 bg-neutral-700 lg:bg-secondary text-light flex flex-col gap-0 py-2 duration-300 rounded-se-3xl rounded-es-3xl overflow-hidden">
      <Link
        to="/shop"
        className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
      >
        Our Products
      </Link>
      <Link
        to="/blog"
        className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
      >
        Our Blog
      </Link>
      <Link
        to="/donar-dashboard"
        className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
      >
        Donar Dashboard
      </Link>
      <Link
        to="/contact-us"
        className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
      >
        Contact us
      </Link>
    </div>
  );
}

export function About() {
  return (
    <div className="relative lg:absolute lg:top-10 lg:left-20  min-w-52 bg-neutral-700 lg:bg-secondary text-light flex flex-col gap-0 py-2 duration-300 rounded-se-3xl rounded-es-3xl overflow-hidden">
      <Link
        to="/about-project"
        className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
      >
        About Project
      </Link>
      <Link
        to="/about-gaumata"
        className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
      >
        About Gaumata
      </Link>
      <Link
        to="/cow-puja"
        className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
      >
        Cow Puja
      </Link>
      <Link
        to="/veda-cow"
        className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
      >
        Veda About Cow
      </Link>
      <Link
        to="/spiritual-importance"
        className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
      >
        Spiritual Importance
      </Link>
      <Link
        to="/testimonials"
        className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
      >
        Testimonials
      </Link>
      <Link
        to="/gallery"
        className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
      >
        Gallery
      </Link>
    </div>
  );
}
