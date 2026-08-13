import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import Navbar from "./components/Navbar";
import HeroSection from "./components/home/HeroSection";
import StatsSection from "./components/home/StatsSection";
import InventorySection from "./components/home/InventorySection";
import WhyMakhanaSection from "./components/home/WhyMakhanaSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import RecipesSection from "./components/home/RecipesSection";
import NewsletterSection from "./components/home/NewsletterSection";
import Footer from "./components/Footer";
import styles from "./home.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Tirahut - Authentic Experience</title>
        <meta name="description" content="Tirahut - Premium roasted makhana that is crunchy, light, and packed with nutrients. A super snack for your evenings." />
        <meta name="keywords" content="Tirahut, makhana, roasted makhana, phool makhana, healthy snack, fox nut, superfood" />
        <meta name="author" content="Tirahut" />
        <meta name="robots" content="index, follow" />

        <link rel="icon" href="/images/Logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/Logo.png" />

        <meta name="theme-color" content="#FDF6E9" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tirahut" />
        <meta property="og:title" content="Tirahut - Authentic Experience" />
        <meta property="og:description" content="Premium roasted makhana that is crunchy, light, and packed with nutrients. A super snack for your evenings." />
        <meta property="og:image" content="/images/Hero_Image.png" />
        <meta property="og:image:alt" content="Tirahutt Agro Makhana Package" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tirahut - Authentic Experience" />
        <meta name="twitter:description" content="Premium roasted makhana that is crunchy, light, and packed with nutrients. A super snack for your evenings." />
        <meta name="twitter:image" content="/images/Hero_Image.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className={styles.blob}></div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <InventorySection />
      <WhyMakhanaSection />
      <TestimonialsSection />
      <RecipesSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
