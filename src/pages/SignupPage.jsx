import React from 'react';
import '../assets/styles/signup.css'; 
import Button from '../tools/Button';

const SignupPage = () => {
  return (

    <div className="container-fluid main-container pb-3">
       <div className="row  pt-md-5  justify-content-center  ">
            <div className="col-7  col-md-12 ps-md-5 ps-0 ms-md-5 codes-s mt-5 mt-md-0" style={{ color:  "#0288D1" }}>
            ✦Splendid Space
            </div>
        </div>
    <div className="row ">
      
      <div className="col-md-10 d-none d-md-block left-section">
       
            <div className="row ">
                <div className="col pt-3 codes codes-size" >
                Sign in to start<br/>
                 your journey!
                </div>
            </div>
        
      </div>
         
      <div className="col-md-2  right-section">
      <div className="row justify-content-center">
          <div className="col-10 ">
          <div className="form-container">
          <h2>Signup</h2>
          <p>Just some details to get you in!</p>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email / Phone" required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Confirm Password" required />
            </div>

            <div className="row justify-content-center">
              <div className="col-4">            <Button 
             context={"Signup"}
             
            
            
            /></div>
            </div>

            {/* <button type="submit" className="btn btn-primary btn-block">Signup</button> */}
            <div className='row  mt-1 justify-content-center'> 
              <div className="col-3">OR</div></div>   </form>
          
          <div className="s mt-1">
            <div className="row justify-content-center">
              <div className="col-1"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="44" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg></div>
              <div className="col-2">

              </div>
            </div>
          </div>
          <div className=" mt-1">
            <div className="row ">
                <div className="col text-center">Already Registered? Login</div></div>
            
            
          </div>
          <div className="row  justify-content-center pt-3">
            <div className="col-12 text-center col-md-5 font">Terms & Conditions</div>
            <div className="col-12 text-center col-md-3 font">Support</div>
            <div className="col-12 text-center col-md-4 font">Customer care</div>
          </div>
        </div>
          </div>
          </div>

      </div>
    </div>
  </div>
  );
};

export default SignupPage;
