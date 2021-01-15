// App.jsx
import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";
import HeaderBackgroundImage from '../images/bk_img_1.jpg';
require('../css/fullstack.css');

export default class App extends React.Component {
  render () {
    return (
      <PageHeader>
        <div className='header-contents'>
          {this.addHeaderImg()}
          <Hello />
        </div>
      </PageHeader>
    );
  }
  addHeaderImg() {
    let headerBg = new Image();
    headerBg.src = HeaderBackgroundImage;
  }
}