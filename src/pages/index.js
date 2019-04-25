import React, { useState } from 'react';

import './index.scss';

import classNames from 'classnames';

export default () => {
  const [expanded, setExpanded] = useState(false);
  const buttonClasses = classNames('but-menu', {
    'menu-toggle': expanded
  });
  const getItemClasses = (type) => classNames(`but-${type} menu-item`, {
    [`${type}-toggle`]: expanded
  });

  return (
    <div className="landing">

      <div className="container">

        <div className="banner">
          <h1>Nathan Power</h1>
          <p className="headline">Software Engineer/Consultant</p>
        </div>

        <div className="menu">
          <div style={{ zIndex: 10 }} className={buttonClasses} onClick={() => setExpanded(!expanded)}>
            <div className="line top" />
            <div className="line middle" />
            <div className="line bottom" />
          </div>
          <div className={getItemClasses('about')}>
            <i className="fas fa-user-tie about-show" data-tooltip="about me" data-position="top"></i>
          </div>
          <div className={getItemClasses('resume')}>
            <i className="fas fa-address-book resume-show" data-tooltip="resume" data-position="right"></i>
          </div>
          <div className={getItemClasses('portfolio')}>
            <i className="fas fa-briefcase portfolio-show" data-tooltip="portfolio" data-position="right"></i>
          </div>
          <div className={getItemClasses('blog')}>
            <i className="fas fa-receipt blog-show" data-tooltip="blog" data-position="left"></i>
          </div>
          <div className={getItemClasses('contact')}>
            <i className="fas fa-envelope contact-show" data-tooltip="contact" data-position="left"></i>
          </div>
        </div>

        <div className="social">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/nathan-power-2565a320/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/nathanpower78"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
}
