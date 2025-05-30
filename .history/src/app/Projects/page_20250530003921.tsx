"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./project.module.css";
const Projects = () => {
  useEffect(() => {
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    const carousel = document.querySelector(`.${styles.carousel}`);
    const listHTML = document.querySelector(
      `.${styles.carousel} .${styles.list}`
    );
    const seeMoreButtons = document.querySelectorAll(`.${styles.seeMore}`);
    const backButton = document.getElementById("back");

    nextButton!.onclick = function () {
      showSlider("next");
    };
    prevButton!.onclick = function () {
      showSlider("prev");
    };

    let unAcceppClick: NodeJS.Timeout;
    const showSlider = (type: string) => {
      if (!nextButton || !prevButton || !carousel || !listHTML) return;

      nextButton.style.pointerEvents = "none";
      prevButton.style.pointerEvents = "none";

      carousel.classList.remove("next", "prev");
      const items = listHTML.querySelectorAll(`.${styles.item}`);
      if (type === "next") {
        listHTML.appendChild(items[0]);
        carousel.classList.add("next");
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add("prev");
      }
      clearTimeout(unAcceppClick);
      unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = "auto";
        prevButton.style.pointerEvents = "auto";
      }, 2000);
    };

    seeMoreButtons.forEach((button) => {
      (button as HTMLButtonElement).onclick = function () {
        if (!carousel) return;
        carousel.classList.remove("next", "prev");
        carousel.classList.add("showDetail");
      };
    });

    backButton!.onclick = function () {
      if (!carousel) return;
      carousel.classList.remove("showDetail");
    };

    // Cleanup on unmount
    return () => {
      if (nextButton) nextButton.onclick = null;
      if (prevButton) prevButton.onclick = null;
      if (backButton) backButton.onclick = null;
      seeMoreButtons.forEach(
        (button) => ((button as HTMLButtonElement).onclick = null)
      );
    };
  }, []);
  return (
    <div className={styles.carousel}>
      <div className={styles.list}>
        <div className={styles.item}>
          <Image width={250} height={300} alt="" src="/images/gamebloc.png" />
          <div className={styles.introduce}>
            <div className={styles.title}>DESIGN SLIDER</div>
            <div className={styles.topic}>Aerphone</div>
            <div className={styles.des}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              laborum cumque dignissimos quidem atque et eligendi aperiam
              voluptates beatae maxime.
            </div>
            <button className={styles.seeMore}>SEE MORE &#8599;</button>
          </div>
          <div className={styles.detail}>
            <div className={styles.title}>Aerphone GHTK</div>
            <div className={styles.des}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              reiciendis suscipit nobis nulla animi, modi explicabo quod
              corrupti impedit illo, accusantium in eaque nam quia adipisci aut
              distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
              Accusamus architecto dolores modi ducimus facilis quas
              voluptatibus! Tempora ratione accusantium magnam nulla tenetur
              autem beatae.
            </div>
            <div className={styles.specifications}>
              <div>
                <p>Used Time</p>
                <p>6 hours</p>
              </div>
              <div>
                <p>Charging port</p>
                <p>Type-C</p>
              </div>
              <div>
                <p>Compatible</p>
                <p>Android</p>
              </div>
              <div>
                <p>Bluetooth</p>
                <p>5.3</p>
              </div>
              <div>
                <p>Controlled</p>
                <p>Touch</p>
              </div>
            </div>
            <div className={styles.checkout}>
              <button>ADD TO CART</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <Image width={250} height={300} alt="" src="/images/redefine.png" />
          <div className={styles.introduce}>
            <div className={styles.title}>DESIGN SLIDER</div>
            <div className={styles.topic}>Aerphone</div>
            <div className={styles.des}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              laborum cumque dignissimos quidem atque et eligendi aperiam
              voluptates beatae maxime.
            </div>
            <button className={styles.seeMore}>SEE MORE &#8599;</button>
          </div>
          <div className={styles.detail}>
            <div className={styles.title}>Aerphone GHTK</div>
            <div className={styles.des}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              reiciendis suscipit nobis nulla animi, modi explicabo quod
              corrupti impedit illo, accusantium in eaque nam quia adipisci aut
              distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
              Accusamus architecto dolores modi ducimus facilis quas
              voluptatibus! Tempora ratione accusantium magnam nulla tenetur
              autem beatae.
            </div>
            <div className={styles.specifications}>
              <div>
                <p>Used Time</p>
                <p>6 hours</p>
              </div>
              <div>
                <p>Charging port</p>
                <p>Type-C</p>
              </div>
              <div>
                <p>Compatible</p>
                <p>Android</p>
              </div>
              <div>
                <p>Bluetooth</p>
                <p>5.3</p>
              </div>
              <div>
                <p>Controlled</p>
                <p>Touch</p>
              </div>
            </div>
            <div className={styles.checkout}>
              <button>ADD TO CART</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <Image width={250} height={300} alt="" src="/images/bugbounty.png" />
          <div className={styles.introduce}>
            <div className={styles.title}>DESIGN SLIDER</div>
            <div className={styles.topic}>Aerphone</div>
            <div className={styles.des}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              laborum cumque dignissimos quidem atque et eligendi aperiam
              voluptates beatae maxime.
            </div>
            <button className={styles.seeMore}>SEE MORE &#8599;</button>
          </div>
          <div className={styles.detail}>
            <div className={styles.title}>Aerphone GHTK</div>
            <div className={styles.des}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              reiciendis suscipit nobis nulla animi, modi explicabo quod
              corrupti impedit illo, accusantium in eaque nam quia adipisci aut
              distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
              Accusamus architecto dolores modi ducimus facilis quas
              voluptatibus! Tempora ratione accusantium magnam nulla tenetur
              autem beatae.
            </div>
            <div className={styles.specifications}>
              <div>
                <p>Used Time</p>
                <p>6 hours</p>
              </div>
              <div>
                <p>Charging port</p>
                <p>Type-C</p>
              </div>
              <div>
                <p>Compatible</p>
                <p>Android</p>
              </div>
              <div>
                <p>Bluetooth</p>
                <p>5.3</p>
              </div>
              <div>
                <p>Controlled</p>
                <p>Touch</p>
              </div>
            </div>
            <div className={styles.checkout}>
              <button>ADD TO CART</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.arrows}>
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
        <button id="back">See All &#8599;</button>
      </div>
    </div>
  );
};

export default Projects;
