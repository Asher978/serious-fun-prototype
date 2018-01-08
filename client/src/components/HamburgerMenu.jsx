//https://codepen.io/cambourke/pen/QyKywO
//https://github.com/cameronbourke/react-hamburger-menu
import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenuNav from "./HamburgerMenuNav"
// import ReactDOM from "react-dom";



const HamburgerMenu = (props) => {
  // If display state is false, hide mobile nav links
  // If display state is true, show mobile nav links
  let display = {
    display: `${props.display ? 'inline-block' : 'none'}`
    }
  let isHorizontal = props.orientation === 'horizontal';
  let width  = `${props.width}px`;
  let height = `${props.height}px`;
  let halfHeight = `${props.height / 2}px`;
  let { isOpen } = props;
  let style = {
    container: {
      width,
      height,
      position: 'relative',
      transform: `rotate(${props.rotation || 0}deg)`
    },
    lineBase: {
      display: 'block',
      height: `${props.strokeWidth}px`,
      width: '100%',
      background: props.color,
      transition: `${props.animationDuration}s ease`,
      borderRadius: `${props.borderRadius}px`,
      position: 'absolute'
    },
    firstLine: {
      transform: `translate3d(0,${isOpen ? halfHeight : 0},0) rotate(${isOpen ? '45deg' : '0'})`,
      transformOrigin: 'center',
      marginTop: `-${props.strokeWidth / 2}`,
    },
    secondLine: {
      transition: `${props.animationDuration / 2}s ease-out`,
      opacity: props.isOpen ? '0' : '100',
      top: halfHeight,
      marginTop: `-${props.strokeWidth / 2}`
    },
    thirdLine: {
      transform: `translate3d(0,${isOpen ? halfHeight : height},0) rotate(${isOpen ? '-45deg' : '0'})`,
      transformOrigin: 'center',
      marginTop: `-${props.strokeWidth / 2}`
    }
  };
  return (
    <div className='hamburgerMenuDiv' style={style.container} onClick={props.menuClicked}>
      <span style={Object.assign({}, style.lineBase, style.firstLine)}></span>
      <span style={Object.assign({}, style.lineBase, style.secondLine)}></span>
      <span style={Object.assign({}, style.lineBase, style.thirdLine)}></span>
      <HamburgerMenuNav display={display}/>
    </div>
  );
};

export default HamburgerMenu;
