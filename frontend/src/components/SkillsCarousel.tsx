import Carousel from "react-bootstrap/Carousel";

function SkillsCarousel() {
  return (
    <Carousel interval={1300} indicators={false}>
      <Carousel.Item>
        <img
          src="javascript-logo.png"
          alt="JavaScript"
          className="d-block m-auto ratio ratio-1x1 carouselWH"
        />
        <Carousel.Caption>
          <h3>JavaScript</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="ts-logo.png"
          alt="Typescript"
          className="d-block m-auto ratio ratio-1x1 carouselWH"
        />
        <Carousel.Caption>
          <h3>Typescript</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="react-logo.png"
          alt="React"
          className="d-block m-auto ratio ratio-1x1 carouselWH m-auto"
        />
        <Carousel.Caption>
          <h3>React</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="nodejs-logo.png"
          alt="Node"
          className="d-block m-auto ratio ratio-1x1 carouselWH m-auto"
        />
        <Carousel.Caption>
          <h3>Node</h3>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          src="expressjs-logo.svg"
          alt="Express"
          className="d-block m-auto ratio ratio-1x1 carouselWH m-auto"
        />
        <Carousel.Caption>
          <h3>Express</h3>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          src="html-logo.svg"
          alt="HTML"
          className="d-block m-auto ratio ratio-1x1 carouselWH"
        />
        <Carousel.Caption>
          <h3>HTML</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="css-logo.svg"
          alt="CSS"
          className="d-block m-auto ratio ratio-1x1 carouselWH"
        />
        <Carousel.Caption>
          <h3>CSS</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SkillsCarousel;
