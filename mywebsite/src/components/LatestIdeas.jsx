import React from 'react';
import img from '../public/assets/img1.avif'; // Adjust the path as necessary
import img1 from '../public/assets/hero_img_1.avif'; // Adjust the
import img2 from '../public/assets/hero_img_2.avif';
const ideas = [
  {
    title: 'Leveraging AI for Business Process Automation',
    category: 'AI Solutions',
    date: 'April 8, 2025',
    description:
      'Explore how artificial intelligence can streamline your business operations and reduce operational costs.',
    image: img,

  },
  {
    title: 'Building a Minimum Viable Product: Best Practices',
    category: 'MVP Development',
    date: 'April 5, 2025',
    description:
      'Learn the key strategies for developing a successful MVP that attracts investors and early adopters.',
      image: img1,
  },
  {
    title: 'Digital Marketing Trends to Watch in 2025',
    category: 'Digital Marketing',
    date: 'April 1, 2025',
    description:
      'Stay ahead of the curve with these emerging digital marketing strategies that are reshaping the industry.',
      image: img2,
  },
];

const LatestIdeas = () => {
  return (
    <>
    {/* <img src={img} alt="..." className="w-fit h-fit object-cover" /> */}

    <section className="bg-slate-700 text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-1 font-weight: 700;">Latest Ideas</h2>
            <p className="text-gray-300">
              Explore our latest thoughts and POC ideas in the tech world.
            </p>
          </div>
          <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900 transition">
            View All Ideas →
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {ideas.map((idea, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={idea.image}
                alt={idea.title}
                className="w-fit h-fit h-48 object-cover transition-transform duration-75 group-hover: hover:scale-105"
              />
              <div className="p-5">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span className="bg-cyan-500 text-white px-3 py-0.5 rounded-full text-xs font-semibold">
                    {idea.category}
                  </span>
                  <span>📅 {idea.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {idea.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{idea.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <a href="#" className="text-teal-400 hover:underline">
                    Read More
                  </a>
                  <span className="cursor-pointer text-gray-400 hover:text-white text-lg">🔗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default LatestIdeas;
