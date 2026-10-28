import React from 'react';

export default function AboutUs() {
  return (
    <section className="about-us-container" aria-labelledby="about-us-heading">
      <div className="about-copy">
        <p className="eyebrow">Rooted in a love of green</p>
        <h2 id="about-us-heading">A little more nature, every day.</h2>
        <p>
          Paradise Nursery helps people make their homes calmer, brighter, and
          more welcoming with thoughtfully selected houseplants. Whether you
          are growing your first plant or adding to a leafy collection, we make
          it easy to find a plant that fits your space and routine.
        </p>
        <p>
          We believe caring for plants should feel joyful, not complicated.
          Explore easy-care favorites, low-light companions, and sculptural
          succulents selected to bring a touch of nature indoors.
        </p>
      </div>
      <img
        className="about-image"
        src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85"
        alt="Healthy green houseplants growing in a bright indoor space"
      />
    </section>
  );
}
