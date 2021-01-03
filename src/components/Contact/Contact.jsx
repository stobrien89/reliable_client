import React from "react";

const Contact = () => {
    return <div class="container main-content">
        <div className="row mt-5">
            <div className="col-md-12">
                <h2 class="mb-4">Contact</h2>
                <p class="lead">Regardless of the size of your home or business, maintaining it can be a struggle. While you may not have the time or the tools to accomplish everything on your to-do list, what you do have is a <em>reliable</em> handyman at your service. Call or email today for a free estimate!</p>
            </div>
        </div>
        <hr/>
        <div className="row mb-5">
            <div className="col-md-6 mb-3 text-center">
                <h4>Phone:</h4>
                <p>
                    <a href="tel:+1-954-913-8273">(954) 913-8273</a>
                </p>
                <h4>Email:</h4>
                <p>
                    <a href={"mailto:reliablehomesrvc@gmail.com"}>reliablehomesrvc@gmail.com</a>
                </p>
            </div>
            <div className="col-md-6 text-center">
                <h4>Areas Covered:</h4>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">Boca Raton</li>
                    <li className="list-group-item">Boynton Beach</li>
                    <li className="list-group-item">Deerfield Beach</li>
                    <li className="list-group-item">Fort Lauderdale</li>
                    <li className="list-group-item">Hollywood</li>
                    <li className="list-group-item">Delray</li>
                    <li className="list-group-item">Lake Worth</li>
                    <li className="list-group-item">West Palm Beach</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Contact;