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
        image: "red-bean-spring-roll",
        units: "4 pieces",
        chineseName: "红豆沙春卷",
        price: "6.95",
        description: "Spring rolls with sweet red bean paste."
      },
      {
        name: "Vegetable Spring Roll",
        units: "4 pieces",
        chineseName: "蔬菜春卷",
        price: "6.95",
        description: "Vegetable roll complemented with sweet and sour chili sauce."
      },
      {
        name: "Tempura Shrimp",
        units: "6 pieces",
        chineseName: "天妇罗炸虾",
        price: "6.95",
        description: "Lightly battered shrimp served with a side of sweet and sour chili sauce."
      },
      {
        name: "Edamame",
        image: "edamame",
        chineseName: "水煮毛豆",
        price: "5.95",
        description: "Steamed and seasoned edamame served with sweet soy sauce."
      },
    ]
  },
  {
    name: "COLD SIDES",
    items: [
      {
        name: "Garlic Pickled Vegetables",
        chineseName: "蒜味什锦泡菜",
        price: "3.95",
        description: "Pickled cabbage, carrot, and daikon radish."
      },
      {
        name: "Spicy Garlic Pickled Vegetables",
        chineseName: "蒜味辣椒什锦泡菜",
        price: "3.95",
        description: "Pickled cabbage, carrot, daikon radish, and chili peppers.",
        spicy: true,
      },
      {
        name: "Celery and Peanut Salad",
        chineseName: "凉拌芹菜花生米",
        price: "3.95",
        description: "Blanched celery and peanuts mixed in our special seasame sauce."
      },
      {
        name: "Shredded Potato Salad",
        chineseName: "凉拌土豆丝",
        price: "3.95",
        description: "Thinly sliced potatoes mixed with chili peppers.",
        spicy: true,
      },
      {
        name: "Chili Pepper and Tofu Salad",
        chineseName: "老虎菜",
        price: "3.95",
        description: "Thinly sliced dried tofu mixed with peppers, cilantro, and green onions.",
        spicy: true,
      },
      {
        name: "Seaweed Salad",
        image: "seaweed-salad",
        chineseName: "海带沙拉",
        price: "3.95",
        description: "Seaweed topped with agar, crushed chili pepper, cucumbers, lettuce, sesame seeds, and vinegar.",
        spicy: true,
      },
    ]
  },
  {
    name: "NOODLES",
    disclaimers: [
      "*Our house special vinegar and chili oil available are upon request",
      "Extra noodle 2.00",
      "Extra meat 2.00"
    ],
    items: [
      {
        name: "Beef Noodles",
        chineseName: "牛肉汤面",
        price: "10.95",
        description: "Noodles with braised beef, small bok choy, potatoes, and special spices cooked in curry and beef bone marrow broth topped with sliced egg crepe and chopped cilantro."
      },
      {
        name: "Chicken Noodles",
        chineseName: "鸡丝汤面",
        price: "10.95",
        description: "Noodles with shredded chicken, small bok choy, tea egg cooked in chicken broth topped with sliced egg crepe and chopped cilantro."
      },
      {
        name: "Vegetable Noodles",
        chineseName: "素汤面",
        price: "9.95",
        description: "Noodles with fried tofu, tea egg, small bok choy, and carrots in seasoned vegetable broth topped with sliced egg crepe and chopped cilantro."
      },
      {
        name: "Soybean Paste Noodles",
        image: "soybean-paste-noodles",
        chineseName: "炸酱面",
        price: "10.95",
        description: "Noodles topped with shredded carrots, cucumbers, egg crepe, green onions, and our special stir fried soybean paste with ground pork diced with carrots, and diced daikon radish."
      },
    ]
  },
  {
    name: "DUMPLINGS",
    disclaimers: [
      "*Our house special vinegar and chili oil available are upon request",
    ],
    items: [
      {
        name: "Pan Fried Pork Pot Stickers",
        units: "12 pieces",
        chineseName: "猪肉白菜锅贴",
        price: "10.95",
        description: "Pot stickers with ground pork, napa cabbage, and special seasonings filling."
      },
      {
        name: "Pan Fried Chicken Pot Stickers",
        units: "12 pieces",
        chineseName: "鸡肉芹菜锅贴",
        price: "10.95",
        description: "Pot stickers with ground chicken, minced celery, and special seasonings filling."
      },
      {
        name: "Boiled pork dumplings",
        units: "12 pieces",
        chineseName: "猪肉白菜水饺",
        price: "10.95",
        description: "Pot stickers with ground pork, napa cabbage, and special seasonings filling."
      },
      {
        name: "Boiled chicken dumplings",
        units: "12 pieces",
        chineseName: "鸡肉芹菜水饺",
        price: "10.95",
        description: "Pot stickers with ground chicken, minced celery, and special seasonings filling."
      },
      {
        name: "Pan Fried Beef Meat Bun",
        units: "4 pieces",
        chineseName: "煎牛肉饼",
        price: "11.95",
        description: "Pan fried bun with ground beef, carrot, onion, and special seasoning filling."
      },
    ]
  },
  {
    name: "SOUPS",
    disclaimers: [
      "*Our house special vinegar and chili oil available are upon request",
    ],
    items: [
      {
        name: "Pork Wonton Soup",
        units: "10 pieces",
        chineseName: "猪肉鸡汤馄饨",
        price: "9.95",
        description: "Wontons with ground pork, green onions, and special seasonings filling cooked in chicken broth topped sliced egg crepe and cilantro."
      },
      {
        name: "Chicken Wonton Soup",
        units: "10 pieces",
        chineseName: "鸡肉鸡汤馄饨",
        price: "9.95",
        description: "Wontons with ground chicken, green onions, and special seasonings filling cooked in chicken broth topped sliced egg crepe and cilantro."
      },
    ]
  },
  {
    name: "DESSERTS",
    items: [
      {
        name: "New York Cheesecake",
        price: "4.95",
      },
      {
        name: "Strawberry Cheesecake",
        price: "4.95",
      },
      {
        name: "Vanilla Ice Cream",
        price: "2.95",
      },
      {
        name: "Chocolate Ice Cream",
        price: "2.95",
      },
    ]
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
        description: "Choice of Coke/Diet Coke/Sprite/Dr. Pepper/Diet Dr. Pepper/Lemonade"
      },
      {
        name: "Hot Tea",
        price: "1.95",
        description: "Choice of Black/Green/Jasmine"
      },
      {
        name: "Soda (Can)",
        price: "2.95",
        description: "Choice of Coke/Diet Coke/Sprite/Dr. Pepper/Diet Dr. Pepper"
      },
    ]
  },
];

