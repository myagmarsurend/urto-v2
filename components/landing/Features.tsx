"use client";
import { useLottie } from "lottie-react";
// Import Lottie animation data
// import vroomAnimation from "@/assets/landing/lottie/vroom.lottie";
// import clickAnimation from "@/assets/landing/lottie/click.lottie";
// import starsAnimation from "@/assets/landing/lottie/stars.lottie";

const tabs = [
  {
    animationData: "@/assets/landing/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    animationData: "@/assets/landing/lottie/vroom.lottie",

    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    animationData: "@/assets/landing/lottie/vroom.lottie",

    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const LottieAnimation = ({ animationData }: { animationData: any }) => {
  const options = {
    animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export const Features = () => {
  return (
    <section>
      <div className="container">
        <h2>Elevate your SEO efforts</h2>
        <p>
          From small startups to large enterprise, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="tabs-container">
          {tabs.map((tab) => (
            <div key={tab.title} className="tab-item">
              <div className="lottie-container">
                <LottieAnimation animationData={tab.animationData} />
              </div>
              <h3>{tab.title}</h3>
              {tab.isNew && <span className="new-badge">New</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
