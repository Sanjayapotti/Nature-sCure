

import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>🌿 Nature’s Cure</h3>
          <p>
            Nature’s Cure is your go-to place for natural remedies, herbal
            beauty care, and wellness tips. We believe in healing through the
            pure power of nature.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
        
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: info@naturescure.com</p>
         
          <p>Visakhapatnam, India</p>
        </div>


        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
         
            <a href="https://www.youtube.com/results?search_query=nature+cure+for+skin+care" target="_blank" rel="noreferrer">You Tube</a>
             <a href="https://play.google.com/store/apps/details?id=co.diy14.smlwl&hl=en-US" target="_blank" rel="noreferrer">Google play</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nature’s Cure. All Rights Reserved.</p>
      </div>
    </footer>
  );
}





