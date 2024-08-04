"use client";

import React, { useState } from 'react';

export default function register() {

  const [valeurInputs, setValeurInputs] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    date: '',
    avatar: null,
    nickname: '',
    aboutMe: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value} = event.target
    setValeurInputs({ ...valeurInputs, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setValeurInputs({ ...valeurInputs, avatar: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!valeurInputs.nickname.trim() || !valeurInputs.email.trim() || !valeurInputs.password.trim()) {
        setMessage('le champ ne peut pas être vide')
    } else {
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
    }
  };

  return (
    <div className="wrapper">
        <section className="sign-in-page">
            <div id="container-inside">
                <div id="circle-small"></div>
                <div id="circle-medium"></div>
                <div id="circle-large"></div>
                <div id="circle-xlarge"></div>
                <div id="circle-xxlarge"></div>
            </div>
            <div className="container p-0">
                <div className="row no-gutters">
                    <div className="col-md-6 text-center pt-5">
                        <div className="sign-in-detail text-white">
                            <a className="sign-in-logo mb-5" href="#"><img src="/images/logo-full.png" className="img-fluid" alt="logo"/></a>
                            <div className="sign-slider overflow-hidden ">
                                <ul  className="swiper-wrapper list-inline m-0 p-0 ">
                                    <li className="swiper-slide">
                                        <img src="/images/login/1.png" className="img-fluid mb-4" alt="logo"/>
                                        <h4 className="mb-1 text-white">Find new friends</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </li>
                                    <li className="swiper-slide">
                                        <img src="/images/login/2.png" className="img-fluid mb-4" alt="logo"/> 
                                        <h4 className="mb-1 text-white">Connect with the world</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </li>
                                    <li className="swiper-slide">
                                        <img src="/images/login/3.png" className="img-fluid mb-4" alt="logo"/>
                                        <h4 className="mb-1 text-white">Create new events</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 bg-white pt-3 pt-3 pb-lg-0 pb-5">
                        <div className="sign-in-from">
                            <h1 className="mb-0">Sign Up</h1>
                            <p className='text-danger fw-bold'>{message}</p>
                            <form className="mt-4" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    {/* <label className="form-label" for="username">Username</label> */}
                                    <input 
                                        type="text" 
                                        className="form-control mb-0" 
                                        id="nickname"
                                        name="nickname"
                                        value={valeurInputs.nickname}
                                        onChange={handleChange}
                                        placeholder="Nickname"
                                    />
                                </div>
                                <div className="form-group">
                                    {/* <label className="form-label" for="email">Email</label> */}
                                    <input 
                                        type="email" 
                                        className="form-control mb-0" 
                                        id="email"
                                        name="email"
                                        value={valeurInputs.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group">
                                    {/* <label className="form-label" for="password">Password</label> */}
                                    <input 
                                        type="password" 
                                        className="form-control mb-0" 
                                        id="password"
                                        name="password"
                                        value={valeurInputs.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="form-group">
                                    {/* <label className="form-label" for="firstname">First Name</label> */}
                                    <input 
                                        type="text" 
                                        className="form-control mb-0" 
                                        id="FirstName"
                                        name="FirstName"
                                        value={valeurInputs.firstname}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="form-group">
                                    {/* <label className="form-label" for="lastname">Last Name</label> */}
                                    <input 
                                        type="text" 
                                        className="form-control mb-0" 
                                        id="LastName"
                                        name="LastName"
                                        value={valeurInputs.lastname}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div className="form-group">
                                    {/* <label className="form-label" for="date">Date of Birth</label> */}
                                    <input 
                                        type="date" 
                                        className="form-control mb-0" 
                                        id="date"
                                        name="date"
                                        value={valeurInputs.date}
                                        onChange={handleChange}
                                        placeholder="Date of Birth"
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        type="file"
                                        id="avatar"
                                        name="avatar"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                    {valeurInputs.avatar && (
                                        <div className='d-flex align-items-center'>
                                            <p className='mb-0 me-2'>Aperçu de l'avatar :</p>
                                            <img
                                                src={URL.createObjectURL(valeurInputs.avatar)}
                                                alt="Aperçu de l'avatar"
                                                style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%' }}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="textarea" 
                                        className="form-control mb-0" 
                                        id="aboutMe"
                                        name="aboutMe"
                                        value={valeurInputs.aboutMe}
                                        onChange={handleChange}
                                        placeholder="About Me"
                                    />
                                </div>
                                <div className="w-100">
                                    {/* <div className="form-check d-inline-block mt-2 pt-1">
                                        <input type="checkbox" className="form-check-input" id="customCheck1"/>
                                        <label className="form-check-label" for="customCheck1">I accept <a href="#">Terms and Conditions</a></label>
                                    </div> */}
                                    <button type="submit" className="btn btn-primary float-end">Sign Up</button>
                                    <span className="dark-color d-inline-block line-height-2">Already Have Account ? <a href="/">Log In</a></span>
                                </div>
                                {/* <div className="sign-info">
                                    <ul className="iq-social-media">
                                        <li><a href="#"><i className="ri-facebook-box-line"></i></a></li>
                                        <li><a href="#"><i className="ri-twitter-line"></i></a></li>
                                        <li><a href="#"><i className="ri-instagram-line"></i></a></li>
                                    </ul>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}