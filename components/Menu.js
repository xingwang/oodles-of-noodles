import styles from "../styles/Menu.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [appetizer, setAppetizerImage] = useState("springRoll");
  const [salad, setSaladImage] = useState("papaya-salad");
  const [soup, setSoupImage] = useState("tom-yum-kung");
  const [rice, setRiceImage] = useState("pad-thai");
  const [curry, setCurryImage] = useState("pineapple-curry");
  const [stirfried, setStirFriedImage] = useState("general-chicken");
  const [seafood, setSeafoodImage] = useState("pad-talay");
  const [showImage, setShowImage] = useState({ enabled: false });
  const [selectedItem, setSelectedItem] = useState("");

  const setPhoto = (section, item) => () => {
    if (item === selectedItem) {
      setShowImage({ section, enabled: !showImage.enabled });
    } else if (!showImage.enabled) {
      setSelectedItem(item);
      setShowImage({ section, enabled: !showImage.enabled });
    } else {
      setSelectedItem(item);
      setShowImage({ section, enabled: showImage.enabled });
    }

    if (section === "appetizer") {
      setAppetizerImage(item);
    } else if (section === "salad") {
      setSaladImage(item);
    } else if (section === "soup") {
      setSoupImage(item);
    } else if (section === "rice") {
      setRiceImage(item);
    } else if (section === "curry") {
      setCurryImage(item);
    } else if (section === "stirfried") {
      setStirFriedImage(item);
    } else if (section === "seafood") {
      setSeafoodImage(item);
    }
  };

  return (
    <>
      <div className={styles.sectionTitle}>
        <h1 className={styles.center}>Menu</h1>
        <h3 className={styles.center}>
          <Image src="/icons/camera.svg" alt="Photo available icon" width="25px" height="25px" />
          &nbsp;Click on the name to see a photo of the dish
        </h3>
      </div>
      <div className={styles.menuContainer}>
        <div>
          <div className={styles.sectionContainerLeft}>
            <div className={styles.sectionFiller} />
            <div className={styles.sectionInnerContainer}>
              <h3>Appetizers</h3>
              <div className={styles.itemContainerLeft}>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label onClick={setPhoto("appetizer", "springRoll")}>
                      1. Sweet Red Bean Spring Roll (4 pieces)（<span className="chineseName">红豆沙春卷</span>)&nbsp;
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
                  </div>
                  <div className={styles.price}>6.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Spring rolls with sweet red bean paste complemented with sweet and sour chili sauce.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "appetizer"  && appetizer === "springRoll" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${appetizer}.jpg`}
                    alt={appetizer}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("appetizer", "chicken-satay")}>
                    2. Vegetable Spring Roll (4 pieces)（<span className="chineseName">素蔬菜春卷</span>)&nbsp;
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
                  </div>
                  <div className={styles.price}>6.95</div>
                  <div></div>
                  <div className={styles.description}>
                  Vegetable roll complemented with sweet and sour chili sauce.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "appetizer" && appetizer === "chicken-satay" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${appetizer}.jpg`}
                    alt={appetizer}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("appetizer", "fried-tofu")}>
                    3. Tempura Shrimp (6 pieces)（<span className="chineseName">天妇罗炸虾</span>)&nbsp;
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
                  </div>
                  <div className={styles.price}>6.95</div>
                  <div></div>
                  <div className={styles.description}>
                  Lightly battered shrimp served with a side of sweet and sour chili sauce.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "appetizer" && appetizer === "fried-tofu" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${appetizer}.jpg`}
                    alt={appetizer}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("appetizer", "tempura-shrimp")}>
                    4. Edamame（<span className="chineseName">煮毛豆</span>)&nbsp;
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
                  </div>
                  <div className={styles.price}>6.95</div>
                  <div></div>
                  <div className={styles.description}>
                  Steamed and seasoned edamame served with sweet soy sauce.
                  </div>
                  <div></div>
                </div>
              </div>
              <div className={`${styles.center} ${styles.buttonContainer}`}>
                <div className={styles.button}>
                  <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref>
                    <a>Order Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.menuPhoto}>
              <Image
                src={`/images/${appetizer}.jpg`}
                alt={appetizer}
                layout="fill"
                objectFit="cover"
                />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.sectionContainerRight}>
            <div className={styles.menuPhoto}>
            <Image
              src={`/images/${salad}.jpg`}
              alt={salad}
              layout="fill"
              objectFit="cover"
              />
            </div>
            <div className={styles.sectionInnerContainer}>
              <h3>Salads</h3>
              <div className={styles.itemContainerRight}>
                <div className={styles.itemContainer}>
                  <div className={styles.spicy}>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("salad", "beef-salad")}>
                      8. Beef Salad&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Sliced beef simmered and tossed with cilantro, crushed chili
                    pepper, cucumbers, lettuce, lime juice, mint leaves, red onions,
                    toasted rice powder, and tomatoes.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "salad" && salad === "beef-salad" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${salad}.jpg`}
                    alt={salad}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("salad", "larb-chicken")}>
                      9. Larb Chicken&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Minced chicken simmered and tossed with cilantro, crushed chili
                    pepper, lettuce, lime juice, mint leaves, red onions, and Thai
                    toasted rice powder.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "salad" && salad === "larb-chicken" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${salad}.jpg`}
                    alt={salad}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("salad", "shrimp-salad")}>
                      10. Shrimp Salad&nbsp;
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
                  </div>
                  <div className={styles.price}>12.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Shrimp mixed with crushed chili pepper, lemongrass, lettuce, and
                    mint leaves.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "salad" && salad === "shrimp-salad" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${salad}.jpg`}
                    alt={salad}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("salad", "seaweed-salad")}>
                      11. Seaweed Salad&nbsp;
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
                  </div>
                  <div className={styles.price}>6.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Seaweed topped with agar, crushed chili pepper, cucumbers,
                    lettuce, sesame seeds, and vinegar.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "salad" && salad === "seaweed-salad" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${salad}.jpg`}
                    alt={salad}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("salad", "papaya-salad")}>
                      12. Papaya Salad&nbsp;
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
                  </div>
                  <div className={styles.price}>9.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Green papaya, carrots, cherry tomatoes, fresh garlic, green beans,
                    ground peanuts, lettuce, and Thai chilis in house dressing.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "salad" && salad === "papaya-salad" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${salad}.jpg`}
                    alt={salad}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
              </div>
              <div className={`${styles.center} ${styles.buttonContainer}`}>
                <div className={styles.button}>
                  <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref>
                    <a>Order Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.sectionFiller} />
          </div>
        </div>
        <div>
          <div className={styles.sectionContainerLeft}>
            <div className={styles.sectionFiller} />
            <div className={styles.sectionInnerContainer}>
              <h3>Soups</h3>
              <div className={styles.itemContainerLeft}>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("soup", "tom-kah-veggie")}>
                      13. Tom Kah Veggie&nbsp;
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
                  </div>
                  <div>6.95(S)/10.95(L)</div>
                  <div></div>
                  <div className={styles.description}>
                    Baby corn, broccoli, cabbages, and mushrooms simmered in
                    coconut milk with lemongrass, lime juice, and Thai ginger topped
                    with red onions and cilantro.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "soup" && soup === "tom-kah-veggie" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${soup}.jpg`}
                    alt={soup}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("soup", "tom-kah-chicken")}>
                      14. Tom Kah Chicken&nbsp;
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
                  </div>
                  <div>6.95(S)/11.95(L)</div>
                  <div></div>
                  <div className={styles.description}>
                    Sliced chicken simmered in coconut milk with lemongrass, lime
                    juice, mushrooms, Thai ginger, and tomatoes topped with red onions
                    and cilantro.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "soup" && soup === "tom-kah-chicken" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${soup}.jpg`}
                    alt={soup}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("soup", "tom-yum-kung")}>
                      15. Tom Yum Koong&nbsp;
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
                  </div>
                  <div>7.95(S)/13.95(L)</div>
                  <div></div>
                  <div className={styles.description}>
                    Shrimp simmered in a spicy and sour broth with chili sauce,
                    cilantro, lemongrass, lime juice, mushrooms, and tomatoes.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "soup" && soup === "tom-yum-kung" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${soup}.jpg`}
                    alt={soup}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("soup", "po-tak-seafood")}>
                      16. Po-Tak Seafood&nbsp;
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
                  </div>
                  <div>7.95(S)/14.95(L)</div>
                  <div></div>
                  <div className={styles.description}>
                    A mix of fish, mussels, shrimp, and squid simmered in a spicy broth with
                    lemongrass, lime juice, mushrooms, and tomatoes topped with red
                    onions and cilantro.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "soup" && soup === "po-tak-seafood" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${soup}.jpg`}
                    alt={soup}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
              </div>
              <div className={`${styles.center} ${styles.buttonContainer}`}>
                <div className={styles.button}>
                  <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref>
                    <a>Order Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.menuPhoto}>
              <Image
                src={`/images/${soup}.jpg`}
                alt={appetizer}
                layout="fill"
                objectFit="cover"
                />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.sectionContainerRight}>
          <div className={styles.menuPhoto}>
              <Image
                src={`/images/${rice}.jpg`}
                alt={appetizer}
                layout="fill"
                objectFit="cover"
                />
            </div>
            <div className={styles.sectionInnerContainer}>
              <h3>Rice and Noodle</h3>
              <div className={styles.disclaimer}>
                <div>Choice of Chicken/Pork/Beef</div>
                <div>Shrimp or combination 2.00 extra</div>
              </div>
              <div className={styles.itemContainerRight}>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("rice", "bowl-thai-fried-rice")}>
                      17. Bowl Thai Fried Rice&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Fried rice with eggs, onions, sweet peas, tomatoes in house
                    seasoning.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "rice" && rice === "bowl-thai-fried-rice" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${rice}.jpg`}
                    alt={rice}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("rice", "basil-fried-rice")}>
                      18. Basil Fried Rice&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Fried rice with basil, baby corn, bamboo shoots, bell peppers, eggs, green peas, mushrooms, and tomatoes
                    in house spicy sauce.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "rice" && rice === "basil-fried-rice" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${rice}.jpg`}
                    alt={rice}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("rice", "siam-fried-rice")}>
                      19. Siam Fried Rice&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Fried rice with chili paste, eggs, onions, sweet peas, and
                    tomatoes.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "rice" && rice === "siam-fried-rice" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${rice}.jpg`}
                    alt={rice}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("rice", "pineapple-fried-rice")}>
                      20. Pineapple Fried Rice&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Fried rice with cashew nuts, eggs, onions, pineapples, sweet peas,
                    tomatoes, and house seasoning.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "rice" && rice === "pineapple-fried-rice" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${rice}.jpg`}
                    alt={rice}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("rice", "pad-thai")}>
                      21. Pad Thai&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Stir-fried rice noodles with bean sprouts, cabbages, carrots,
                    eggs, and peanuts in Pad Thai sauce.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "rice" && rice === "pad-thai" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${rice}.jpg`}
                    alt={rice}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("rice", "pad-see-ew")}>
                      22. Pad See Ew&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Stir-fried flat noodles with broccoli, carrots, and eggs in
                    sweet soy sauce.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "rice" && rice === "pad-see-ew" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${rice}.jpg`}
                    alt={rice}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("rice", "pad-kee-mao")}>
                      23. Pad Kee Mao&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Stir-fried flat noodles with baby corn, bamboo shoots, basil leaves, onions,
                    bell peppers, and straw mushrooms in spicy sauce.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "rice" && rice === "pad-kee-mao" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${rice}.jpg`}
                    alt={rice}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
              </div>
              <div className={`${styles.center} ${styles.buttonContainer}`}>
                <div className={styles.button}>
                  <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref>
                    <a>Order Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.sectionFiller} />
          </div>
        </div>
        <div>
          <div className={styles.sectionContainerLeft}>
            <div className={styles.sectionFiller} />
            <div className={styles.sectionInnerContainer}>
              <h3>Thai Curries</h3>
              <div className={styles.disclaimer}>
                <div>*Comes with a side of steamed white rice</div>
                <div>
                  *Choice of Vegetables/Chicken/Pork/Beef/Tofu
                </div>
                <div>Shrimp or combination 2.00 extra</div>
              </div>
              <div className={styles.itemContainerLeft}>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("curry", "red-curry")}>
                      24. Red Curry&nbsp;
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
                  </div>
                  <div className={styles.price}>11.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Thai red curry, coconut milk, bamboo shoots, topped with sliced
                    bell peppers and fresh basil. The red curry is derived from dry
                    red spur chilies.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "curry" && curry === "red-curry" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${curry}.jpg`}
                    alt={curry}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("curry", "green-curry")}>
                      25. Green Curry&nbsp;
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
                  </div>
                  <div className={styles.price}>11.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Thai green curry, coconut milk, bamboo shoots, topped with sliced
                    bell peppers and fresh basil. The green curry is derived from
                    green chilies.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "curry" && curry === "green-curry" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${curry}.jpg`}
                    alt={curry}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("curry", "massaman-curry")}>
                      26. Massaman Curry&nbsp;
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
                  </div>
                  <div className={styles.price}>11.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Rich, relatively mild Thai curry with choice of chicken or tofu
                    simmered in coconut milk with Massaman curry paste, carrots,
                    onions, peanuts, and potatoes.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "curry" && curry === "massaman-curry" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${curry}.jpg`}
                    alt={curry}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("curry", "pineapple-curry")}>
                      27. Pineapple Curry&nbsp;
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
                  </div>
                  <div className={styles.price}>11.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Thai curry, coconut milk, pineapples, red chili paste, topped with
                    sliced bell peppers and fresh basil.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "curry" && curry === "pineapple-curry" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${curry}.jpg`}
                    alt={curry}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("curry", "evil-jungle-chicken-curry")}>
                      28. Evil Jungle Curry&nbsp;
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
                  </div>
                  <div className={styles.price}>12.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Thai curry, coconut milk, choice of minced chicken or tofu, bell
                    peppers, sliced cabbages, and white onions, topped with cilantro
                    and red onion flakes.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "curry" && curry === "evil-jungle-chicken-curry" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${curry}.jpg`}
                    alt={curry}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
              </div>
              <div className={`${styles.center} ${styles.buttonContainer}`}>
                <div className={styles.button}>
                  <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref>
                    <a>Order Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.menuPhoto}>
              <Image
                src={`/images/${curry}.jpg`}
                alt={appetizer}
                layout="fill"
                objectFit="cover"
                />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.sectionContainerRight}>
            <div className={styles.menuPhoto}>
              <Image
                src={`/images/${stirfried}.jpg`}
                alt={stirfried}
                layout="fill"
                objectFit="cover"
                />
            </div>
            <div className={styles.sectionInnerContainer}>
              <h3>Stir Fried</h3>
              <div className={styles.disclaimer}>
                <div>*Comes with a side of steamed white rice</div>
                <div>Choice of Chicken/Pork/Beef/Tofu</div>
                <div>Shrimp or combination 2.00 extra</div>
              </div>
              <div className={styles.itemContainerRight}>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("stirfried", "basil-stir-fry")}>
                      29. Basil Stir Fry&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Basil stir fried with choice of tofu with eggplant or meat, sautéed with crushed
                    garlic, green beans, onions, and peppers in chili sauce.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "stirfried" && stirfried === "basil-stir-fry" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${stirfried}.jpg`}
                    alt={stirfried}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("stirfried", "garlic-and-pepper-stir-fry")}>
                      30. Garlic & Pepper Stir Fry&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Crushed garlic and bell peppers stir fried with choice of meat or
                    tofu, sautéed with baby corn, carrots, mushrooms, and onions.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "stirfried" && stirfried === "garlic-and-pepper-stir-fry" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${stirfried}.jpg`}
                    alt={stirfried}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("stirfried", "himapan-stir-fry")}>
                      31. Himapan Stir Fry&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Cashews stir fried with choice of meat or tofu, sautéed with baby
                    corn, broccoli, carrots, garlic, mushrooms, onions, and peppers.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "stirfried" && stirfried === "himapan-stir-fry" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${stirfried}.jpg`}
                    alt={stirfried}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("stirfried", "sweet-and-sour-stir-fry")}>
                      32. Sweet and Sour Stir Fry&nbsp;
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
                  </div>
                  <div className={styles.price}>11.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Sweet and sour sauce stir fried with choice of meat or tofu,
                    sautéed with cucumbers, onions, peppers, pineapples, and tomatoes.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "stirfried" && stirfried === "sweet-and-sour-stir-fry" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${stirfried}.jpg`}
                    alt={stirfried}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("stirfried", "spicy-stir-fry")}>
                      33. Spicy Stir Fry&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Choice of meat or tofu stir fried with basil, bell peppers, green
                    beans, red curry sauce, and onions in house spicy sauce.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "stirfried" && stirfried === "spicy-stir-fry" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${stirfried}.jpg`}
                    alt={stirfried}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("stirfried", "pra-ram-stir-fry")}>
                      34. Pra Ram Stir Fry&nbsp;
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
                  </div>
                  <div className={styles.price}>12.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Chicken or fried tofu stir fried with fresh garlic, served on a
                    bed of steamed veggie and topped with house peanut sauce.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "stirfried" && stirfried === "pra-ram-stir-fry" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${stirfried}.jpg`}
                    alt={stirfried}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div></div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("stirfried", "broccoli-stir-fry")}>
                      35. Broccoli Stir Fry&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Choice of meat or tofu stir fried with bell peppers, broccoli,
                    carrots, mushrooms, and onions in oyster sauce.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "stirfried" && stirfried === "broccoli-stir-fry" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${stirfried}.jpg`}
                    alt={stirfried}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("stirfried", "house-chili-paste-stir-fry")}>
                      36. House Chili Paste Stir Fry&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Choice of meat or tofu stir fried with bamboo shoots, bell
                    peppers, green onions, mushrooms, and onions in house chili oil
                    sauce.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "stirfried" && stirfried === "house-chili-paste-stir-fry" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${stirfried}.jpg`}
                    alt={stirfried}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("stirfried", "general-chicken")}>
                      37. General Chicken&nbsp;
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
                  </div>
                  <div className={styles.price}>10.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Battered pieces of chicken stir fried with peppers in house sweet
                    and spicy sauce.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "stirfried" && stirfried === "general-chicken" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${stirfried}.jpg`}
                    alt={stirfried}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
              </div>
              <div className={`${styles.center} ${styles.buttonContainer}`}>
                <div className={styles.button}>
                  <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref>
                    <a>Order Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.sectionFiller} />
          </div>
        </div>
        <div>
          <div className={styles.sectionContainerLeft}>
            <div className={styles.sectionFiller} />
            <div className={styles.sectionInnerContainer}>
              <h3>Seafood</h3>
              <div className={styles.disclaimer}>
                <div>*Comes with a side of steamed white rice</div>
              </div>
              <div className={styles.itemContainerLeft}>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("seafood", "phad-phed-catfish")}>
                      38. Phad Phed Catfish&nbsp;
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
                  </div>
                  <div className={styles.price}>15.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Deep fried filet of catfish stir fried with green beans, bell pepper, yellow onions in mild
                    curry sauce topped with crispy basil leaves.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "seafood" && seafood === "phad-phed-catfish" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${seafood}.jpg`}
                    alt={seafood}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("seafood", "koong-pad-nam-prik-pao")}>
                      39. Koong Pad Nam Prik Pao&nbsp;
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
                  </div>
                  <div className={styles.price}>15.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Sautéed shrimp with bamboo shoots, chili sauce, mint leaves,
                    mushrooms, onions, and bell peppers.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "seafood" && seafood === "koong-pad-nam-prik-pao" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${seafood}.jpg`}
                    alt={seafood}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("seafood", "pla-muk-pad-prink")}>
                      40. Pla Muk Pad Prink&nbsp;
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
                  </div>
                  <div className={styles.price}>15.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Sautéed squid with bamboo shoots, chili sauce, mint leaves,
                    mushrooms, onions, and bell peppers.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "seafood" && seafood === "pla-muk-pad-prink" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${seafood}.jpg`}
                    alt={seafood}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.itemContainer}>
                  <div>
                    <Image
                      src="/icons/chili.svg"
                      alt="Spicy"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <label className="seeMenuPhoto" onClick={setPhoto("seafood", "pad-talay")}>
                      41. Pad Talay&nbsp;
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
                  </div>
                  <div className={styles.price}>15.95</div>
                  <div></div>
                  <div className={styles.description}>
                    Sautéed combination of mussel, shrimp, and squid with bamboo
                    shoots, chili sauce, mushrooms, bell peppers, snow peas and
                    onions.
                  </div>
                  <div></div>
                </div>
                <div className={showImage.enabled && showImage.section === "seafood" && seafood === "pad-talay" ? styles.menuPreview: styles.hide}>
                  <Image
                    src={`/images/${seafood}.jpg`}
                    alt={seafood}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
              </div>
              <div className={`${styles.center} ${styles.buttonContainer}`}>
                <div className={styles.button}>
                  <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref>
                    <a>Order Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.menuPhoto}>
              <Image
                src={`/images/${seafood}.jpg`}
                alt={seafood}
                layout="fill"
                objectFit="cover"
                />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.sectionContainerRight}>
            <div className={`${styles.menuPhoto} ${styles.menuPhotoSides}`} />
            <div className={styles.sectionInnerContainer}>
              <h3>Side Order</h3>
              <div className={`${styles.itemContainer} ${styles.itemContainerRight}`}>
                <div></div>
                <div>42. Steamed White Rice</div>
                <div className={styles.price}>2.00</div>
                <div></div>
                <div>43. Sticky Rice</div>
                <div className={styles.price}>2.95</div>
                <div></div>
                <div>44. Steamed Brown Rice</div>
                <div className={styles.price}>2.50</div>
                <div></div>
                <div>45. Steamed Vegetables</div>
                <div className={styles.price}>2.95</div>
                <div></div>
                <div>46. Cucumber Salad</div>
                <div className={styles.price}>2.95</div>
                <div></div>
                <div>47. Fried Rice</div>
                <div className={styles.price}>2.50</div>
                <div></div>
                <div>48. Peanut Sauce</div>
                <div className={styles.price}>1.50</div>
              </div>
              <div className={`${styles.center} ${styles.buttonContainer}`}>
                <div className={styles.button}>
                  <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref>
                    <a>Order Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.sectionFiller} />
          </div>
        </div>
        <div>
          <div className={styles.sectionContainerLeft}>
            <div className={styles.sectionFiller} />
            <div className={styles.sectionInnerContainer}>
              <h3>Kids Menu</h3>
              <div className={styles.disclaimer}>
                <div>*Comes with choice of French Fries or Fried Rice</div>
              </div>
              <div className={`${styles.itemContainer} ${styles.itemContainerLeft}`}>
                <div></div>
                <div>49. Chicken Nuggets (5)</div>
                <div className={styles.price}>5.95</div>
                <div></div>
                <div>50. Popcorn Shrimp</div>
                <div className={styles.price}>5.95</div>
                <div></div>
                <div>51. Corndog</div>
                <div className={styles.price}>4.95</div>
              </div>
              <div className={`${styles.center} ${styles.buttonContainer}`}>
                <div className={styles.button}>
                  <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref>
                    <a>Order Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={`${styles.menuPhoto} ${styles.menuPhotoKids}`} />
          </div>
        </div>
        <div>
          <div className={styles.sectionContainerRight}>
            <div className={`${styles.menuPhoto} ${styles.menuPhotoDessert}`} />
            <div className={styles.sectionInnerContainer}>
              <h3>Dessert</h3>
              <div className={`${styles.itemContainer} ${styles.itemContainerRight}`}>
                <div></div>
                <div>52. Mango Sticky Rice</div>
                <div className={styles.price}>4.95</div>
                <div></div>
                <div>53. Ice Cream (vanilla or chocolate)</div>
                <div className={styles.price}>2.95</div>
              </div>
              <div className={`${styles.center} ${styles.buttonContainer}`}>
                <div className={styles.button}>
                  <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref>
                    <a>Order Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.sectionFiller} />
          </div>
        </div>
        <div>
          <div className={styles.sectionContainerLeft}>
            <div className={styles.sectionFiller} />
            <div className={styles.sectionInnerContainer}>
              <h3>Beverages</h3>
              <div className={`${styles.itemContainer} ${styles.itemContainerLeft}`}>
                <div></div>
                <div>54. Iced Tea</div>
                <div className={styles.price}>1.50</div>
                <div></div>
                <div>55. Coffee</div>
                <div className={styles.price}>1.50</div>
                <div></div>
                <div>56. Thai Iced Tea</div>
                <div className={styles.price}>2.95</div>
                <div></div>
                <div>57. Thai Iced Coffee</div>
                <div className={styles.price}>2.95</div>
                <div></div>
                <div>58. Hot Tea</div>
                <div></div>
                <div></div>
                <div className={styles.indent}>Choice of Jasmine/Green/Black</div>
                <div className={styles.price}>1.95</div>
                <div></div>
                <div>59. Soda (Can)</div>
                <div className={styles.price}>1.00</div>
              </div>
              <div className={`${styles.center} ${styles.buttonContainer}`}>
                <div className={styles.button}>
                  <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref>
                    <a>Order Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={`${styles.menuPhoto} ${styles.menuPhotoBeverages}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
