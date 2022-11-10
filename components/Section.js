import styles from "../styles/Menu.module.css";
import Image from "next/legacy/image";

const Section = ({ items, section, setPhoto, showImage, image, number }) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <div key={item.name}>
            <div className={styles.itemContainer}>
              {item.spicy ? (
                <div className={styles.spicy}>
                  <Image
                    src="/icons/chili.svg"
                    alt="Spicy"
                    width="20"
                    height="20"
                    layout="fixed"
                  />
                </div>
              ) : (
                <div></div>
              )}
              <div>
                {item.image ? (
                  <label
                    className={styles.itemLabel}
                    onClick={setPhoto(section, item.image)}
                  >
                    {number + index - items.length}. {item.name}{" "}
                    {item.units ? `(${item.units})` : ""}{" "}
                    {item.chineseName ? (
                      <span className="chineseName">{item.chineseName}</span>
                    ) : (
                      ""
                    )}
                    &nbsp;
                    <span className={styles.camera}>
                      <Image
                        src={"/icons/camera.svg"}
                        alt="Show picture"
                        width="20"
                        height="20"
                        layout="fixed"
                      />
                    </span>
                  </label>
                ) : (
                  <label>
                    {number + index - items.length}. {item.name}{" "}
                    {item.units ? `(${item.units})` : ""}{" "}
                    {item.chineseName ? (
                      <span className="chineseName">{item.chineseName}</span>
                    ) : (
                      ""
                    )}
                    &nbsp;
                  </label>
                )}
              </div>
              <div className={styles.price}>{item.price}</div>
              <div></div>
              <div className={styles.description}>{item.description}</div>
              <div></div>
            </div>
            <div
              className={
                showImage.enabled &&
                showImage.section === section &&
                image[section] === item.image
                  ? styles.menuPreview
                  : styles.hide
              }
            >
              <Image
                src={`/images/${item.image}.jpg`}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Section;
