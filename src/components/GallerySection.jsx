import {
  GalleryOne,
  GalleryTwo,
  GalleryThree,
  GalleryFour,
  GalleryFive,
  GallerySix,
  GallerySeven,
  GalleryEight,
  GalleryNine,
  GalleryTen,
} from "../assets/images";

const GallerySection = ({ t }) => {
  const galleryImages = [
    {
      id: 1,
      image: <GalleryOne className="gallery-img" />,
      className: "gallery-three",
    },
    {
      id: 2,
      image: <GalleryTwo className="gallery-img" />,
      className: "gallery-two",
    },
    {
      id: 3,
      image: <GalleryThree className="gallery-img" />,
      className: "gallery-five",
    },
    {
      id: 4,
      image: <GalleryFour className="gallery-img" />,
      className: "gallery-one",
    },
    {
      id: 5,
      image: <GalleryFive className="gallery-img" />,
      className: "gallery-six",
    },
    {
      id: 6,
      image: <GallerySix className="gallery-img" />,
      className: "gallery-seven",
    },
    {
      id: 7,
      image: <GallerySeven className="gallery-img" />,
      className: "gallery-four",
    },
    {
      id: 8,
      image: <GalleryEight className="gallery-img" />,
      className: "gallery-eight",
    },
    {
      id: 9,
      image: <GalleryNine className="gallery-img" />,
      className: "gallery-nine",
    },
    {
      id: 10,
      image: <GalleryTen className="gallery-img" />,
      className: "gallery-ten",
    },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-section-holder">
        <div className="gallery-section-text-holder">
          <h2
            className="gallery-title"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            {t.gallery.title}
          </h2>

          <p
            className="gallery-text"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            {t.gallery.text}
          </p>
        </div>

        <div className="gallery-holder">
          {galleryImages.map((item, index) => (
            <div
              className={`gallery-item ${item.className || ""}`}
              key={item.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 70}
              data-aos-duration="700"
            >
              {item.image}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
