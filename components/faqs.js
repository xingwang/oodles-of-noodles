import styles from "../styles/Home.module.css";

const Faqs = () => {
  return (
    <>
      <div className={`${styles.faqs}`}>
        <div className={styles.sectionTitle}>
          <h1 className={styles.center}>FAQs</h1>
        </div>
        <div>&nbsp;</div>
        <div className={styles.faqContainer}>
          <div>
            <div className={styles.question}>Do you sell phở?</div>
            <div className={styles.answer}>
              We only sell Chinese flour-based noodles. We do have rice noodles
              available for gluten-free customers but there is a $3 upcharge.
            </div>
            <div>&nbsp;</div>
          </div>
          <div>
            <div className={styles.question}>What kind of cuisine is this?</div>
            <div className={styles.answer}>
              These are Chinese noodles and dumplings.
            </div>
            <div>&nbsp;</div>
          </div>
          <div>
            <div className={styles.question}>
              Where do you guys get your noodles/dumplings?
            </div>
            <div className={styles.answer}>
              We make all our noodles and dumplings in-house. Each morning and
              afternoon, we try to predict what our demand is and make what we
              need. If we run out, we make them on the fly. Many times,
              customers are eating things we made just a few hours prior.
            </div>
            <div>&nbsp;</div>
          </div>
          <div>
            <div className={styles.question}>
              Why are you guys closed from 2-4:30PM every day?
            </div>
            <div className={styles.answer}>
              During the first weeks we were open, we found that we kept running
              out of stock on certain items and either have to deny the order or
              increase the wait time. In order to keep the great, fresh texture
              and taste, we try to only make as much as we expect will sell out.
              During the the afternoon, we make whatever is low in inventory for
              the following meal.
            </div>
            <div>&nbsp;</div>
          </div>
          <div>
            <div className={styles.question}>
              Why not just make a whole bunch at once?
            </div>
            <div className={styles.answer}>
              We want to keep things as fresh as possible and reduce spoilage.
              This translates directly to a better tasting product as well as
              keeping costs low for the customer.
            </div>
            <div>&nbsp;</div>
          </div>
          <div>
            <div className={styles.question}>
              That is a lot of food. Do you guys sell a smaller size?
            </div>
            <div className={styles.answer}>
              Our menu was designed to keep things simple for our parents with
              limited English capacity. To that end, we only have 1 size
              available for everything.
            </div>
            <div>&nbsp;</div>
          </div>
          <div>
            <div className={styles.question}>
              Why do you guys put broth in the noodle container for to-go
              orders?
            </div>
            <div className={styles.answer}>
              This is to prevent the noodles from clumping together and end up
              turning into a giant ball of dough when you get home.
            </div>
            <div>&nbsp;</div>
          </div>
          <div>
            <div className={styles.question}>
              What can I do to prevent the noodles from getting soggy?
            </div>
            <div className={styles.answer}>
              Unfortunately, the only answer to that is to eat them as soon as
              possible.
            </div>
            <div>&nbsp;</div>
          </div>
          <div className={styles.paddingBottom}>
            <div className={styles.question}>
              I want to take these noodles somewhere far. What can you do to
              help me?
            </div>
            <div className={styles.answer}>
              We can sell the raw noodles along with the broth. You can cook the
              noodles yourself and it will be the same great texture.
            </div>
            <div>&nbsp;</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
