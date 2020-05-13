import * as React from 'react';
import {push} from 'react-router-redux';
import { connect } from "react-redux";
import Veriff from "@veriff/js-sdk";
import {createVeriffFrame} from '@veriff/incontext-sdk';

import LinkButton from "../LinkButton";

import './index.scss';

class VerifyForm extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;

    const veriff = Veriff({
      host: 'https://stationapi.veriff.com',
      apiKey: '8adcfef4-11c7-433d-91c9-f69044c88043',
      parentId: 'veriff-root',
      onSession: function (err, response) {
        createVeriffFrame({url: response.verification.url, onEvent: (event) => {
          dispatch(push('/deposit'))
        }});
      }
    });
    veriff.mount({
      formLabel: {
        vendorData: 'Email'
      }
    });
  }

  render() {
    return (
      <div className="verify-user">
        <p>We are bound to verify the identity of our investors. Please prepare your passport or ID card and choose the verification assistance option.</p>

        <div id='veriff-root'/>

        <div className="veriff-information">
          <div>
            <span>
              <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.11502 12.5364L9.40229 23.1242L12.5745 17.7818H18.8046L12.5166 28.3713H6.28726L0 17.7818L3.11502 12.5364ZM19.8931 25.7318L25.9739 15.1426H19.8379L16.8248 9.8969H28.9873L32 15.143L25.9189 25.7321H19.8928L19.8931 25.7318ZM21.7736 5.24607H9.19905L12.3713 10.5885L9.25627 15.8346L2.969 5.2464L6.08403 0H18.6582L21.7732 5.2464L21.7736 5.24607Z" fill="#9E98A3"/>
</svg>
            </span>

            <p>Identity verification is provided by Veriff’s highly trusted and secure solution</p>
          </div>

          <div>
            <span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00816 15.9344C6.00816 15.541 6.04082 15.1803 6.07347 14.8197L0.293878 12.918C0.0979592 13.9016 0 14.918 0 15.9344C0 20.5574 1.92653 24.7213 5.06122 27.6393L8.62041 22.6885C6.98775 20.918 6.00816 18.5574 6.00816 15.9344ZM25.9918 15.9344C25.9918 18.5574 25.0122 20.918 23.3796 22.7213L26.9388 27.6721C30.0735 24.7213 32 20.5574 32 15.9344C32 14.918 31.902 13.9016 31.7061 12.918L25.9265 14.8197C25.9918 15.1803 25.9918 15.541 25.9918 15.9344ZM17.9918 6.09836C20.8653 6.68852 23.2816 8.4918 24.6857 10.9836L30.498 9.11475C28.2122 4.22951 23.5429 0.688524 18.0245 0V6.09836H17.9918ZM7.31429 10.9836C8.71837 8.4918 11.1347 6.68852 14.0082 6.09836V0C8.45714 0.688524 3.82041 4.22951 1.50204 9.11475L7.31429 10.9836ZM20.1469 25.082C18.8735 25.6721 17.4694 25.9672 16 25.9672C14.5306 25.9672 13.1265 25.6393 11.8531 25.082L8.29388 30C10.5796 31.2787 13.2245 32 16 32C18.7755 32 21.4204 31.2787 23.7061 30L20.1469 25.082Z" fill="#9E98A3"/>
</svg>
            </span>

            <p>If you have technical issues please contact our support at support@scrambleup.com</p>
          </div>
        </div>

        <div>
          <LinkButton link="/deposit">Verify later</LinkButton>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userStore.user
});

export default connect(mapStateToProps)(VerifyForm);
