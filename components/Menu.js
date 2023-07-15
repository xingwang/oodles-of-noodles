import styles from "../styles/Menu.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Section from "./Section";

const menu = [
  {
    name: "APPETIZERS",
    items: [
      {
        name: "Sweet Red Bean Paste Spring Roll",
        image: "red-bean-spring-rolls",
        units: "4 pieces",
        chineseName: "红豆沙春卷",
        price: "7.95",
        description:
          "Fried spring rolls with sweet red bean paste topped with powdered sugar.",
      },
      {
        name: "Vegetable Spring Roll",
        image: "spring-rolls",
        units: "4 pieces",
        chineseName: "蔬菜春卷",
        price: "7.95",
        description:
          "Fried vegetable roll complemented with sweet and sour chili sauce.",
      },
      {
        name: "Tempura Shrimp",
        image: "tempura-shrimp",
        units: "6 pieces",
        chineseName: "天妇罗炸虾",
        price: "7.95",
        description:
          "Lightly battered shrimp served with a side of sweet and sour chili sauce.",
      },
      {
        name: "Edamame",
        image: "edamame",
        chineseName: "水煮毛豆",
        price: "6.95",
        description:
          "Steamed and seasoned edamame served with sweet soy sauce.",
      },
    ],
  },
  {
    name: "COLD SIDES",
    items: [
      {
        name: "Garlic Pickled Vegetables",
        image: "pickled-vegetables",
        chineseName: "蒜味什锦泡菜",
        price: "4.50",
        description: "Pickled cabbage, carrot, and daikon radish.",
      },
      {
        name: "Spicy Garlic Pickled Vegetables",
        image: "spicy-pickled-vegetables",
        chineseName: "蒜味辣椒什锦泡菜",
        price: "4.50",
        description:
          "Pickled cabbage, carrot, daikon radish, and chili peppers.",
        spicy: true,
      },
      {
        name: "Pickled Radish & Carrots",
        image: "pickled-radish-carrots",
        chineseName: "凉拌萝卜干咸菜",
        price: "4.50",
        description:
          "Blanched daikon radish and carrots pickeled in our special soy sauce, cilantro, garlic, and lemon mixture.",
      },
      {
        name: "Shredded Potato Salad",
        image: "shredded-potato-salad",
        chineseName: "凉拌土豆丝",
        price: "4.95",
        description:
          "Thinly sliced potatoes mixed with chili peppers, cilantro, and carrots.",
        spicy: true,
      },
      {
        name: "Cold Stewed Beef Slices",
        image: "cold-stewed-beef-slices",
        chineseName: "卤牛肉片",
        price: "9.95",
        description:
          "Chilled stewed beef cut into slices served with our soy sauce and chili oil garnished with julienned carrots and cilantro.",
        spicy: true,
      },
      {
        name: "Seaweed Salad",
        image: "seaweed-salad",
        chineseName: "海带沙拉",
        price: "4.95",
        description:
          "Seaweed topped with agar, crushed chili pepper, carrots, cucumbers, lettuce, sesame seeds, and vinegar.",
        spicy: true,
      },
    ],
  },
  {
    name: "NOODLES",
    disclaimers: [
      "*Our house special chili oil is available upon request",
      "Extra noodle 2.00",
      "Extra meat 2.00",
      "Substitute with rice noodle 2.00",
    ],
    items: [
      {
        name: "Beef Noodles",
        image: "beef-noodles",
        chineseName: "牛肉汤面",
        price: "11.95",
        description:
          "Noodles with sliced stewed beef, small bok choy, potatoes, and special spices cooked in curry and beef bone marrow broth topped with julienned carrots and chopped cilantro. Our most popular dish.",
      },
      {
        name: "Chicken Noodles",
        image: "chicken-noodles",
        chineseName: "鸡丝汤面",
        price: "11.95",
        description:
          "Noodles with shredded chicken, small bok choy, tea egg cooked in chicken broth topped with sliced egg crepe, julienned carrots, and chopped cilantro. Lighter in taste.",
      },
      {
        name: "Vegetable Noodles",
        image: "vegetable-noodles",
        chineseName: "素汤面",
        price: "10.95",
        description:
          "Noodles with fried tofu, tea egg, small bok choy, and carrots in seasoned vegetable broth topped with sliced egg crepe, julienned carrots, and chopped cilantro. Lighter in taste.",
      },
      {
        name: "Soybean Paste Noodles",
        image: "soybean-paste-noodles",
        chineseName: "炸酱面",
        price: "11.95",
        description:
          "Noodles topped with shredded carrots, cucumbers, egg crepe, green onions, and our special stir fried soybean paste with ground pork diced with carrots, and diced daikon radish.",
      },
    ],
  },
  {
    name: "DUMPLINGS",
    disclaimers: ["*Our house special chili oil are available upon request"],
    items: [
      {
        name: "Pan Fried Pork Pot Stickers",
        image: "potstickers",
        units: "12 pieces",
        chineseName: "猪肉白菜锅贴",
        price: "11.95",
        description:
          "Pan fried dumplings with ground pork, napa cabbage, and special seasonings filling served with soy sauce.",
      },
      {
        name: "Pan Fried Chicken Pot Stickers",
        image: "potstickers",
        units: "12 pieces",
        chineseName: "鸡肉芹菜锅贴",
        price: "11.95",
        description:
          "Pan fried dumplings with ground chicken, minced celery, and special seasonings filling served with soy sauce.",
      },
      {
        name: "Boiled pork dumplings",
        image: "dumplings",
        units: "12 pieces",
        chineseName: "猪肉白菜水饺",
        price: "11.95",
        description:
          "Boiled dumplings with ground pork, napa cabbage, and special seasonings filling served with dark vinegar.",
      },
      {
        name: "Boiled chicken dumplings",
        image: "dumplings",
        units: "12 pieces",
        chineseName: "鸡肉芹菜水饺",
        price: "11.95",
        description:
          "Boiled dumplings with ground chicken, minced celery, and special seasonings filling served with dark vinegar.",
      },
      {
        name: "Pan Fried Beef Meat Bun",
        image: "beef-meat-bun",
        units: "4 pieces",
        chineseName: "煎牛肉饼",
        price: "12.95",
        description:
          "Pan fried bun with ground beef, cabbage, carrot, onion, and special seasoning filling served with soy sauce.",
      },
    ],
  },
  {
    name: "SOUPS",
    disclaimers: [
      "*Our house special chili oil is available upon request",
      "Add noodle 2.00",
    ],
    items: [
      {
        name: "Pork Wonton Soup",
        image: "pork-wontons",
        units: "10 pieces",
        chineseName: "猪肉鸡汤馄饨",
        price: "10.95",
        description:
          "Wontons with ground pork, green onions, and special seasonings filling cooked in chicken broth topped sliced egg crepe, julienned carrots, and cilantro.",
      },
      {
        name: "Chicken Wonton Soup",
        image: "chicken-wontons",
        units: "10 pieces",
        chineseName: "鸡肉鸡汤馄饨",
        price: "10.95",
        description:
          "Wontons with ground chicken, green onions, and special seasonings filling cooked in chicken broth topped sliced egg crepe, julienned carrots, and cilantro.",
      },
    ],
  },
  {
    name: "DESSERTS",
    items: [
      {
        name: "New York Cheesecake",
        image: "ny-cheesecake",
        price: "5.50",
      },
      {
        name: "Strawberry Cheesecake",
        image: "cheesecake",
        price: "5.50",
      },
      {
        name: "Pumpkin Cheesecake",
        image: "pumpkin-cheesecake",
        price: "5.50",
      },
      {
        name: "Ice Cream (Vanilla/Chocolate)",
        price: "3.50",
      },
    ],
  },
  {
    name: "BEVERAGES",
    items: [
      {
        name: "Iced Tea",
        price: "1.50",
      },
      {
        name: "Fountain Drink",
        price: "1.95",
        description:
          "Choice of Coke/Diet Coke/Sprite/Dr. Pepper/Diet Dr. Pepper/Lemonade",
      },
      {
        name: "Hot Tea",
        price: "1.95",
        description: "Choice of Black/Green/Jasmine",
      },
      {
        name: "Soda (Can)",
        price: "1.00",
        description:
          "Choice of Coke/Diet Coke/Sprite/Dr. Pepper/Diet Dr. Pepper",
      },
    ],
  },
  {
    name: "SEASONAL SPECIALS",
    disclaimers: ["Extra noodle 2.00", "Extra meat 2.00"],
    items: [
      {
        name: "Beef Chilled Noodles",
        image: "chilled-noodles-beef",
        chineseName: "牛肉凉面",
        price: "11.95",
        description:
          "Chilled noodles mixed with our sweet vinegar, topped with sliced stewed beef, julienned carrots, cucumbers, egg crepe, and chopped cilantro. Served with our house special chili oil on the side.",
      },
      {
        name: "Chicken Chilled Noodles",
        image: "chilled-noodles-chicken",
        chineseName: "鸡丝凉面",
        price: "11.95",
        description:
          "Chilled noodles mixed with our sweet vinegar, topped with shredded chicken, julienned carrots, cucumbers, egg crepe, and chopped cilantro. Served with our house special chili oil on the side.",
      },
      {
        name: "Vegetable Chilled Noodles",
        image: "chilled-noodles-veggie",
        chineseName: "素凉面",
        price: "10.95",
        description:
          "Chilled noodles mixed with our sweet vinegar, topped with fried tofu slices, julienned carrots, cucumbers, egg crepe, and chopped cilantro. Served with our house special chili oil on the side.",
      },
    ],
  },
];

