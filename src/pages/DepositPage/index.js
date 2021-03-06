import React from "react";
import { Link } from "react-router-dom";

import './index.scss';
import LinkButton from "../../components/LinkButton";

const DepositPage = () => (
  <div className="container">
    <div className="deposit-instructions">
      <h1>Deposit</h1>

      <p>The transfers are usually processed within 1-2 working days.</p>
      <p>If your transfer is not processed in 2 working days, please send us your payment confirmation to support@mintos.com. For urgent questions, you can get a more immediate answer by giving a call to our Investor Service Team who know everything there is to know about Mintos!</p>

      <div className="transfer-wise-link">
        <LinkButton link="#">
          Visit TransferWise
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9416 0.217336C10.8878 0.152843 10.8211 0.100263 10.7459 0.0629492C10.6706 0.0256355 10.5884 0.00440673 10.5045 0.000616153C10.4205 -0.00317443 10.3368 0.0105564 10.2584 0.0409333C10.1801 0.0713101 10.109 0.117667 10.0496 0.177047C9.99019 0.236428 9.94382 0.30753 9.91343 0.38582C9.88304 0.46411 9.8693 0.54787 9.8731 0.631761C9.87689 0.715653 9.89812 0.797834 9.93545 0.873065C9.97278 0.948297 10.0254 1.01493 10.0899 1.06871L14.4352 5.41754H1.0728C0.917757 5.42576 0.771773 5.49312 0.664932 5.60574C0.558092 5.71836 0.498535 5.86765 0.498535 6.02286C0.498535 6.17807 0.558092 6.32737 0.664932 6.43999C0.771773 6.55261 0.917757 6.61997 1.0728 6.62819H14.4352L10.0831 10.9719C9.97354 11.0866 9.91242 11.239 9.91242 11.3976C9.91242 11.5562 9.97354 11.7086 10.0831 11.8233C10.1389 11.8793 10.2053 11.9237 10.2784 11.9541C10.3515 11.9844 10.4298 12 10.5089 12C10.588 12 10.6664 11.9844 10.7395 11.9541C10.8125 11.9237 10.8789 11.8793 10.9348 11.8233L16.3174 6.44259C16.3747 6.38747 16.4202 6.32135 16.4514 6.24821C16.4825 6.17506 16.4985 6.09639 16.4985 6.0169C16.4985 5.93742 16.4825 5.85874 16.4514 5.7856C16.4202 5.71245 16.3747 5.64634 16.3174 5.59122L10.9416 0.217336Z" fill="black"/>
          </svg>
        </LinkButton>
      </div>

      <h2>How can you do it?</h2>

      <ul className="deposit-steps">
        <li>
          <span>1</span>
          <p>
            <Link to="#">Visit the Transferwise website;</Link>
          </p>
        </li>

        <li>
          <span>2</span>
          <p>Log in or register to log in;</p>
        </li>

        <li>
          <span>3</span>
          <p>Click on the “Activity” option and choose the “Send Money” option;</p>
        </li>

        <li>
          <span>4</span>
          <p>Choose the precise amount that you want to transfer to your Mintos investor account;</p>
        </li>

        <li>
          <span>5</span>
          <p>When adding a new beneficiary, choose the option “Business and Charity”;</p>
        </li>

        <li>
          <span>6</span>
          <p>In the next step, choose the option: “I know the bank details” and fill in the Bank transfer form. Please, make sure your information is filled in correctly. In the provided form you will find all the necessary information that you can easily copy/paste into your e-money service provider's transaction fields;</p>
        </li>

        <li>
          <span>7</span>
          <p>If your funds are not in your Mintos account in 2 working days please download the PDF receipt from your account on Transferwise and send it to us at support@mintos.com;</p>
        </li>

        <li>
          <span>8</span>
          <p>Your funds are on your Mintos account? Start investing!</p>
        </li>
      </ul>
    </div>

    <div className="bank-details">
      <h2>Bank details</h2>

      <ul>
        <li>
          <div>
            <span>Bank</span>
            <p>LHV</p>
          </div>

          <div className="copy-icon" onClick={() => {navigator.clipboard.writeText('950 Page Mill Road, Palo Alto, CA 94304, USA')}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.3 15.3H19.75C19.5246 15.3 19.3084 15.3896 19.149 15.549C18.9896 15.7084 18.9 15.9246 18.9 16.15C18.9 16.3754 18.9896 16.5916 19.149 16.751C19.3084 16.9104 19.5246 17 19.75 17H22.3C22.7509 17 23.1833 16.8209 23.5021 16.5021C23.8209 16.1833 24 15.7509 24 15.3V1.7C24 1.24913 23.8209 0.81673 23.5021 0.497918C23.1833 0.179107 22.7509 0 22.3 0H8.7C8.24913 0 7.81673 0.179107 7.49792 0.497918C7.17911 0.81673 7 1.24913 7 1.7V4.25C7 4.47543 7.08955 4.69163 7.24896 4.85104C7.40836 5.01045 7.62457 5.1 7.85 5.1C8.07543 5.1 8.29164 5.01045 8.45104 4.85104C8.61045 4.69163 8.7 4.47543 8.7 4.25V1.7H22.3V15.3ZM15.3 7H1.7C1.24913 7 0.81673 7.17911 0.497919 7.49792C0.179106 7.81673 0 8.24913 0 8.7V22.3C0 22.7509 0.179106 23.1833 0.497919 23.5021C0.81673 23.8209 1.24913 24 1.7 24H15.3C15.7509 24 16.1833 23.8209 16.5021 23.5021C16.8209 23.1833 17 22.7509 17 22.3V8.7C17 8.24913 16.8209 7.81673 16.5021 7.49792C16.1833 7.17911 15.7509 7 15.3 7ZM15.3 8.7V22.3H1.7V8.7H15.3Z" fill="#9E98A3"/>
            </svg>
          </div>
        </li>

        <li>
          <div>
            <span>Beneficiary Bank Account Number / IBAN</span>
            <p>EE047700771002863435</p>
          </div>

          <div className="copy-icon" onClick={() => {navigator.clipboard.writeText('950 Page Mill Road, Palo Alto, CA 94304, USA')}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.3 15.3H19.75C19.5246 15.3 19.3084 15.3896 19.149 15.549C18.9896 15.7084 18.9 15.9246 18.9 16.15C18.9 16.3754 18.9896 16.5916 19.149 16.751C19.3084 16.9104 19.5246 17 19.75 17H22.3C22.7509 17 23.1833 16.8209 23.5021 16.5021C23.8209 16.1833 24 15.7509 24 15.3V1.7C24 1.24913 23.8209 0.81673 23.5021 0.497918C23.1833 0.179107 22.7509 0 22.3 0H8.7C8.24913 0 7.81673 0.179107 7.49792 0.497918C7.17911 0.81673 7 1.24913 7 1.7V4.25C7 4.47543 7.08955 4.69163 7.24896 4.85104C7.40836 5.01045 7.62457 5.1 7.85 5.1C8.07543 5.1 8.29164 5.01045 8.45104 4.85104C8.61045 4.69163 8.7 4.47543 8.7 4.25V1.7H22.3V15.3ZM15.3 7H1.7C1.24913 7 0.81673 7.17911 0.497919 7.49792C0.179106 7.81673 0 8.24913 0 8.7V22.3C0 22.7509 0.179106 23.1833 0.497919 23.5021C0.81673 23.8209 1.24913 24 1.7 24H15.3C15.7509 24 16.1833 23.8209 16.5021 23.5021C16.8209 23.1833 17 22.7509 17 22.3V8.7C17 8.24913 16.8209 7.81673 16.5021 7.49792C16.1833 7.17911 15.7509 7 15.3 7ZM15.3 8.7V22.3H1.7V8.7H15.3Z" fill="#9E98A3"/>
            </svg>
          </div>
        </li>

        <li>
          <div>
            <span>Payment Details</span>
            <p>32584249 - Investor</p>
          </div>

          <div className="copy-icon" onClick={() => {navigator.clipboard.writeText('950 Page Mill Road, Palo Alto, CA 94304, USA')}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.3 15.3H19.75C19.5246 15.3 19.3084 15.3896 19.149 15.549C18.9896 15.7084 18.9 15.9246 18.9 16.15C18.9 16.3754 18.9896 16.5916 19.149 16.751C19.3084 16.9104 19.5246 17 19.75 17H22.3C22.7509 17 23.1833 16.8209 23.5021 16.5021C23.8209 16.1833 24 15.7509 24 15.3V1.7C24 1.24913 23.8209 0.81673 23.5021 0.497918C23.1833 0.179107 22.7509 0 22.3 0H8.7C8.24913 0 7.81673 0.179107 7.49792 0.497918C7.17911 0.81673 7 1.24913 7 1.7V4.25C7 4.47543 7.08955 4.69163 7.24896 4.85104C7.40836 5.01045 7.62457 5.1 7.85 5.1C8.07543 5.1 8.29164 5.01045 8.45104 4.85104C8.61045 4.69163 8.7 4.47543 8.7 4.25V1.7H22.3V15.3ZM15.3 7H1.7C1.24913 7 0.81673 7.17911 0.497919 7.49792C0.179106 7.81673 0 8.24913 0 8.7V22.3C0 22.7509 0.179106 23.1833 0.497919 23.5021C0.81673 23.8209 1.24913 24 1.7 24H15.3C15.7509 24 16.1833 23.8209 16.5021 23.5021C16.8209 23.1833 17 22.7509 17 22.3V8.7C17 8.24913 16.8209 7.81673 16.5021 7.49792C16.1833 7.17911 15.7509 7 15.3 7ZM15.3 8.7V22.3H1.7V8.7H15.3Z" fill="#9E98A3"/>
            </svg>
          </div>
        </li>

        <li>
          <div>
            <span>Beneficiary Bank SWIFT/BIC Code</span>
            <p>LHVBEE22</p>
          </div>

          <div className="copy-icon" onClick={() => {navigator.clipboard.writeText('950 Page Mill Road, Palo Alto, CA 94304, USA')}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.3 15.3H19.75C19.5246 15.3 19.3084 15.3896 19.149 15.549C18.9896 15.7084 18.9 15.9246 18.9 16.15C18.9 16.3754 18.9896 16.5916 19.149 16.751C19.3084 16.9104 19.5246 17 19.75 17H22.3C22.7509 17 23.1833 16.8209 23.5021 16.5021C23.8209 16.1833 24 15.7509 24 15.3V1.7C24 1.24913 23.8209 0.81673 23.5021 0.497918C23.1833 0.179107 22.7509 0 22.3 0H8.7C8.24913 0 7.81673 0.179107 7.49792 0.497918C7.17911 0.81673 7 1.24913 7 1.7V4.25C7 4.47543 7.08955 4.69163 7.24896 4.85104C7.40836 5.01045 7.62457 5.1 7.85 5.1C8.07543 5.1 8.29164 5.01045 8.45104 4.85104C8.61045 4.69163 8.7 4.47543 8.7 4.25V1.7H22.3V15.3ZM15.3 7H1.7C1.24913 7 0.81673 7.17911 0.497919 7.49792C0.179106 7.81673 0 8.24913 0 8.7V22.3C0 22.7509 0.179106 23.1833 0.497919 23.5021C0.81673 23.8209 1.24913 24 1.7 24H15.3C15.7509 24 16.1833 23.8209 16.5021 23.5021C16.8209 23.1833 17 22.7509 17 22.3V8.7C17 8.24913 16.8209 7.81673 16.5021 7.49792C16.1833 7.17911 15.7509 7 15.3 7ZM15.3 8.7V22.3H1.7V8.7H15.3Z" fill="#9E98A3"/>
            </svg>
          </div>
        </li>

        <li>
          <div>
            <span>Beneficiary Name</span>
            <p>Mintos Marketplace AS</p>
          </div>

          <div className="copy-icon" onClick={() => {navigator.clipboard.writeText('950 Page Mill Road, Palo Alto, CA 94304, USA')}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.3 15.3H19.75C19.5246 15.3 19.3084 15.3896 19.149 15.549C18.9896 15.7084 18.9 15.9246 18.9 16.15C18.9 16.3754 18.9896 16.5916 19.149 16.751C19.3084 16.9104 19.5246 17 19.75 17H22.3C22.7509 17 23.1833 16.8209 23.5021 16.5021C23.8209 16.1833 24 15.7509 24 15.3V1.7C24 1.24913 23.8209 0.81673 23.5021 0.497918C23.1833 0.179107 22.7509 0 22.3 0H8.7C8.24913 0 7.81673 0.179107 7.49792 0.497918C7.17911 0.81673 7 1.24913 7 1.7V4.25C7 4.47543 7.08955 4.69163 7.24896 4.85104C7.40836 5.01045 7.62457 5.1 7.85 5.1C8.07543 5.1 8.29164 5.01045 8.45104 4.85104C8.61045 4.69163 8.7 4.47543 8.7 4.25V1.7H22.3V15.3ZM15.3 7H1.7C1.24913 7 0.81673 7.17911 0.497919 7.49792C0.179106 7.81673 0 8.24913 0 8.7V22.3C0 22.7509 0.179106 23.1833 0.497919 23.5021C0.81673 23.8209 1.24913 24 1.7 24H15.3C15.7509 24 16.1833 23.8209 16.5021 23.5021C16.8209 23.1833 17 22.7509 17 22.3V8.7C17 8.24913 16.8209 7.81673 16.5021 7.49792C16.1833 7.17911 15.7509 7 15.3 7ZM15.3 8.7V22.3H1.7V8.7H15.3Z" fill="#9E98A3"/>
            </svg>
          </div>
        </li>

        <li>
          <div>
            <span>Beneficiary Registration Number</span>
            <p>40103903643</p>
          </div>

          <div className="copy-icon" onClick={() => {navigator.clipboard.writeText('950 Page Mill Road, Palo Alto, CA 94304, USA')}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.3 15.3H19.75C19.5246 15.3 19.3084 15.3896 19.149 15.549C18.9896 15.7084 18.9 15.9246 18.9 16.15C18.9 16.3754 18.9896 16.5916 19.149 16.751C19.3084 16.9104 19.5246 17 19.75 17H22.3C22.7509 17 23.1833 16.8209 23.5021 16.5021C23.8209 16.1833 24 15.7509 24 15.3V1.7C24 1.24913 23.8209 0.81673 23.5021 0.497918C23.1833 0.179107 22.7509 0 22.3 0H8.7C8.24913 0 7.81673 0.179107 7.49792 0.497918C7.17911 0.81673 7 1.24913 7 1.7V4.25C7 4.47543 7.08955 4.69163 7.24896 4.85104C7.40836 5.01045 7.62457 5.1 7.85 5.1C8.07543 5.1 8.29164 5.01045 8.45104 4.85104C8.61045 4.69163 8.7 4.47543 8.7 4.25V1.7H22.3V15.3ZM15.3 7H1.7C1.24913 7 0.81673 7.17911 0.497919 7.49792C0.179106 7.81673 0 8.24913 0 8.7V22.3C0 22.7509 0.179106 23.1833 0.497919 23.5021C0.81673 23.8209 1.24913 24 1.7 24H15.3C15.7509 24 16.1833 23.8209 16.5021 23.5021C16.8209 23.1833 17 22.7509 17 22.3V8.7C17 8.24913 16.8209 7.81673 16.5021 7.49792C16.1833 7.17911 15.7509 7 15.3 7ZM15.3 8.7V22.3H1.7V8.7H15.3Z" fill="#9E98A3"/>
            </svg>
          </div>
        </li>

        <li>
          <div>
            <span>Beneficiary Bank Address</span>
            <p>950 Page Mill Road, Palo Alto, CA 94304, USA</p>
          </div>

          <div className="copy-icon" onClick={() => {navigator.clipboard.writeText('950 Page Mill Road, Palo Alto, CA 94304, USA')}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.3 15.3H19.75C19.5246 15.3 19.3084 15.3896 19.149 15.549C18.9896 15.7084 18.9 15.9246 18.9 16.15C18.9 16.3754 18.9896 16.5916 19.149 16.751C19.3084 16.9104 19.5246 17 19.75 17H22.3C22.7509 17 23.1833 16.8209 23.5021 16.5021C23.8209 16.1833 24 15.7509 24 15.3V1.7C24 1.24913 23.8209 0.81673 23.5021 0.497918C23.1833 0.179107 22.7509 0 22.3 0H8.7C8.24913 0 7.81673 0.179107 7.49792 0.497918C7.17911 0.81673 7 1.24913 7 1.7V4.25C7 4.47543 7.08955 4.69163 7.24896 4.85104C7.40836 5.01045 7.62457 5.1 7.85 5.1C8.07543 5.1 8.29164 5.01045 8.45104 4.85104C8.61045 4.69163 8.7 4.47543 8.7 4.25V1.7H22.3V15.3ZM15.3 7H1.7C1.24913 7 0.81673 7.17911 0.497919 7.49792C0.179106 7.81673 0 8.24913 0 8.7V22.3C0 22.7509 0.179106 23.1833 0.497919 23.5021C0.81673 23.8209 1.24913 24 1.7 24H15.3C15.7509 24 16.1833 23.8209 16.5021 23.5021C16.8209 23.1833 17 22.7509 17 22.3V8.7C17 8.24913 16.8209 7.81673 16.5021 7.49792C16.1833 7.17911 15.7509 7 15.3 7ZM15.3 8.7V22.3H1.7V8.7H15.3Z" fill="#9E98A3"/>
            </svg>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default DepositPage;
