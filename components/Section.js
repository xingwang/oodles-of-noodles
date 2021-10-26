import styles from "../styles/Menu.module.css";
import Image from "next/image";

const Section = ({items, section, setPhoto, showImage, image}) => {

  return (
    <>
    {
      items.map((item) => {
        return(
          <>
            <div className={styles.itemContainer}>
              <div></div>
              <div>
                {/* <label onClick={setPhoto(section, item.name)}> */}
                <label>
                  {item.name} {item.units ? `(${item.units})`: "" } {item.chineseName? (<span className="chineseName">{item.chineseName}</span>): ""}&nbsp;
                  {/* <span className={styles.camera}>
                    <Image
                      src={"/icons/camera.svg"}
                      alt="Show picture"
                      width="20"
                      height="20"
                      layout="fixed"
                      />
                  </span> */}
                </label>
              </div>
              <div className={styles.price}>{item.price}</div>
              <div></div>
              <div className={styles.description}>
                {item.description}
              </div>
              <div></div>
            </div>
            <div className={showImage.enabled && showImage.section === section  && image[section] === item.name ? styles.menuPreview: styles.hide}>
              <Image
                src={`/images/${item.name}.jpg`}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                />
            </div>
          </>
        )
      })
    }
    </>
  );
};

export default Section;
