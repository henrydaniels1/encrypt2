import { Nav } from "./Nav";
import { Header } from "./Header";
import { Feature } from "./Body1";
import { Faq } from "./Faq";
// import { Example } from "./Example";
import { Footer } from "./Footer";

export default function Landing() {
  return (
    <div>
       <Nav />
        <Header />
      <Feature />
      <Faq />
    
          <Footer/>
    </div>
  )
}
