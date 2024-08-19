import '../styles/main.css';

const Main = () => {
    return (
        <div>

<header>
      <nav>
        <div class="nav_logo">
          <a href="/">
            <img src="images/coffee_logo.png" alt="Coffee Logo" />
            <h2>Growing Golds</h2>
          </a>
        </div>

        <input type="checkbox" id="click" />
        <label for="click">
          <i class="menu_btn bx bx-menu"></i>
          <i class="close_btn bx bx-x"></i>
        </label>

        <ul>
        <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#why">Why Us</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <section class="hero_section">
      <div class="section_container">
        <div class="hero_container">
          <div class="text_section">
            <h2>Transform Ideas into</h2>
            <h3>Impactful Business</h3>
            <p>
            Welcome to The Growing Golds
            Connecting Investors with Promising Business Opportunities.
            </p>

            <div class="hero_section_button">
              <button class="button"><a href='/i'>Become an Investor</a></button>
              <button class="button"><a href='/investorapplicationform'>Be an Inventor</a></button>
            </div>
          </div>

          {/* <div class="image_section">
            <img src="images/cofffee_image.png" alt="Coffee" />
          </div> */}
        </div>
      </div>
    </section>

    <section class="about_us" id="about">
      <div class="section_container">
        <div class="about_container">
          <div class="text_section">
            <h2 class="section_title">About Us</h2>
            <p>
            The Growing Gold is a dynamic platform designed to bridge 
            the gap between investors and innovative business ideas. 
            Our mission is to foster a thriving entrepreneurial ecosystem by 
            connecting visionary entrepreneurs with potential investors, 
            facilitating growth and success for both parties. Whether you 
            are an investor seeking lucrative opportunities or an entrepreneur
             with a groundbreaking idea, The Harvester is your gateway to a prosperous future.
            </p>
          </div>

          <div class="image_section">
            <img src="images/about_coffee.png" alt="coffee" />
          </div>
        </div>
      </div>
    </section>

    <section class="services" id="service">
      <h2 class="section_title">Our Services</h2>
      <div class="section_container">
        <div class="service_container">
          <div class="services_items">
            <img src="images/hot_beverages.png" alt="Hot Beverages" />
            <div class="services_text">
              <h3>Linking of Investors and Business Ideas</h3>
              <p>
                Wide range of Steaming hot coffees to make you fresh and light.
              </p>
            </div>
          </div>
          <div class="services_items">
            <img src="images/cold_beverages.png" alt="Cold Beverages" />
            <div class="services_text">
              <h3>Business Idea Generation and Validation</h3>
              <p>
                Creamy and frothy cold coffee to make you feel cool from inside.
              </p>
            </div>
          </div>
          <div class="services_items">
            <img src="images/refreshment.png" alt="Refreshment" />
            <div class="services_text">
              <h3>Feasibility Studies</h3>
              <p>Fruit and icy refreshing drink to make you feel good.</p>
            </div>
          </div>
          <div class="services_items">
            <img src="images/special_combos.png" alt="Special Combos" />
            <div class="services_text">
              <h3>Business Planning</h3>
              <p>
                Now it's really easy to chose your favourite eating and drinking
                combinations.
              </p>
            </div>
          </div>
          <div class="services_items">
            <img
              src="images/burger_frenchFries.png"
              alt="Burger & French Fries"
            />
            <div class="services_text">
              <h3>Incubation</h3>
              <p>Yummy! Quick bites to satisfy your small size hunger.</p>
            </div>
          </div>
          <div class="services_items">
            <img src="images/dessert.png" alt="Desserts" />
            <div class="services_text">
              <h3>Startup Support</h3>
              <p>
                This for sure would satiate your palate and take you on a
                culinary treat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why_us" id="why">
      <h2 class="section_title">Why Us?</h2>
      <div class="section_container">
        <div class="why_container">
          <div class="why_items">
            <img src="images/delicious.png" alt="Delicious" />
            <div class="why_us_text">
              <h3>Expertise</h3>
              <p>
              Our team of experts is dedicated to evaluating and selecting 
              the best business ideas with high growth potential.
              </p>
            </div>
          </div>
          <div class="why_items">
            <img src="images/pleasant.png" alt="Pleasant" />
            <div class="why_us_text">
              <h3>Support</h3>
              <p>
              We provide continuous support and resources to both investors and 
              entrepreneurs, ensuring a smooth and successful partnership.
              </p>
            </div>
          </div>
          <div class="why_items">
            <img src="images/hospitality.png" alt="Hospitality" />
            <div class="why_us_text">
              <h3>Community</h3>
              <p>
              Join a thriving community of like-minded individuals who are 
              passionate about innovation and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* 
    <section class="gallery" id="gallery">
      <h2 class="section_title">Gallery</h2>
      <div class="section_container">
        <div class="gallery_container">
          <div class="gallery_items">
            <img src="images/gallery_1.jpg" alt="Gallery Image" />
          </div>
          <div class="gallery_items">
            <img src="images/gallery_2.jpg" alt="Gallery Image" />
          </div>
          <div class="gallery_items">
            <img src="images/gallery_3.jpg" alt="Gallery Image" />
          </div>
          <div class="gallery_items">
            <img src="images/gallery_4.jpg" alt="Gallery Image" />
          </div>
          <div class="gallery_items">
            <img src="images/gallery_5.jpg" alt="Gallery Image" />
          </div>
          <div class="gallery_items">
            <img src="images/gallery_6.jpg" alt="Gallery Image" />
          </div>
        </div>
      </div>
    </section> */}

    <section class="contact" id="contact">
      <h2 class="section_title">Contact Us</h2>
      <div class="section_container">
        <div class="contact_container">
          <div class="contact_form">
            <form action="#">
              <div class="field">
                <label for="Name">Full Name</label>
                <input type="text" id="Name" placeholder="Your Name" required />
              </div>
              <div class="field">
                <label for="email">Your Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div class="field">
                <label for="number">Your Number</label>
                <input
                  type="number"
                  id="number"
                  placeholder="Your Contact Number"
                  required
                />
              </div>
              <div class="field">
                <label for="textarea">Message</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button class="button" id="submit">Submit</button>
            </form>
          </div>

          <div class="contact_text">
            <div class="contact_items">
              <i class="bx bx-current-location"></i>
              <div class="contact_details">
                <h3>Our Location</h3>
                <p>Colombo, Sri Lanka</p>
              </div>
            </div>
            <div class="contact_items">
              <i class="bx bxs-envelope"></i>
              <div class="contact_details">
                <h3>General Enquries</h3>
                <p>growingglods@xyz.com</p>
              </div>
            </div>
            <div class="contact_items">
              <i class="bx bxs-phone-call"></i>
              <div class="contact_details">
                <h3>Call Us</h3>
                <p>+01234567</p>
              </div>
            </div>
            <div class="contact_items">
              <i class="bx bxs-time-five"></i>
              <div class="contact_details">
                <h3>Our Timing</h3>
                <p>Available for 24x7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="section_container">
        <div class="footer_section">
          <div class="footer_logo"> 
            <a href="/">
              <img src="images/coffee_logo.png" alt="Coffee Logo" />
              <h2>Growing Golds</h2>
            </a>
          </div>

          <div class="useful_links">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#why">Why Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div class="contact_us">
            <h3>Contact</h3>
            <ul>
              <li>
                <i class="bx bx-current-location"></i>
                <span>Colombo, SriLanka</span>
              </li>
              <li>
                <i class="bx bxs-phone-call"></i> <span>+0192728239</span>
              </li>
              <li>
                <i class="bx bxs-time-five"></i>
                <span>24 X 7</span>
              </li>
            </ul>
          </div>

          <div class="follow_us">
            <h3>Follow</h3>
            <i class="bx bxl-facebook-circle"></i>
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-instagram-alt"></i>
          </div>
        </div>
      </div>
    </footer>



        </div>
    );
};

export default Main;
