import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import plane from "../../assets/plane.svg";

import "./index.scss";

export default function ServicesPage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const services = {
    "Search Engine Optimization": [
      "Technical SEO",
      "On Page SEO",
      "Off Page SEO",
      "Enterprise SEO",
      "Local SEO",
      "Ecommerce SEO",
      "International SEO",
      "Amazon SEO",
      "Shopify SEO",
      "Magento SEO",
      "Woocommerce SEO",
      "Link Building Services",
      "Link Removal Services",
      "Video SEO",
      "Mobile SEO",
      "Google Penalty Assessment Services",
    ],
    "SOCIAL MEDIA MARKETING SERVICES": [
      "Social Media Analysis",
      "Social Media Optimization Services",
      "Facebook Management",
      "Instagram Management",
      "Linkedin Management",
      "Twitter Management",
      "Pinterest Management",
      "Snapchat Management",
      "Tiktok Management",
      "Influencer Marketing Management",
      "Content Creation",
      "Content Distribution Across Social Channels",
      "Target Audience Research",
      "Hashtag Research",
      "Hashtag Optimization",
    ],
    "PAID MARKETING SERVICES": [
      "PPC Management Services",
      "Google Ads Management ",
      "Facebook Ads Management",
      "Twitter Ads Management",
      "Instagram Ads Management",
      "Bing Ads Management",
      "Microsoft Ads Management",
      "Snapchat Ads Management",
      "YouTube Ads Management",
      "Amazon Ads Management",
      "Moj Ads Management",
      "MX Takatak Ads Management",
      "Tiktok Ads Management",
      "Paid Marketing Strategy",
      "Paid Marketing Objectives Optimization",
    ],
    "CONTENT MARKETING SERVICES": [
      "Lead Driven Content Strategy",
      "Conversion Driven Content Strategy",
      "Comprehensive Content Marketing Strategy",
      "Blog Writting",
      "Guest Posting",
      "Articles Writing ",
      "Create Compelling Content",
      "Researching Your Target Audience",
      "Infographics Creation and Distribution",
      "Social Media Content Creation",
      "Case Studies Writing",
      "SEO Optimised Website Content",
      "B2B Content Creation",
      "Ebooks Creation",
      "News Releases",
      "Surveys Q&A Portals",
    ],
    "CONVERSION OPTIMISATION SERVICES": [
      "CRO & UX Asset Creation",
      "User Experience Reporting",
      "Ongoing Project Management",
      "Website User Testing Video Creation",
      "Initial Heatmap and Click Stream Testing and Analysis",
      "Conversion Tracking Code Setup",
      "Confirmation/Thank You Page Setup",
      "Goals Funnel Setup:- Initial Analytics and Reporting",
      "Initial Conversion Audit",
      "ROI and Split Test Setup",
      "Conversion Strategy",
      "Lead Form Setups",
      "Static CTA's Setup",
      "Conversion Tracking",
    ],
    "DIGITAL INTELLECTUAL SERVICES": [
      "Planning and Strategy",
      "Mapping the Customer Journey",
      "Insights & Data Analytics",
      "Persona Creation",
      "Dashboard Development",
      "Web Analytics",
      "Social Analytics",
    ],
    "VIDEO MARKETING SERVICES": [
      "Youtube Account Management",
      "Moj Account Management",
      "MX Takatak Account Management",
      "YouTube SEO ",
      "Content Creation",
      "Content Distribution ",
      "YouTube Thumbnail Creation",
      "Hashtag Research",
      "Trend Analysis",
      "Target Audience Research",
      "Account Optimization",
    ],
    "AMAZON MARKETING SERVICES": [
      "Amazon SEO Services",
      "Account Creation Services",
      "FBA Account Creation Services",
      "Product Listing Services",
      "International Account Creation Services",
      "A+ Content Creation Services",
      "Buy Box Strategy Creation",
      "Catalogue Services",
      "Account Management Services",
      "Enhanced Brand Content Creation",
      "Paid Advertisement Services",
      "Seller Reinstatement Services",
      "Brand Registry Services ",
      "Shipping Setup Services",
    ],
    "WEB DEVELOPMENT SERVICES": [
      "One Page Website",
      "Domain Setup",
      "Hosting Setup",
      "Contact Form",
      "Responsive Design",
      "Multi Pages Website",
      "E-commerce Website",
      "Shopify Website",
      "SEO Optimized Website",
      "SSL Certificate",
      "Control Panel",
      "Social Media Integration",
      "Google Maps Integration",
      "WhatsApp Integration",
      "Chatbot Integration",
      "Custom Web Development",
      "Services",
    ],
    "GRAPHIC DESIGNING SERVICES": [
      "Emailer Design",
      "Posters",
      "Ideographic",
      "Web and App Banners",
      "Blog Images",
      "Logo Design",
      "Presentation Design",
      "Google Display Network Image Design",
      "Ads Creative Designs",
      "Social Media Post Designs",
      "Social Media Story Designs",
      "Newsletter Design",
      "Ebook Design",
      "Catalogue Design",
      "Menu Design",
      "Interior Design",
      "Machine Design",
      "2D Designs",
      "3D Designs",
      "2D Animated Videos",
      "3D Animated Videos",
    ],
    "APP DEVELOPMENT SERVICES": [
      "Native Android app development",
      "Native iOS app development",
      "Web-based app development",
      "Use of bleeding edge coding technologies and app ",
      "Development tools",
      "Device Size Detection and",
      "Customization",
    ],
  };

  return (
    <div className="service-page-container">
      <img alt="img" src={plane} alt="plane" className="plane plane-one" />
      <img alt="img" src={plane} alt="plane" className="plane plane-two" />
      <div className="service-page-title">
        <p>services</p>
        <h1>Growth Driven</h1>
        <p>
          some dummy textLerem ipsum dolor sit amet, consecteturLerem ipsum
          dolor sit amet, consecteturLerem ipsum dolor sit amet, consectetur{" "}
        </p>
      </div>
      <div className="service-page-content">
        <Carousel autoPlaySpeed={1000} infinite={true} responsive={responsive}>
          {Object.keys(services).map((service, index) => (
            <div key={index} className="service-list">
              <h3>{service}</h3>
              <ul>
                {services[service].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="service-page-footer">Unleash Your Growth</div>
    </div>
  );
}
