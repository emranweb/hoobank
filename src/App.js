import style from "./style";
import {
  Billing,
  Bussiness,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  State,
  Testimonial,
} from "./components";

function App() {
  return (
    <div className="bg-primary h-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${style.flexStart} bg-primary`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
          <State />
          <Bussiness />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
