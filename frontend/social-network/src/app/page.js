import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
                    <div className="col-md-6 bg-white pt-5 pb-lg-0 pb-5">
                        <div className="sign-in-from">
                            <h1 className="mb-0">Sign in</h1>
                            <p>Enter your email address and password to access admin panel.</p>
                            <form className="mt-4">
                                <div class="form-group">
                                        <label class="form-label" for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email or username"/>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="exampleInputPassword1">Password</label>
                                        <a href="#" class="float-end">Forgot password?</a>
                                        <input type="password" class="form-control mb-0" id="exampleInputPassword1" placeholder="password"/>
                                    </div>
                                    <div class="w-90">
                                        {/* <div class="form-check d-inline-block mt-2 pt-1">
                                            <input type="checkbox" class="form-check-input" id="customCheck11"/>
                                            <label class="form-check-label" for="customCheck11">Remember Me</label>
                                        </div> */}
                                        <button type="submit" class="btn btn-primary float-end">Sign in</button>
                                        <span class="dark-color d-inline-block line-height-2">Don't have an account? <a href="/register">Sign up</a></span>
                                    </div>
                                  <div class="sign-info">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
