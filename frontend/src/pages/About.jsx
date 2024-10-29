import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets'; // Ensure this path correctly points to your assets folder
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className="bg-secondary text-text">
      <div className="text-2xl text-center pt-8 border-t border-border text-primary">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="About Us" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-text">
          <p>
            Everly was born out of a passion for innovation and a desire to revolutionize the way people shop online...
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products...
          </p>
          <b className="text-primary-dark">Our Mission</b>
          <p>
            Our mission at Everly is to empower customers with choice, convenience, and confidence...
          </p>
        </div>
      </div>

      <div className="text-xl py-4 text-primary">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 text-text">
        <div className="border border-border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-secondary">
          <b>Quality Assurance:</b>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        {/* Repeat for other features */}
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
