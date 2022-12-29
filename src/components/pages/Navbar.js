import React from "react";
import './Navbar.css';
import cupcake1 from'../../images/cupcake1.jpg';
import cupcake2 from'../../images/cupcake2.jpg';
import cupcake3 from'../../images/cupcake3.jpg';

function Navbar() {
  return (
    <div className="row">
	<div className="container col-lg-4 col-md-6" id="p1">
		<section>
		
		<div className="navtext">
		<div className="navimg"><img src={cupcake1} alt="react logo" /></div>
		<div className="navheading">Products</div>
			<p>Browse for cakes, sandwiches and cookies</p>
        </div>	
		</section>
	</div>	
	<div class="container col-lg-4 col-md-6" id="p2">
		<section>
			<div className="navtext">
				
		<div className="navimg"><img src={cupcake2} alt="react logo" /></div>
                <div className="navheading">Cake Class</div>
                <p>Join the chefs in classes to learn delicious recipes</p>
            </div>
		</section>
	</div>	

	<div class="container col-lg-4 col-md-6" id="p3">
		<section>
			<div className="navtext">
			<div className="navimg"><img src={cupcake3} alt="react logo" /></div>
			<div className="navheading">Recipes</div>
                <p>Our recipes for you to make at home</p>
            </div>
			
		</section>
	</div>	
</div>
  );
}

export default Navbar;