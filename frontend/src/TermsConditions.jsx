import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './TermsConditions.css';
import bannerImage from './assets/image/t&cbanner.jpg';

const TermsConditions = () => {
  return (
    <div>

      <div className="full-banner">
        <img src={bannerImage} alt="About Sambhaar" />
      </div>

      <div className="title text-center my-4">
        <h2><strong>Terms & Conditions</strong></h2>
        <p>Home &gt; Terms & Conditions</p>
      </div>

      <div className="content">
        <div className="s1 mb-4">
          <p>This page states the Terms and Conditions under which you (User) may use this platform (“sambhaar.com”). Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this site. The business, any of its business divisions and / or its subsidiaries, associate companies or subsidiaries to subsidiaries or such other investment companies (in India or abroad) reserve their respective rights to revise these Terms and Conditions at any time by updating this posting. You should visit this page periodically to re-appraise yourself of the Terms and Conditions, because they are binding on all users of this platform.</p>
        </div>

        <div className="s2 mb-4">
          <h2><strong>Use of Content</strong></h2>
          <p>All logos, brands, marks headings, labels, names, signatures, numerals, shapes, or any combinations thereof, appearing in this site, except as otherwise noted, are properties either owned, or used under license, by the business and / or its associate entities who feature on this platform. The use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited.</p>
          <p>You may not sell or modify the content of this platform or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the respective organisation’s or entity’s written permission.</p>
        </div>

        <div className="s3 mb-4">
          <h2><strong>Delivery, delivery fee, handling fee, and delivery time</strong></h2>
          <ul>
            <li>We will provide Next Day delivery from the date of order (Order Day is 0.01am to 11.59pm).</li>
            <li>We will deliver the products to the address you provide on the platform. You are responsible for providing a complete and correct delivery address, along with any necessary delivery instructions. We are not responsible for any delays in delivery caused by incorrect or incomplete addresses provided by you.</li>
            <li>Our delivery agents will call on your registered phone number while delivering one-time orders. If you ask us to leave a delivery unattended at your address, you release us from any liability that may arise from the products being left unattended for any length of time. This includes risks such as theft, tampering, contamination, and changes in temperature for chilled or frozen items.</li>
            <li>We charge a very minimal handling fee of ₹50 per delivery only when your order is less than the amount of ‘₹500’ for products. This is regardless of the number of products we deliver per delivery.</li>
            <li>We do not charge any delivery fee for subscriptions (recurring orders). For ‘one-time’ orders below ₹500 in value, we charge a minimal delivery fee of ₹50. For orders above ₹99 in value, we offer free delivery. The Users will be informed about all the charges, fees, and costs (including, delivery fee) that may be levied on the purchase of the Products on the Platform at the checkout page during a transaction. The Company does not manipulate the price of any Products and/or Services offered on the Platform.</li>
            <li>If you choose to pay for your order with “Cash on Delivery (CoD),” the delivery agents have the right to refuse delivery if you do not make the full payment. In such cases, we will treat the order as cancelled, and we will not be responsible for any losses or damages that may result from the non-delivery. We reserve the right to charge you for the delivery fee for such a cancelled order and recover the same at our discretion towards the cost incurred on such delivery attempt.</li>
          </ul>
        </div>

        <div className="s4 mb-4">
          <h2><strong>Wallet</strong></h2>
          <p>The Company provides a Wallet facility as the payment option for subscription orders to its Users, which can be used for availing Services on the Platform. You hereby consent that your use of Wallet is subject to the geographical and other usage restrictions as may be made Website applicable from time to time and shall also be subject to the additional terms and conditions.</p>
        </div>
      </div>

    </div>
  );
};

export default TermsConditions;
