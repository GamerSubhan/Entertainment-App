import './Login.css';
import Logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Login()
{
    let isSignUp = false;
    const navigate = useNavigate();
    const pageHeader = document.getElementById('pageHeader');

    const signUp = () => {
        const title = document.querySelector('#loginTitle');
        const loginButton = document.querySelector('#loginBtn');
        const helpText = document.querySelector('#helpTxt');
        const loginDiv = document.getElementById('loginDiv');
        
        // Check if repeatInput already exists
        let repeatInput = document.getElementById('repeatInput');
        
        if (!isSignUp) {
            // If repeatInput doesn't exist, create and append it
            if (!repeatInput) {
                repeatInput = document.createElement('input');
                repeatInput.type = 'password';
                repeatInput.placeholder = 'Repeat your password';
                repeatInput.id = 'repeatInput';
                loginDiv.style.height = '55vh';
                loginDiv.appendChild(repeatInput);  // Only append if not already in the DOM
            }
    
            title.innerHTML = 'Sign Up';
            loginButton.innerHTML = 'Create an account';
            loginButton.style.marginTop = '12vh';
    
            helpText.innerHTML = `Already have an account? <span id="toggleLogin" style="cursor:pointer;">Login</span>`;
            
            // Attach event listener to toggle back to login
            const toggleLogin = document.querySelector('#toggleLogin');
            if (toggleLogin) {
                toggleLogin.onclick = signUp;  // Attach inline click event handler
            }
    
            isSignUp = true;
        } else {
            // Only try to remove repeatInput if it exists in the DOM
            if (repeatInput) {
                loginDiv.removeChild(repeatInput);  // Correctly remove only if found
            }
    
            loginDiv.style.height = '50vh';
            title.innerHTML = 'Login';
            loginButton.innerHTML = 'Login to your account';
            loginButton.style.marginTop = '5vh';
    
            helpText.innerHTML = `Don't have an account? <span id="toggleSignUp" style="cursor:pointer;">Sign Up</span>`;
            
            // Attach event listener to toggle back to sign-up
            const toggleSignUp = document.querySelector('#toggleSignUp');
            if (toggleSignUp) {
                toggleSignUp.onclick = signUp;  // Attach inline click event handler
            }
    
            isSignUp = false;
        }
    };    
    

    const submit = () => {
        const emailInput = document.querySelector('#emailInput');
        const emailError = document.getElementById('emailError');
        const passwordInput = document.querySelector('#passwordInput');
        const passwordError = document.getElementById('passwordError');

        if(emailInput.value.trim() !== '' && passwordInput.value.trim() !== '')
        {
            navigate('/home');
            pageHeader.style.display = 'block';
        }
        else
        {
            if(emailInput.value.trim() === '')
            {
                emailError.style.display = 'block';
                emailInput.style.borderColor = 'red';
            }
            else
            {
                emailError.style.display = 'none';
                emailInput.style.borderColor = 'white';
            }
            if(passwordInput.value.trim() === '')
            {
                passwordError.style.display = 'block';
                passwordInput.style.borderColor = 'red';
            }
            else
            {
                passwordError.style.display = 'none';
                passwordInput.style.borderColor = 'white';
            }
        }
    }
    return(
        <>
            <img id='loginLogo' src={Logo} />
            <div id="loginDiv">
                <h2 id='loginTitle'>Login</h2>
                <input id='emailInput' type='text' placeholder='Email address' />
                <p id='emailError'>Can't be empty</p>
                <input id='passwordInput' type='password' placeholder='Password' />
                <p id='passwordError'>Can't be empty</p>
                <button id='loginBtn' onClick={submit}>Login to your account</button>
                <h4 id='helpTxt'>Don't have account? <span onClick={signUp}>Sign Up</span></h4>
            </div>
        </>
    )
}