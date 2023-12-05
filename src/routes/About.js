import Navbar from "../components/Navbar.js";
import "./About.css";
import Footer from "../components/Footer.js";


function About(){
    return (
        
    <>

    <section className="hero">
    <div className="heading">
        <h1>About Us</h1>
        <div className="line">

            <div></div>
            <div></div>
            <div></div>

        </div>
    </div>

    <div className="container">
      
        <div className="hero-content"> 

          <h2>Welcome to <span class="cd">PVR</span> financial services</h2>

          <p>PVR financial services is a platform for financial analysis and information,
             aimed at empowering both seasoned traders and newcomers. Founded by 
             passionate investors and market experts, it provides reliable news,
              in-depth analysis, and educational resources. The team of analysts
               researches and interprets market trends, breaking down complex
                concepts into practical insights. We prioritize transparency 
                and integrity, delivering unbiased, quality content for informed
                 investment decisions. Join our community of investors, traders,
                  and financial enthusiasts, and embark on a journey towards financial empowerment with PVR 
                  financial sevices. Let's navigate the markets together, turning knowledge into opportunities and 
                  empowering your financial future.</p>

                    <a href="ContactUs.html"><button className="btn"> Contact us</button> </a>
                </div>

                <div className="hero-image">
                    <img src="images/bg12.jfif" alt=""> </img>

                </div>

    </div>

</section>





<section className="mvc">  

   <div className="mvv-container">

    <div className="mvv-block">
       <div className="image">
        <img src="images/f.jpg" alt=""> </img>
       
      </div>
      
       <div className="content"> 
        <h5>Our Mission</h5>
          <p>
          Our mission is to empower individuals with the knowledge and skills
           needed to navigate the complexities of the stock market successfully.
            We aim to provide comprehensive and accessible stock market classes that cater to both beginners and experienced investors,
           fostering financial literacy and independence.
          </p>

       </div>

    </div>

    <div className="mvv-block">
      <div className="image">
       <img src="images/h.jpg" alt=""> </img>

      </div>

      <div className="content"> 
       <h5>Our Vision</h5>
       <p>
        Our vision is to be a leading provider of stock market education,
         recognized for our commitment to excellence, innovation, and 
         inclusivity. We aspire to create a community of informed and 
         confident investors who can make sound financial decisions, build
          wealth, and achieve their long-term financial goals through a deep
           understanding of the stock market.
       </p>

      </div>
      
   </div>


   <div className="mvv-block">
    <div class="image">
     <img src="images/g.jpg" alt=""> </img>
    </div>

    <div className="content"> 

     <h5>Our Values</h5>
     <p>
      Our vision is to be a leading provider of stock market education,
       recognized for our commitment to excellence, innovation, and 
       inclusivity. We aspire to create a community of informed and 
       confident investors who can make sound financial decisions, build
        wealth, and achieve their long-term financial goals through a deep
         understanding of the stock market.
     </p>

    </div>
    
 </div>

   </div>

  </section>







<section className="zero">
    <div className="row">
       <h1>Our Team</h1>
    </div>

    <div className="row">

        <div className="column">
         <div className="card">
                <div class="img-container">
                   <img src="images/bg20.jfif" alt=""> </img>
                </div>

                  <h3>Luna Turner</h3>
                  <p>Founder</p>

                  <div className="icons">
                      <a href="#">
                        <i className="fa-brands fa-square-x-twitter"></i>
                      </a>

                      <a href="#">
                        <i className="fa-brands fa-square-instagram"></i>
                      </a>

                      <a href="#">
                        <i className="fa-brands fa-facebook"></i>
                      </a>

                      <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                  </div>
            </div>
        </div>

      

         <div className="column">
            <div className="card">
                   <div className="img-container">
                      <img src="images/bg11.jfif" alt=""> </img>
                   </div>
                     <h3>Steve Rogers</h3>
                     <p> Developer</p>

                     <div className="icons">
                         <a href="#">
                           <i className="fa-brands fa-square-x-twitter"></i>
                         </a>

                         <a href="#">
                           <i className="fa-brands fa-square-instagram"></i>
                         </a>

                         <a href="#">
                           <i className="fa-brands fa-facebook"></i>
                         </a>

                         <a href="#">
                            <i className="fa-brands fa-linkedin"></i>
                         </a>

                     </div>
               </div>
           </div>



         <div className="column">
            <div className="card">
                   <div className="img-container">
                      <img src="images/bg16.jfif" alt=""> </img>
                   </div>
                     <h3>Steve Rogers</h3>
                     <p> Developer</p>

                     <div className="icons">
                         <a href="#">
                           <i className="fa-brands fa-square-x-twitter"></i>
                         </a>

                         <a href="#">
                           <i className="fa-brands fa-square-instagram"></i>
                         </a>

                         <a href="#">
                           <i className="fa-brands fa-facebook"></i>
                         </a>

                         <a href="#">
                            <i className="fa-brands fa-linkedin"></i>
                         </a>

                     </div>
               </div>
           </div>


    </div>

</section>
       

       
       
    </>
    );
}

export default About;