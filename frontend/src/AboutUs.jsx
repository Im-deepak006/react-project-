import React from 'react';
import aboutimg from './assets/image/aboutus.jpg';
import aboutimg1 from './assets/image/aboutus1.png';
import './AboutUs.css';
import  logo from './assets/image/sambhaar.png';
import meela from './assets/image/meela.png';
import gbuba from './assets/image/gbuba.png';
const AboutUs = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="full-banner">
          <img src={aboutimg} alt="About Sambhaar" />
        </div>
        <div className="title" style={{ textAlign: 'center' }}>
          <h2><strong>About us</strong></h2>
          <p>Home&gt;about us</p>
        </div>
      </div>

      <div className="container-fluid about-section">
        <div className="heading">
          <h2 className="text-warning"><strong>Sambhaar envisions evolving into India’s Favorite Grocer.</strong></h2>
          <h4 className="text-danger">About Sambhaar</h4>
        </div>

        <div className="row align-items-center my-4">
          <div className="col-md-6">
            <img src={aboutimg1} className="img-fluid rounded" alt="About Sambhaar" />
          </div>
          <div className="col-md-6 about-text">
            <p>“Sambhaar – Kirana ka Raja” is a brand that provides a premium grocery experience nationwide. With an interactive website and dedicated mobile apps, we serve customers across India.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid about-text">
        <p><strong>“Sambhaar”</strong> is a brand that shall concentrate more on providing South Indian Specialty Foods and groceries. We Sambhaar shall ensure to cater to the South Indian public and to those who love south Indian food and grocery. All speciality foods and groceries from Tamilnadu, Kerala, Karnataka, Andhra & Telangana are handpicked by ensuring high standards of Quality.</p>
        <p>“Sambhaar.com” shall be available both offline and online. “Sambhaar” plans to open a chain of premium stores in selected cities and to start “Sambhaar.com” has opened its first store in Chennai, Thane. Within a short span “Sambhaar.com” has become the favourite grocer of the people of Chennai..</p>
        <p>“Sambhaar.com” shall also be available online under Sambhaar – Kirana ka Raja, @ www.sambhaar.com</p>
        <p>Sambhaar.com is a Registered Trademark & Owned by Maverico Technologies Pvt Ltd.</p>
        <p>Sambhaar.com Projects & Services opc Pvt Ltd is a subsidy of Maverico Technologies Pvt Ltd.</p>
        <p>
          Customer service is at heart and quality our commitment. Since our humble beginning, we have refined and developed our brand on the wants and needs of our loyal customers. From sourcing products and getting them delivered to the customer’s doorstep, we want our customers to have total confidence when ordering with us. We provide quality products at affordable prices.
        </p>
        <p>
          We at Sambhaar strive to become India’s Favourite and best price online and offline superstore. Sambhaar uses its in-house technology platform to manage a network of over 1,500 farmers and wholesale distributors that enables Sambhaar.com to provide Quality products at an affordable price, mostly from manufacturers to customers directly. We deliver at your doorstep within hours. You save not only time but also money with our best prices and offer.
        </p>
        <p>Sambhaar, Kirana ka Raja despite being premium brands, it’s affordable, it is a significant saving for its customers with quality and quantity being the top priority.</p>
        <p>The Founders Elayaraja Duraisamy & Sidharrth Rajah joined hands with multiple farm producers to give this grocery business a giant leap and branded this grocery business under the name and style “Sambhaar – Kirana ka Raja”.</p>
      </div>

      <div className="container-fluid text-center my-4">
        <h4 className="text-danger"><strong>Who We Are</strong></h4>
      </div>

      <div className="container-fluid about-text">
        <p>Sambhaar and MEELA’S are the brainchild of Sidharrth Rajah, who decided to start these brands in Mumbai, the business capital of India, intending to provide quality products to the common man at an affordable price. Our products go through multiple quality assessments, ensuring that only the best reach the end-users.</p>
        <p>Sambhaar aims to manufacture, pack, and distribute selected quality products under the following brand names.</p>
        <ul>
          <li><strong>GBUBA</strong> - Kirana ka Ajuba - Indian Grocery</li>
          <li><strong>MEELA’S SNAKJAK</strong> - South Indian Specialty Snacks & Sweets</li>
          <li><strong>MEELA’S COCOSURE</strong> - Traditional Cold Pressed Coconut Oil</li>
          <li><strong>MEELA’S NUTTYSPICY</strong> - Premium Dry Fruits, Nuts, and Spices</li>
          <li><strong>SHARBATIGOLD</strong> - Atta and Flours</li>
        </ul>
        <p>Based on the research and survey, Sidharrth Rajah has formulated and registered the above brands under Maverico Technologies Pvt Ltd, and the products under these brand names shall be on shelves very soon.</p>
      </div>

      <div className="container-fluid text-center my-4">
        <div className="row justify-content-center brand-logos">
          <div className="col-md-4"><img src={logo} alt="Sambhaar" /></div>
          <div className="col-md-4"><img src={meela} alt="Meela's" /></div>
          <div className="col-md-4"><img src={gbuba} alt="GBUBA" /></div>
        </div>
      </div>

      <div className="container-fluid stats-section">
        <div className="row text-center">
          <div className="col-md-2"><span style={{ fontSize: '24px' }}>2</span><br />Store in World</div>
          <div className="col-md-2"><span style={{ fontSize: '24px' }}>10</span><br />Fresh Farm</div>
          <div className="col-md-2"><span style={{ fontSize: '24px' }}>25+</span><br />Our Partner</div>
          <div className="col-md-2"><span style={{ fontSize: '24px' }}>5k+</span><br />Favorite Customer</div>
          <div className="col-md-2"><span style={{ fontSize: '24px' }}>Upto 10%</span><br />Online Discount</div>
        </div>
      </div>

      <div className="container-fluid why-choose-us">
        <h4>Why Choose Us</h4>
        <p>We are always committed to offering quality products at an affordable price, and customer satisfaction is our priority. Our commitment extends to our employees in making them learn, grow, and prosper personally and professionally. We value being community-minded and environmentally conscious.</p>
      </div>

      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="content-box">
              <h2 className="section-title">Our Vision</h2>
              <p> Sambhaar.com is here to make grocery shopping for Indian households financially savvy and convenient. We have a wide assortment of items mainly produced in India. As trendsetters in retail, we deliver from our store to your doorstep on the same day of placing an order, avoiding the troubles of dealing with intermediaries. With our warm and friendly service, we make sure to remind you of the next door shop experience.</p>
              <p>Maverico’s first pilot local project has gained the trust of its clients, and our loyal clients have certified us as their most favourite grocery store. The offline grocery stores today have a shopping experience that’s fulfilling for our customers who look for quality products at prices that are the best in town. The beautiful and helpful salespeople at the store make the shopping experience worthwhile.</p>
              <p>Sambhaar.com online store is one of the best when it comes to online grocery shopping. It’s time to do the grocery shopping from the comfort of your home. It could be a single day's requirement or a month's provision list, Sambhaar.com does it with care and delivers at the earliest. The experience about the product and the timely delivery has endeared us to the customers, and they vouch for the quality of the products. With some of the best discounts and getting them delivered in the shortest possible time, Sambhaar is here to revolutionise the entire online and offline grocery shopping experience. www.sambhaar.com</p>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="content-box">
              <h2 className="section-title">Our Mission</h2>
              <p> In phase one, we aim to open a minimum of ten premium stores including three super warehouse sale points in India. Our vision is to create an online network of grocery retail spanning throughout India with all the household items, sorted according to your needs; this would make grocery shopping extremely easy. With a Sambhaar Super Warehouse or MEELA’S store within every 30 kms, Indian households would have their grocery shopping solved. Sambhaar is also devising a franchisee program to ensure Sambhaar Super Warehouse and MEELA’S stores are available to the people in all major cities and townships across India.</p>
              <p>In phase one, Sambhaar aims to establish at least ten premium stores, including three super warehouse sale points across India. Our vision is to build a nationwide online grocery retail network, offering a seamless shopping experience with all household essentials tailored to your needs. With a Sambhaar Super Warehouse or MEELA'S store within every 30 km, grocery shopping for Indian households will become effortless. Additionally, we are developing a franchise program to expand Sambhaar Super Warehouse and MEELA'S stores to major cities and townships across the country.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid green-section">
        <h2>Go Green With Us</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="feature-box">
              <div className="feature-icon">
                <img src="https://cdn-icons-png.flaticon.com/128/1904/1904425.png" alt="Recycling" />
              </div>
              <div className="feature-title">Our Super Quick Turnaround</div>
              <div className="feature-text">Quality is retained throughout the process</div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-box">
              <div className="feature-icon">
                <img src="https://cdn-icons-png.flaticon.com/128/1903/1903321.png" alt="Organic" />
              </div>
              <div className="feature-title">No Pesticides</div>
              <div className="feature-text">Use completely organic</div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-box">
              <div className="feature-icon">
                <img src="https://cdn-icons-png.flaticon.com/128/1903/1903445.png" alt="Fast Delivery" />
              </div>
              <div className="feature-title">Fastest & Free Shipping</div>
              <div className="feature-text">The best quality when reaching the consumer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
