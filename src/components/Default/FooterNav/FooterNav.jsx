import React from "react";

const FooterNav = () => {
  return <footer class="text-center text-lg-start bg-dark text-muted">
  
  <div class="container p-4">
  
    <div class="row">
      
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Footer Content</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
          voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
     
      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-lg-5 mb-4 mb-md-0">
        <i class="fa fa-2x fa-facebook-square"></i>
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-lg-5 mb-4 mb-md-0">
        <i class="fa fa-2x fa-envelope"></i>
      </div>
      
    </div>
    
  </div>
  

  
  <div class="text-center p-3" >
    © {(new Date().getFullYear())} Copyright: Prestige Worldwide
  </div>
  
</footer>

};

export default FooterNav;
