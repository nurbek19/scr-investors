import * as React from 'react';
import { toast } from 'react-toastify';
import './index.scss';

const toastDefaultConfig = {
  autoClose: 3000,
  closeButton: false,
  hideProgressBar: true
};

class Notify {
  static success = (text, title, customConfig) =>
    toast.update(toast(text), {
      ...toastDefaultConfig,
      ...customConfig,
      render: <InfoToaster title={title} text={text} />
    });
}

export default Notify;

export const InfoToaster = ({ text }) => (
  <div className="toast_info">
      <div className="toast_inner">
        {text}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.38105 0 0 5.38105 0 12C0 18.6189 5.38105 24 12 24C18.6189 24 24 18.6189 24 12C24 5.38105 18.6189 0 12 0ZM17.2042 9.87789L11.7474 16.3705C11.52 16.6484 11.1916 16.8 10.8379 16.8C10.4842 16.8 10.1558 16.6484 9.92842 16.3705L6.79579 12.6316C6.36632 12.1263 6.44211 11.3937 6.94737 10.9642C7.45263 10.5347 8.18526 10.6105 8.61474 11.1158L10.8379 13.7684L15.3853 8.3621C15.8147 7.85684 16.5474 7.80632 17.0526 8.21053C17.5579 8.64 17.6337 9.37263 17.2042 9.87789Z" fill="white"/>
        </svg>
      </div>
  </div>
);
