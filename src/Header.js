import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import OnboardContainer from './containers/OnboardContainer.js';
import logoImg from './assets/vector/logo.svg';
import dp from './assets/png/dp.png';

function Logo() {
  return <a className="header__logo"><img src={logoImg} alt="joyread" /></a>
}

function HeaderLeft() {
  return (
    <div className="header__left">
      <input type="text" className="header__search" placeholder="Type here to search..." />
    </div>
  );
}

function HeaderRight(props) {
  return (
    <div className="header__right">
      <div className="header__books"><i className="icon"><svg width="20" height="19" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.5V1.447a.62.62 0 0 0-.625-.614H.625A.62.62 0 0 0 0 1.447V12.5h5zM1.875 3.904h1.25v3.684h-1.25V3.904zM0 14.167v3.571c0 .33.28.595.625.595h3.75c.345 0 .625-.266.625-.595v-3.571H0zM11.667 12.5V1.447a.62.62 0 0 0-.625-.614h-3.75a.62.62 0 0 0-.625.614V12.5h5zM8.542 3.904h1.25v3.684h-1.25V3.904zM6.667 14.167v3.571c0 .33.28.595.625.595h3.75c.345 0 .625-.266.625-.595v-3.571h-5zm12.753-.834l-5.253.725.573 3.737a.626.626 0 0 0 .26.414.683.683 0 0 0 .492.117l3.94-.543c.362-.05.614-.37.561-.713l-.574-3.737zm-.253-1.56L17.524.54a.632.632 0 0 0-.719-.533L13.043.55a.632.632 0 0 0-.536.714L14.149 12.5l5.018-.727zm-3.159-8.465l.547 3.745-1.253.182-.548-3.746 1.254-.181z" fill="#676767"/></svg></i>Add new books</div>
      <div className="header__notification"><i className="icon"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.2 15.6s-2.533-3.133-2.533-6.267V6.667C16.667 3 13.667 0 10 0S3.333 3 3.333 6.667v2.666c0 3.134-2.466 6.2-2.533 6.267-.133.2-.2.467-.067.733a.7.7 0 0 0 .6.334h17.334c.266 0 .466-.134.6-.4.133-.2.066-.467-.067-.667zM7.4 18c.267 1.133 1.333 2 2.6 2 1.267 0 2.267-.867 2.6-2H7.4z" fill="#676767"/></svg></i>Notifications</div>
      <div className="header__menu" onClick={() => TriggerMenuDropdown()}><i className="icon icon--dp"><img src={dp} alt="profile" /></i>Menu</div>
    </div>
  );
}

function MenuDropdown(props) {
  return (
    <Subscribe to={[OnboardContainer]}>
      {onboard => (
        <div className="header__m-dropdown">
          <a className="header__link header__link--menu"><i className="icon icon--small"><svg width="16" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M15.903 7.677V.274c0-.164-.11-.274-.274-.274H.274C.11 0 0 .11 0 .274v7.403h15.903zM12.34 1.645h1.096v4.387H12.34V1.645zm-1.92 0h1.097v4.387H10.42V1.645zm-1.919 0h1.097v4.387H8.5V1.645zm-5.484 3.29h4.387v1.097H3.016V4.935zM0 8.226v7.403c0 .165.11.274.274.274h1.371v.823c0 .164.11.274.274.274.165 0 .275-.11.275-.274v-.823H13.71v.823c0 .164.11.274.274.274.164 0 .274-.11.274-.274v-.823h1.371c.165 0 .274-.11.274-.274V8.226H0zm3.565 6.032H2.468V9.871h1.097v4.387zm1.919 0H4.387V9.871h1.097v4.387zm1.92 0H6.305V9.871h1.097v4.387zm5.483 0H8.5v-1.097h4.387v1.097z" fill="#676767"/></svg></i>Collections</a>
          <a className="header__link header__link--menu"><i className="icon icon--small"><svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M16.762 7.131l-2.178-.29a6.265 6.265 0 0 0-.61-1.47l1.336-1.745a.274.274 0 0 0-.024-.36l-1.551-1.552a.273.273 0 0 0-.36-.024l-1.746 1.335a6.265 6.265 0 0 0-1.47-.61L9.87.239A.275.275 0 0 0 9.597 0H7.403a.274.274 0 0 0-.271.238l-.29 2.178a6.265 6.265 0 0 0-1.47.61L3.625 1.69a.273.273 0 0 0-.36.024L1.713 3.265a.274.274 0 0 0-.024.36l1.335 1.746c-.261.457-.468.95-.61 1.47l-2.177.29A.275.275 0 0 0 0 7.403v2.194c0 .137.102.253.238.271l2.178.29c.141.52.347 1.013.61 1.47L1.69 13.375a.274.274 0 0 0 .024.36l1.551 1.552a.274.274 0 0 0 .36.024l1.746-1.335c.458.261.95.468 1.47.61l.29 2.177a.274.274 0 0 0 .272.238h2.194a.274.274 0 0 0 .271-.238l.29-2.178a6.265 6.265 0 0 0 1.47-.61l1.746 1.336a.274.274 0 0 0 .36-.024l1.552-1.551a.274.274 0 0 0 .024-.36l-1.335-1.746a6.28 6.28 0 0 0 .61-1.47l2.177-.29A.275.275 0 0 0 17 9.597V7.403a.274.274 0 0 0-.238-.271zM8.5 10.969a2.468 2.468 0 1 1 0-4.935 2.468 2.468 0 0 1 0 4.935z" fill="#676767"/></svg></i>Settings</a>
          <a className="header__link header__link--menu" onClick={() => onboard.signOut()}><i className="icon icon--small"><svg width="15" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#676767"><path d="M6.375 0H8.5v6.375H6.375z"/><path d="M12.431 4.037c-.425-.425-1.062-.318-1.487.107-.425.425-.319 1.062.106 1.487 1.063.957 1.7 2.444 1.7 3.931 0 2.976-2.338 5.313-5.313 5.313-2.974 0-5.312-2.338-5.312-5.313 0-1.487.638-2.974 1.806-3.93a1.138 1.138 0 0 0 .106-1.488 1.138 1.138 0 0 0-1.487-.107C.956 5.42 0 7.438 0 9.563A7.392 7.392 0 0 0 7.438 17a7.392 7.392 0 0 0 7.437-7.438c0-2.124-.85-4.143-2.444-5.524z"/></g></svg></i>Sign out</a>
        </div>
      )}
    </Subscribe>
  );
}

function TriggerMenuDropdown() {
  var headerMenuDropdown = document.getElementsByClassName("header__m-dropdown open")[0];
  if (headerMenuDropdown) {
    headerMenuDropdown.className = "header__m-dropdown"
  } else {
    document.getElementsByClassName("header__m-dropdown")[0].className += " open"
  }
}

function NotificationDropdown() {
  return (
    <div className="header__n-dropdown">
      <a className="header__link header__link--notification"><i className="icon icon--small icon--dp"><img src={dp} alt="profile" /></i><span><em>Charles Bukowski</em> has commented on your annotation.</span></a>
    </div>
  );
}

class Header extends Component {
  render() {
    return (
      <Subscribe to={[OnboardContainer]}>
        {onboard => (
          <header className="header">
            {
              onboard.state.isSignedIn
              ? 
                <div>
                  <HeaderLeft />
                  <Logo />
                  <HeaderRight />
                  <MenuDropdown />
                  <NotificationDropdown />
                </div>
              :
                <Logo />
            }
          </header>
          )
        }
      </Subscribe>
    );
  }
}

export default Header;