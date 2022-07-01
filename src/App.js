import "./App.scss";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import FooterPage from "./Pages/Footer";
import LandingPage from "./Pages/LandingPage";
import OurTeam from "./Pages/OurTeam";
import ServicesPage from "./Pages/ServicePage";
import ServiceSlider from "./Pages/ServiceSlider";
import Testimonials from "./Pages/Testimonials";
import SEOImg from "./assets/services/Markorrect  SEO.svg";
import SMMImg from "./assets/services/Markorrect  SMM.svg";
import ConversionOptimizationImg from "./assets/services/Markorrect  conversion optimisation.svg";
import AppDevImg from "./assets/services/Markorrect  App development.svg";
import ContentMarketingImg from "./assets/services/Markorrect  content marketing.svg";
import DigitalIntellectualImg from "./assets/services/Markorrect  Digital Intellectual.svg";
import GraphicsDesignImg from "./assets/services/Markorrect  Graphic designing.svg";
import PPCImg from "./assets/services/Markorrect  ppc.svg";
import VideoMarketingImg from "./assets/services/Markorrect  video marketing.svg";
import WebDevImg from "./assets/services/Markorrect  web development.svg";
function App() {
  const sliderOneData = [
    {
      title: `<span>Search</span> Engine Optimization`,
      content: `Search Engine Optimization is the process of increasing a website's or a web page's online visibility in a search engine's unpaid results - also known as "organic" or "earned" results. Google's ranking algorithm has changed dramatically in recent years. With AI-driven SEO strategies, you can weather the storm of changing times and sophisticated SERPs.
      Connect with us to correct organic results for your business and lead your competition.
      `,
      imgSrc: SEOImg,
      backgroundColor: "black",
      color: "white",
    },
    {
      title: `<span>Social</span> Media Marketing`,
      content: `The Most Important Part of Online Communications Channels devoted to community-based input, engagement, content-sharing, and collaboration is social media. Forums, Microblogging, Social Networking, Social Bookmarking, Social Curation, Business Improvement, and Other Websites and Applications (Brand Awareness & Lead Generation Program).
      By employing the platform's technology, you can turn your social channels into a lead generation and audience engagement 
      resource.`,
      imgSrc: SMMImg,
      color: "black",
      backgroundColor: "white",
    },
    {
      title: `<span>Pay per click</span> campaigns`,
      content: `It's a means of paying for visitors to your website rather than trying to "earn" them naturally. Grow your customer base, increase revenue, reach out to specific audiences, drive online purchases, retarget customers, increase engagement, and generate more leads as a result of this.
      The most efficient and environmentally E-commerce sales were the focus of Google and Facebook marketing. Use GDN, Youtube, and Native Ad Networks for additional scalability.
      Show your prospects laser-targeted adverts.Using our exclusive techniques, we can help you get the most out of your ad spend, no matter what your campaign goal is.`,
      imgSrc: PPCImg,
      backgroundColor: "black",
      color: "white",
    },
    {
      title: `<span>Content</span> Marketing`,
      content: `It's all the mainstream to use content marketing. It's time to dive in if your company hasn't done so yet. Our Content Marketing Management solution can help you get your message out there.
      With Content Marketing, we help companies persuade audiences.
      To develop the correct content for the right audience, we combine data, artificial intelligence, and a proven process.`,
      imgSrc: ContentMarketingImg,
      color: "black",
      backgroundColor: "white",
    },
    {
      title: `<span>Conversion</span> optimization services`,
      content: `Are you frustrated by a lack of sales? Are your sales goals not being met? We are professionals at analysing the conversion process and identifying difficulties that lead to sales chances failing. It's aggravating to lose a transaction, especially when you can't figure out why. 
      We may convert your irritation into an opportunity to learn and enhance your conversion process. Our all-encompassing conversion optimization strategy ensures that every step of the sales process is optimised, leaving no lead hanging.`,
      imgSrc: ConversionOptimizationImg,
      backgroundColor: "black",
      color: "white",
    },
    {
      title: `<span>Digital</span> Intellectual Services`,
      content: `Customers expect a personal connection to their favourite brands. Data, technology, and analytics are used by our Markorrect team to better identify customer audiences and journeys. These insights help us make our marketing more targeted and our customer interactions more personalised.
      CMOs have high expectations for their digital marketing budgets. Our advanced analytics experts create dashboards and predictive models that aid internal and external teams in making the best decisions and optimizations possible.`,
      imgSrc: DigitalIntellectualImg,
      color: "black",
      backgroundColor: "white",
    },
  ];
  const sliderTwoData = [
    {
      title: `<span>Video</span> Marketing Service`,
      content: `Your video content can help you build trust with a growing audience of video consumers who are interested in your products and/or services.
      Trying to get your content found online can sometimes be a difficult task. While there are sponsored possibilities to expand your audience and get your material found online, this may not be the most effective approach to do so. 
      We can help your videos perform effectively in search and on YouTube, whether you're wanting to increase demand for your visual content or link it to the proper audience.
      `,
      imgSrc: VideoMarketingImg,
      color: "white",
      backgroundColor: "black",
    },
    {
      title: `<span>Amazon</span> Marketing Service`,
      content: `It's no secret that Amazon is a major player in the online retail market. We assist our clients in better positioning their products on a popular and profitable ecommerce platform that continues to increase in size and complexity. 
      We stay on top of new advancements and modifications to their platform so that you can take use of the most up-to-date features and have your products stand out.
      Our research-based approach to Amazon search engine optimization ensures that you reap the benefits of our passion for getting your products in front of the appropriate people. 
      `,
      imgSrc:
        "https://wallpaperboat.com/wp-content/uploads/2020/06/08/44354/amazon-01-920x518.jpg",
      color: "black",
      backgroundColor: "white",
    },
    {
      title: `<span>App</span> Development Service`,
      content: `Quickly turn your idea into an app.
      An app is more important than ever for your company. Build yours without fear. Before you begin, get award-winning technology at a defined price and delivery date.
      Create outstanding apps, delight customers with useful mobile goods, and assist our clients in their growth. We have the knowledge, the enthusiasm, and the desire to succeed.
      `,
      imgSrc: AppDevImg,
      color: "white",
      backgroundColor: "black",
    },
    {
      title: `<span>Web</span> Development Service`,
      content: `For each project, we do a strategic analysis to guarantee that we not only grasp all of the criteria, but also that the final result will solve our clients' problems or satisfy their expectations. We look into each pitch to see where our customer is going and whether or not their aim is one that would benefit them in the long run. We help our clients understand what form of website will provide them the greatest value over time thanks to our years of experience creating tailored digital experiences.`,
      imgSrc: WebDevImg,
      color: "black",
      backgroundColor: "white",
    },
    {
      title: `<span>Graphics</span> Designing Service`,
      content: `When done with the goal of developing a brand's unique identity, design becomes more than just a gorgeous blend of colours and text. Every colour, element, word, and even dot and blank space must have a function.
      That isn't something everyone will tell you! They don't approach branding and design the way we do!
      `,
      imgSrc: GraphicsDesignImg,
      color: "white",
      backgroundColor: "black",
    },
  ];
  return (
    <div className="App">
      <LandingPage />
      <AboutUs />
      <ServicesPage />
      {/*<ServiceSlider data={sliderOneData} />
      <ServiceSlider data={sliderTwoData} />
      <OurTeam />
      <ContactUs />
      <Testimonials />
      <FooterPage /> */}
    </div>
  );
}

export default App;
