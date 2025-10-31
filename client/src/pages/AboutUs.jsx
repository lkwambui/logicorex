import React from "react";
import teamAbout from "../assets/about/team-about.jpg"; 
import Client1 from "../assets/about/client-0.jpg"; 
import Client2 from "../assets/about/client-1.jpg"; 
import Client3 from "../assets/about/client-2.png"; 

const clientImages = [Client1, Client2, Client3];

const testimonials = [
  {
    name: "James Mwangi",
    quote:
      "Logicorex transformed our digital strategy. Their UX expertise helped us increase engagement by 40%.",
  },
  {
    name: "Winnie Achieng",
    quote:
      "Working with Logicorex was smooth and professional. Our website looks amazing and functions even better!",
  },
  {
    name: "Peter Kamau",
    quote:
      "They delivered our custom MIS on time and with precision. Highly recommend their dev team.",
  },
];

const team = [
  {
    name: "Lucy Kamau",
    role: "UI/UX Designer & Front-end Developer",
    quote:
      "“I create seamless and functional design systems that elevate user experiences.”",
  },
  {
    name: "Joseph Mayavero Disho",
    role: "Business Partner",
    quote:
      "“I believe in partnerships and scalable strategies that drive digital growth.”",
  },
  {
    name: "David Muya",
    role: "Back-end Developer",
    quote:
      "“Behind every great interface is powerful logic—I build that foundation.”",
  },
];

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="bg-customdarkblue text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Logicorex</h1>
          <p className="text-lg md:text-xl">
            Empowering digital transformation through innovation and design.
          </p>
        </div>
      </section>
{/* Who We Are Section */}
<section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
  {/* Left Text Section */}
  <div className="text-center md:text-left">
    <p className="text-[#0098FF] text-sm font-semibold uppercase mb-3 tracking-wide">
      Who We Are
    </p>
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
      Building Smart Solutions for a Digital Future
    </h2>
    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
      At <span className="font-semibold text-[#0098FF]">Logicorex</span>, we
      bridge innovation and technology to create seamless digital
      experiences. Our focus is on transforming ideas into functional,
      visually appealing, and scalable digital products.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed">
      From crafting responsive websites and intuitive mobile apps to delivering
      data-driven MIS solutions, our mission is to empower businesses,
      schools, and organizations through digital transformation and strategic
      design.
    </p>
  </div>

  {/* Right Image Section */}
  <div className="flex justify-center">
    <div className="relative">
      <img
        src={teamAbout}
        alt="Logicorex Team"
        className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-[#0098FF] shadow-xl"
      />
      {/* Decorative Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-[#0098FF]/20 blur-2xl -z-10" />
    </div>
  </div>
</section>

      {/* Mission · Vision · Core Values Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Mission · Vision · Core Values
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Vision */}
            <div className="w-60 h-60 rounded-full border-4 border-blue-300 bg-blue-50 flex items-center justify-center text-center px-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Our Vision</h3>
                <p className="text-sm text-blue-800">
                  To be a leading tech partner in Africa, driving digital transformation with creativity.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="w-60 h-60 rounded-full border-4 border-red-300 bg-red-50 flex items-center justify-center text-center px-6">
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-2">Our Mission</h3>
                <p className="text-sm text-red-800">
                  To deliver innovative and accessible digital solutions that empower businesses.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="w-60 h-60 rounded-full border-4 border-green-300 bg-green-50 flex items-center justify-center text-center px-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-2">Our Values</h3>
                <ul className="text-sm text-green-800 list-disc list-inside text-left">
                  <li>Integrity</li>
                  <li>Innovation</li>
                  <li>Teamwork</li>
                  <li>Client-first mindset</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Testimonials Section */}
<section id="testimonials" className="bg-gray-100 py-16">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
      What Our Clients Say
    </h2>

    <div className="grid gap-8 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-700 text-lg mb-4">“{t.quote}”</p>
          <div className="flex items-center">
            <img
              src={clientImages[i]}
              alt={t.name}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="text-gray-900 font-semibold">{t.name}</p>
              <p className="text-gray-500 text-sm">Client</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Meet the Team Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md relative flex flex-col justify-end h-[400px] group border"
              >
                {/* Decorative Shape */}
                <div className="absolute top-0 left-0 w-full h-full flex items-end">
                  <div className="w-full h-2/3 bg-customdarkblue rounded-t-[60%_60%_0_0] transition-all duration-300 group-hover:rounded-t-[70%_70%_0_0]" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-white px-6 pb-8 pt-16">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-200 mb-4">{member.role}</p>
                  <p className="text-sm italic">{member.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
