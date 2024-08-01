"use client";

import React, { useState } from 'react';

export default function register() {

  const [valeurInputs, setValeurInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value} = event.target
    setValeurInputs({ ...valeurInputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputValue: valeurInput }),
      });

      if (response.ok) {
        setMessage('Données envoyées avec succès !');
        setValeurInputs({ name: '', email: '', password: '' })
      } else {
        setMessage('Erreur lors de l\'envoi des données.');
      }
    } catch (error) {
      setMessage('Erreur lors de la connexion au serveur.');
    }
  };

  return (
    <div class="wrapper">
        <section class="sign-in-page">
            <div id="container-inside">
                <div id="circle-small"></div>
                <div id="circle-medium"></div>
                <div id="circle-large"></div>
                <div id="circle-xlarge"></div>
                <div id="circle-xxlarge"></div>
            </div>
            <div class="container p-0">
                <div class="row no-gutters">
                    <div class="col-md-6 text-center pt-5">
                        {/* <div class="sign-in-detail text-white">
                            <a class="sign-in-logo mb-5" href="#"><img src="../assets/images/logo-full.png" class="img-fluid" alt="logo"/></a>
                            <div class="sign-slider overflow-hidden ">
                                <ul  class="swiper-wrapper list-inline m-0 p-0 ">
                                    <li class="swiper-slide">
                                        <img src="../assets/images/login/1.png" class="img-fluid mb-4" alt="logo"/>
                                        <h4 class="mb-1 text-white">Find new friends</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </li>
                                    <li class="swiper-slide">
                                        <img src="../assets/images/login/2.png" class="img-fluid mb-4" alt="logo"/> 
                                        <h4 class="mb-1 text-white">Connect with the world</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </li>
                                    <li class="swiper-slide">
                                        <img src="../assets/images/login/3.png" class="img-fluid mb-4" alt="logo"/>
                                        <h4 class="mb-1 text-white">Create new events</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                    <div class="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
                        <div class="sign-in-from">
                            <h1 class="mb-0">Sign Up</h1>
                            <p>Enter your email address and password to access admin panel.</p>
                            <form class="mt-4" onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <label class="form-label" for="name">Your Full Name</label>
                                    <input 
                                        type="text" 
                                        class="form-control mb-0" 
                                        id="name"
                                        name="name"
                                        value={valeurInputs.name}
                                        onChange={handleChange}
                                        placeholder="Your Full Name"
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="email">Email address</label>
                                    <input 
                                        type="email" 
                                        class="form-control mb-0" 
                                        id="email"
                                        name="email"
                                        value={valeurInputs.email}
                                        onChange={handleChange}
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="password">Password</label>
                                    <input 
                                        type="password" 
                                        class="form-control mb-0" 
                                        id="password"
                                        name="password"
                                        value={valeurInputs.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                    />
                                </div>
                                <div class="w-100">
                                    {/* <div class="form-check d-inline-block mt-2 pt-1">
                                        <input type="checkbox" class="form-check-input" id="customCheck1"/>
                                        <label class="form-check-label" for="customCheck1">I accept <a href="#">Terms and Conditions</a></label>
                                    </div> */}
                                    <button type="submit" class="btn btn-primary float-end">Sign Up</button>
                                    <span class="dark-color d-inline-block line-height-2">Already Have Account ? <a href="/">Log In</a></span>
                                </div>
                                <div class="sign-info">
                                    {/* <ul class="iq-social-media">
                                        <li><a href="#"><i class="ri-facebook-box-line"></i></a></li>
                                        <li><a href="#"><i class="ri-twitter-line"></i></a></li>
                                        <li><a href="#"><i class="ri-instagram-line"></i></a></li>
                                    </ul> */}
                                </div>
                            </form>
                            <p>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}