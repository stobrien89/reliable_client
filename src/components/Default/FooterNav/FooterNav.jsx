import React from "react";

const FooterNav = () => {
  return <footer class="text-center text-lg-start bg-dark text-muted">
  
  <div class="container p-4">
  
    <div class="row">
      
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">About Us</h5>
        <p class="footer-text">Reliable is an independent, family-owned business that truly cares about its customers' wants and needs. We were founded with a focus on providing customers with transparent, quality work on their home, without the huge price tag. We are here to take care of your needs— Contact us today for an estimate!
        </p>
      </div>
     
      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-lg-5 mb-4 mb-md-0">
        <a href="https://m.facebook.com/profile.php?id=101797488383306&ref=content_filter">
          <i class="fa fa-2x fa-facebook-square icon" ></i>
        </a>
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-lg-5 mb-4 mb-md-0">
        <a href={"mailto:reliablehomesrvc@gmail.com"}><i class="fa fa-2x fa-envelope icon"></i></a>
      </div>
      
    </div>
    
  </div>
  

  
  <div class="text-center p-3" >
    © {(new Date().getFullYear())} Copyright: Reliable Home Maintenance & Repair Service
  </div>
  
</footer>

};

export default FooterNav;
