import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';



import projectLogo from '../../assets/images/lamp_logo.png';

const HeaderLogo = props => {
  return (
    <Fragment>
      <div className={clsx('app-header-logo', {})}>
          <Link to="/home" className="header-logo-wrapper-link">
          <img
                style={{width: '200px'}}
                alt="LAMP Learning"
                src={projectLogo}
              />
          </Link>
      </div>
    </Fragment>
  );
};

export default HeaderLogo;
