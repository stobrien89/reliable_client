import React from "react";

const Testimonials = () => {
    return (
    <div class="container main-content">
        <div className="row mt-5">
            <div className="col-md-12">
                <h2 class="mb-4">Testimonials</h2>
                <p class="lead">
                    If you’re looking for the highest quality work from a professional, <em>reliable</em>, and honest handyman in Fort Lauderdale, Boca Raton, West Palm Beach and the surrounding areas, you’ve come to the right place. See what our customers are saying:
                </p>
            </div>
        </div>
        <hr/>
        <div className="row mb-5">
            <div className="col-md-6">
                <p>"Great work for a great price! Fixed our sliding glass doors for a fraction of what others are charging."</p>
                <p><strong>-Michelle A.</strong></p>
            </div>
            <div className="col-md-6">
                <p>"None of our windows were staying open, called multiple window companys and nobody showed up. Reliable came and had everything fixed same day!"</p>
                <p><strong>-Sandra O.</strong></p>
            </div>
            <div className="col-md-6">
                <p>"One of our washer connetions broke off and was leaking badly! Reliable came and quickly fixed the problem!"</p>
                <p><strong>-Carlos G.</strong></p>
            </div>
            <div className="col-md-6">
                <p>"We needed all switches and outlets changed in our home, but couldnt afford an electricians rates. Reliable got the job done and saved us a ton!"</p>
                <p><strong>-Jason S.</strong></p>
            </div>
        </div>
    </div>)
}

export default Testimonials;