const Menu = () => {
  const [image, setImage] = useState({
    APPETIZERS: "edamame",
    "COLD SIDES": "seaweed-salad",
    NOODLES: "soybean-paste-noodles",
    DUMPLINGS: "dumplings",
    SOUPS: "wontons",
    DESSERTS: "cheesecake",
    BEVERAGES: "tea"
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
      ...image
    };
    newImage[section] = item;
    setImage(newImage);
    console.log(image, "image");
  };
  let number = 1;
  return (
    <>
      <div className={styles.sectionTitle}>
        <h1 className={styles.center}>Menu</h1>
        {/* <h3 className={styles.center}>
          <Image src="/icons/camera.svg" alt="Photo available icon" width="25px" height="25px" />
          &nbsp;Click on the name to see a photo of the dish
        </h3> */}
      </div>
      <div className={styles.menuContainer}>
        {
          menu.map((section, index) => {
            number += section.items.length;
            if (index === 0 || index%2 === 0) {
              return (
                <div key={section.name} className={styles.sectionContainerLeft}>
                  <div className={styles.sectionFiller} />
                  <div className={styles.sectionInnerContainer}>
                    <h3>{section.name}</h3>
                    {
                      section.disclaimers ? section.disclaimers.map((disclaimer) => {
                        return (<div key={disclaimer} className={styles.disclaimer}>{disclaimer}</div>)
                      }) : ""
                    }
                    <div className={styles.itemContainerLeft}>
                      <Section items={section.items} section={section.name} setPhoto={setPhoto} showImage={showImage} image={image} number={number}/>
                    </div>
                    {/* <div className={`${styles.center} ${styles.buttonContainer}`}>
                      <div className={styles.button}>
                        <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref>
                          <a>Order Now</a>
                        </Link>
                      </div>
                    </div> */}
                  </div>
                  <div className={styles.menuPhoto}>
                    <Image
                      src={`/images/${image[section.name]}.jpg`}
                      alt={image[section.name]}
                      layout="fill"
                      objectFit="cover"
                      />
                  </div>
                </div>
              )
            }
            return (
              <div key={section.name} className={styles.sectionContainerRight}>
                <div className={styles.menuPhoto}>
                  <Image
                    src={`/images/${image[section.name]}.jpg`}
                    alt={image[section.name]}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className={styles.sectionInnerContainer}>
                  <h3>{section.name}</h3>
                  {
                    section.disclaimers ? section.disclaimers.map((disclaimer) => {
                      return (<div key={disclaimer} className={styles.disclaimer}>{disclaimer}</div>)
                    }) : ""
                  }
                  <div className={styles.itemContainerRight}>
                    <Section items={section.items} section={section.name} setPhoto={setPhoto} showImage={showImage} image={image} number={number} />
                  </div>
                  {/* <div className={`${styles.center} ${styles.buttonContainer}`}>
                    <div className={styles.button}>
                      <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref>
                        <a>Order Now</a>
                      </Link>
                    </div>
                  </div> */}
                </div>
                <div className={styles.sectionFiller} />
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default Menu;
