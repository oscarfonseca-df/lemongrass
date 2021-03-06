import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './ManageListingCard.module.css';

const MenuIcon = props => {
  const { className, isActive } = props;
  const classes = classNames(css.menuIcon, className);
  const filter = isActive ? '' : 'url(#a)';
  return (
    <svg
      className={classes}
      height="12"
      viewBox="0 0 26 12"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter filterUnits="objectBoundingBox" height="450%" width="177.8%" x="-38.9%" y="-125%">
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2" />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
        </filter>
      </defs>
      <g filter={filter} transform="translate(-342 -18)">
        <path d="M348 24c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm7 0c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm7 0c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
      </g>
      <g transform="translate(-342 -18)">
        <path d="M348 24c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm7 0c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm7 0c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
      </g>
    </svg>
  );
};

MenuIcon.defaultProps = {
  className: null,
  isActive: false,
};

const { bool, string } = PropTypes;

MenuIcon.propTypes = {
  className: string,
  isActive: bool,
};

export default MenuIcon;
