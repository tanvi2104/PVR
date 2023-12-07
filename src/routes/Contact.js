import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

import "/.ContactUs.css;"


function Contact(){
    return (
        
    <>
     
  <div>

<section className="contact-section">

    <div className="contact-bg">
        <h3>Get In Touch With Us</h3>
        <h2> Contact Us</h2>

        <div className="line">

            <div></div>
            <div></div>
            <div></div>

        </div>

        <p className="text"> We are professional price action traders 
            from Nagpur, are passionate about investing and trading. Our team members have a 
            strong enthusiasm for trading in Indian markets and we likes it.
             Our team is a skilled price action trader in the equity, commodity, and currency markets.</p>


    </div>

    <div className="contact-body">

        <div className="contact-info">

            <div>
                <span> <i className="fas fa-mobile-alt"></i></span>
                <span> Phone No.</span>
                <span className="text">9689857898</span>
                <span className="text">7030538008 </span>
            </div>

            <div>
                <span> <i className="fas fa-envelope-open "></i></span>
                <span> Email</span>
                <span className="text"> pvrfinser@gmail.com</span>
            </div>

            <div>
                <span> <i className="fas fa-map-marker-alt"></i></span>
                <span> Address</span>
                <span className="text">plot no. 95 Aaradhana colony, Nara Road 
                    Near Nirmal colony behind Alisha lawn, Jaripatka , Nagpur - 14</span>
            </div>

            <div>
                <span> <i className="fas fa-clock"></i></span>
                <span>Opening Hours</span>
                <span className="text">Monday - Saturday (8:00 AM to 9:PM)</span>
            </div>

        </div>

        
        <div className="contact-form">
            

            <form>

                <div className="enquire">
                    <h2>Enquire now for more details</h2>
                </div>

                <div>
                    <input type="text" className="form-control" placeholder="First Name"> </input>
                    <input type="text" className="form-control" placeholder="Last Nmae"> </input>
                </div>

                <div>
                    <input type = "email" className = "form-control" placeholder="E-mail"> </input>
                    <input type = "text" className= "form-control" placeholder="Phone"> </input>
                  </div>

                                                     

                <textarea rows="3" placeholder="Message" className="form-control"></textarea>
                
                <a href="Courses.js"><button className="send-btn"> Contact us</button> </a>

            </form>

            <div>

                <img src="/images/c1.jpg" alt=""> </img>

            </div>

        </div>

    </div>

    <div className = "map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7622.3959593891495!2d79.08390564090713!3d21.196955098746184!2
        m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1397d6e1e15%3A0x4e9ff400d2165ea2!2sPVR%20FINANCIAL%20SERVICES%20%7C%20Share
        %20Market%20Classes%20in%20Nagpur!5e0!3m2!1sen!2sin!4v1700558888892!5m2!1sen!2sin" width="1520" height="300"
         style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    
</section>

</div>

 </>
    );
}

export default Contact;