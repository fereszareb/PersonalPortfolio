import React from "react";
import AboutSection from "./HomeComponents/About-Section";
import ContactSection from "./HomeComponents/Contact-Section";
import ExperienceSection from "./HomeComponents/Experience-Section";
import FooterSection from "./HomeComponents/Footer-Section";
import HeaderSection from "./HomeComponents/Header-Section";
import RecommandationSection from "./HomeComponents/Recommandation-section";
import SkillsSection from "./HomeComponents/Skills-Setion";
import WorkSection from "./HomeComponents/Work-Section";

const Home = () => {
  return (
    <div>
      <HeaderSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
      <RecommandationSection />
      <FooterSection />
    </div>
  );
};

export default Home;
