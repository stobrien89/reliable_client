import React from "react";

const Services = () => {
    return (
    <div class="container main-content">
        <div className="row mt-5">
            <div className="col-md-12">
                <h2 class="mb-4">Services</h2>
                <p class="lead">We understand just how busy life can be. As a home or business owner, it’s important to have someone you can trust to help you tackle all of your projects or problems. We provide a wide array of services, including, but not limited to some of the examples below.  If you don't see it listed, just ask!</p>
            </div>
        </div>
        <hr/>
        <div className="row mb-5 mt-4">
            <div className="col-md-4">
                <div className="row d-flex justify-content-center">
                    <i className="fa fa-bath fa-lg"></i>
                    <h5 class="ml-3">Plumbing</h5>
                </div>
                <div className="row service">
                    <p>
                    Leaky pipes and faucets can waste a lot of water-and money— if left alone. Reliable is pleased to offer plumbing services for your home, including faucet repair, toilet replacement, pipe insulation and more. 
                    </p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="row d-flex justify-content-center">
                    <i className="fa fa-window-restore fa-lg"></i>
                    <h5 class="ml-3">Glass</h5>
                </div>
                <div className="row service">
                    <p>Doors and windows in your home are an important structural and visual element. They’re also very susceptible to damage – whether it’s from harsh weather, worn-out components or a wayward baseball. We'll repair your glass quickly to restore security and energy efficiency.</p>
                </div>
            </div>
            <div className="col-md-4">
               <div className="row d-flex justify-content-center">
                <i className="fa fa-wrench fa-lg"></i>
                    <h5 class="ml-3">Drywall</h5>
               </div>
               <div className="row service">
                    <p>Professional drywall repair and maintenance is important to keep your home looking great. Whether you nicked the wall while moving furniture or need to cover an unsightly hole, we have seen and repaired it all. </p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="row d-flex justify-content-center">
                    <i className="fa fa-paint-brush fa-lg"></i>
                    <h5 class="ml-3">Painting</h5>
                </div>
                <div className="row service">
                    <p>A fresh coat of paint can breathe life into any room, exterior or piece of furniture. Whether you have an indoor or outdoor paint job, we're here to help. It's our mission to deliver the level of detail and professionalism that you expect and deserve.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="row d-flex justify-content-center">
                    <i className="fa fa-plug fa-lg"></i>
                    <h5 class="ml-3">Electrical</h5>
                </div>
                <div className="row service">
                    <p>From time to time homeowners have small projects involving wiring and electrical components. Reliable professionally installs electric appliances like ceiling fans and fix problems with light switches, dimmers and household lighting fixtures.</p>
                </div>
            </div>
            <div className="col-md-4">
               <div className="row d-flex justify-content-center">
                <i className="fa fa-wrench fa-lg"></i>
                    <h5 class="ml-3">Furniture</h5>
               </div>
               <div className="row service">
                    <p>Everyone knows that some assembly required usually means lots of assembly. Reliable gets your furniture and equipment out of the box and into your home or yard, so you don't have to agonize over confusing instructions.</p>
                </div>
            </div>
        </div>
    </div>)
}

export default Services;