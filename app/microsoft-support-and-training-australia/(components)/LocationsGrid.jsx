// app/microsoft-support-and-training-australia/(components)/LocationsGrid.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Client wrapper that handles the scroll-in animation
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/locationsGrid.module.scss";

// Static image imports give next/image the real width and height,
// so there is no layout shift and it can generate responsive sizes
import brisbaneMob from "@/public/pageHeros/mob/brisbaneMob.webp";
import sydneyMob from "@/public/pageHeros/mob/sydneyMob.webp";
import melbourneMob from "@/public/pageHeros/mob/melbourneMob.webp";
import perthMob from "@/public/pageHeros/mob/perthMob.webp";
import adelaideMob from "@/public/pageHeros/mob/adelaideMob.webp";
import canberraMob from "@/public/pageHeros/mob/canberraMob.webp";
import goldCoastMob from "@/public/pageHeros/mob/goldCoastMob.webp";
import darwinMob from "@/public/pageHeros/mob/darwinMob.webp";
import northernRiversMob from "@/public/pageHeros/mob/northernRiversMob.webp";
import wollongongMob from "@/public/pageHeros/mob/wollongongMob.webp";
import richmondMob from "@/public/pageHeros/mob/richmondMob.webp";
import centralCoastMob from "@/public/pageHeros/mob/centralCoastMob.webp";

// One entry per location page, rendered as a card below
const locations = [
  {
    name: "Sydney",
    image: sydneyMob,
    alt: "Sydney Tower against a blue sky",
    description:
      "Comprehensive Microsoft support and training services for Australia's largest business hub, tailored to meet the unique needs of Sydney companies.",
    url: "/microsoft-support-and-training-sydney",
  },
  {
    name: "Melbourne",
    image: melbourneMob,
    alt: "Melbourne cityscape",
    description:
      "Specialised Microsoft support and customised training programs for Melbourne's diverse business community, delivered by local experts.",
    url: "/microsoft-support-and-training-melbourne",
  },
  {
    name: "Adelaide",
    image: adelaideMob,
    alt: "Pin marking Adelaide on a map",
    description:
      "Dedicated Microsoft support and training specialists serving South Australian businesses with customised solutions and local expertise.",
    url: "/microsoft-support-and-training-adelaide",
  },
  {
    name: "Brisbane",
    image: brisbaneMob,
    alt: "Brisbane river and skyline",
    description:
      "Expert Microsoft support and training for businesses throughout Southeast Queensland, with personalised solutions and on-site assistance.",
    url: "/microsoft-support-and-training-brisbane",
  },
  {
    name: "Canberra",
    image: canberraMob,
    alt: "Canberra Parliament House",
    description:
      "Specialised Microsoft support and training for government departments and Canberra businesses, with a focus on security and compliance.",
    url: "/microsoft-support-and-training-canberra",
  },
  {
    name: "Central Coast, NSW",
    image: centralCoastMob,
    alt: "Central Coast, NSW",
    description:
      "Local experts for Central Coast businesses, with solutions tailored to your particular needs.",
    url: "/microsoft-support-and-training-central-coast-nsw",
  },
  {
    name: "Darwin",
    image: darwinMob,
    alt: "Darwin harbour",
    description:
      "Reliable Microsoft support and training for Northern Territory businesses, with solutions adapted to Darwin's unique business environment.",
    url: "/microsoft-support-and-training-darwin",
  },
  {
    name: "Gold Coast",
    image: goldCoastMob,
    alt: "Gold Coast skyline",
    description:
      "Professional Microsoft support and training solutions for Gold Coast businesses, combining technical expertise with responsive local service.",
    url: "/microsoft-support-and-training-gold-coast",
  },
  {
    name: "Northern Rivers, NSW",
    image: northernRiversMob,
    alt: "Northern Rivers region",
    description:
      "Dedicated Microsoft support and training for Northern Rivers businesses, with a focus on regional needs and personalised service.",
    url: "/microsoft-support-and-training-northern-rivers-nsw",
  },
  {
    name: "Perth",
    image: perthMob,
    alt: "Perth skyline",
    description:
      "Reliable Microsoft support and expert training services for Western Australian businesses, with solutions designed for Perth's unique market.",
    url: "/microsoft-support-and-training-perth",
  },
  {
    name: "Richmond",
    image: richmondMob,
    alt: "Richmond area",
    description:
      "Specialised Microsoft support and training for Richmond businesses, with solutions tailored to local needs and priorities.",
    url: "/microsoft-support-and-training-richmond",
  },
  {
    name: "Wollongong",
    image: wollongongMob,
    alt: "Wollongong coastline",
    description:
      "Expert Microsoft support and training services for Illawarra businesses, delivered by local specialists who understand Wollongong's market.",
    url: "/microsoft-support-and-training-wollongong",
  },
];

const LocationsGrid = () => (
  <section className={styles.section}>
    <div className={styles.grid}>
      {locations.map((location, index) => (
        // Stagger by column (not overall index) so the last cards
        // don't wait over a second to appear
        <AnimateOnScroll
          key={location.name}
          animation="fade-up"
          duration={0.6}
          delay={(index % 3) * 0.1}
        >
          <Link href={location.url} className={styles.card}>
            <div className={styles.imageWrap}>
              {/* sizes matches the grid: 1 column, 2 columns, then 3 */}
              <Image
                src={location.image}
                alt={location.alt}
                className={styles.image}
                sizes="(max-width: 766px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className={styles.body}>
              <h3 className={styles.name}>{location.name}</h3>
              <p className={styles.description}>{location.description}</p>

              <span className={styles.more}>
                Explore {location.name}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default LocationsGrid;
