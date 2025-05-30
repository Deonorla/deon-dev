import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="carousel">
      <div className="list">
        <div className="item">
          <Image width={250} height={300} alt="" src="/images/gamebloc.png" />
          <div className="introduce">
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">Aerphone</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              laborum cumque dignissimos quidem atque et eligendi aperiam
              voluptates beatae maxime.
            </div>
            <button className="seeMore">SEE MORE &#8599</button>
          </div>
          <div className="detail">
            <div className="title">Aerphone GHTK</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              reiciendis suscipit nobis nulla animi, modi explicabo quod
              corrupti impedit illo, accusantium in eaque nam quia adipisci aut
              distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
              Accusamus architecto dolores modi ducimus facilis quas
              voluptatibus! Tempora ratione accusantium magnam nulla tenetur
              autem beatae.
            </div>
            <div className="specifications">
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
            <div className="checkout">
              <button>ADD TO CART</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>

        <div className="item">
          <Image width={250} height={300} alt="" src="/images/redefine.png" />
          <div className="introduce">
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">Aerphone</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              laborum cumque dignissimos quidem atque et eligendi aperiam
              voluptates beatae maxime.
            </div>
            <button className="seeMore">SEE MORE &#8599</button>
          </div>
          <div className="detail">
            <div className="title">Aerphone GHTK</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              reiciendis suscipit nobis nulla animi, modi explicabo quod
              corrupti impedit illo, accusantium in eaque nam quia adipisci aut
              distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
              Accusamus architecto dolores modi ducimus facilis quas
              voluptatibus! Tempora ratione accusantium magnam nulla tenetur
              autem beatae.
            </div>
            <div className="specifications">
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
            <div className="checkout">
              <button>ADD TO CART</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>

        <div className="item">
          <Image width={250} height={300} alt="" src="/images/bugbounty.png" />
          <div className="introduce">
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">Aerphone</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              laborum cumque dignissimos quidem atque et eligendi aperiam
              voluptates beatae maxime.
            </div>
            <button className="seeMore">SEE MORE &#8599</button>
          </div>
          <div className="detail">
            <div className="title">Aerphone GHTK</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              reiciendis suscipit nobis nulla animi, modi explicabo quod
              corrupti impedit illo, accusantium in eaque nam quia adipisci aut
              distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
              Accusamus architecto dolores modi ducimus facilis quas
              voluptatibus! Tempora ratione accusantium magnam nulla tenetur
              autem beatae.
            </div>
            <div className="specifications">
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
            <div className="checkout">
              <button>ADD TO CART</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
        <button id="back">See All &#8599</button>
      </div>
    </div>
  );
};

export default Projects;