const Menu = () => {
  const [image, setImage] = useState({
    APPETIZERS: "red-bean-spring-rolls",
    "COLD SIDES": "shredded-potato-salad",
    NOODLES: "beef-noodles",
    DUMPLINGS: "dumplings",
    SOUPS: "chicken-wontons",
    DESSERTS: "cheesecake",
    BEVERAGES: "tea",
    "SEASONAL SPECIALS": "chilled-noodles-beef",
  });
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

    const newImage = {
      ...image,
    };
    newImage[section] = item;
    setImage(newImage);
  };
  let number = 1;
  return (
    <>
      <div className={styles.sectionTitle}>
        <h1 className={styles.center}>Menu</h1>
        <h2 className={`${styles.center} ${styles.camera}`}>
          <Image
            src="/icons/camera.svg"
            alt="Photo available icon"
            placeholder="blur"
            width="25"
            height="25"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          &nbsp;Click on the name to see a photo of the dish
        </h2>
      </div>
      <div className={styles.menuContainer}>
        {menu.map((section, index) => {
          number += section.items.length;
          if (index === 0 || index % 2 === 0) {
            return (
              <div key={section.name} className={styles.sectionContainerLeft}>
                <div className={styles.sectionFiller} />
                <div className={styles.sectionInnerContainer}>
                  <h2>{section.name}</h2>
                  {section.disclaimers
                    ? section.disclaimers.map((disclaimer) => {
                        return (
                          <div key={disclaimer} className={styles.disclaimer}>
                            {disclaimer}
                          </div>
                        );
                      })
                    : ""}
                  <div className={styles.itemContainerLeft}>
                    <Section
                      items={section.items}
                      section={section.name}
                      setPhoto={setPhoto}
                      showImage={showImage}
                      image={image}
                      number={number}
                    />
                  </div>
                  <div className={`${styles.center} ${styles.buttonContainer}`}>
                    <div className={styles.button}>
                      <Link
                        href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main"
                        target="_blank"
                        passHref
                        aria-label="Order online"
                      >
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.menuPhoto}>
                  <Image
                    src={`/images/${image[section.name]}.jpg`}
                    alt={image[section.name]}
                    placeholder="blur"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            );
          }
          return (
            <div key={section.name} className={styles.sectionContainerRight}>
              <div className={styles.menuPhoto}>
                <Image
                  src={`/images/${image[section.name]}.jpg`}
                  alt={image[section.name]}
                  placeholder="blur"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.sectionInnerContainer}>
                <h2>{section.name}</h2>
                {section.disclaimers
                  ? section.disclaimers.map((disclaimer) => {
                      return (
                        <div key={disclaimer} className={styles.disclaimer}>
                          {disclaimer}
                        </div>
                      );
                    })
                  : ""}
                <div className={styles.itemContainerRight}>
                  <Section
                    items={section.items}
                    section={section.name}
                    setPhoto={setPhoto}
                    showImage={showImage}
                    image={image}
                    number={number}
                  />
                </div>
                <div className={`${styles.center} ${styles.buttonContainer}`}>
                  <div className={styles.button}>
                    <Link
                      href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main"
                      target="_blank"
                      passHref
                      aria-label="Order online"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.sectionFiller} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
