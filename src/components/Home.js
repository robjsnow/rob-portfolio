// Home.js
import Section1 from './Sections/Section1.js'
import Section2 from './Sections/Section2.js'
import Section3 from './Sections/Section3.js'
import Section4 from './Sections/Section4.js'
import ScrollToTopButton from './scrollToTopButton.js';

function Home() {
    return (<div>
     <ScrollToTopButton/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>

    </div>);
  }
export default Home;