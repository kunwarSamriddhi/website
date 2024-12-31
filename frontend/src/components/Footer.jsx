import React from 'react'
import styled from "styled-components";
import logo from '../assets/leaflogootea.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const FooterWrapper = styled.div`
  /* background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%); */
 /*  background-image: #E4E4E1;
  background-image: radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%);
  background-blend-mode: normal, multiply; */

  background-image: linear-gradient(to right, #434343 0%, black 100%);
`;

const Foot = styled.div`
  padding:30px 0;
  height:auto;
  display:grid;
  grid-template-columns:repeat(4,auto);
  grid-column-gap:100px;
  grid-row-gap:20px;
  justify-content:center;
  @media(max-width:1200px){
    grid-template-columns:repeat(2,auto);
  }
  @media(max-width:900px){
    grid-template-columns:repeat(1,auto);
  }
`;
const Section = styled.div`

`;

const LinkRow = styled.div`
  display:flex;
  align-items:center;
  padding:5px 0;
  margin-top:20px;
  cursor:pointer;
  color:#fff;
  &:hover{
    color:#afafbf50;
  }
`;

const SubFooter = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#cdcbcb;
  padding:30px 10px;
  cursor:default;
  user-select:none;
`;

const Hr = styled.hr`
  width:90%;
  margin:auto;
  color:#fff;
  border-radius:25px;
  border:none;
  border-top:1px solid;
`;

const Title = styled.h3`
  color:#fff;
`;

const ContactSec = styled.div`
  margin-bottom:10px;          
  color:#fff;

`;

const NumRow = styled.div`
  padding:5px 0;
  margin-top:20px;
`;

const footerObj = [
  {
    title: "Follow us on",
    links: [
      {
        name: "Facebook",
        link: "https://facebook.com/",
        icons: <FaFacebook />
      },
      {
        name: "Instagram",
        link: "https://instagram.com/",
        icons: <FaInstagram />
      },
      {
        name: "Google",
        link: "https://google.com/",
        icons: <FaGoogle />
      }
    ]
  },
  {
    title: "Trainings",
    links: [
      {
        name: "Barista training",
        link: "#"
      },
      {
        name: "Bakery training",
        link: "#"
      },
    ]
  }
]

const contactObj = [
  {
    title: "Contact info",
    nums: [
      {
        name: "Tel",
        info: "977-5224038"
      },
      {
        name: "Cell",
        info: "977-9851091677"
      },
      {
        name: "Email",
        info: "sweetea@gmail.com"
      }
    ]
  }
]

const Footer = () => {
  return (
    <FooterWrapper>
      <Foot className='container mt-5'>
        <div className='my-5'>
          <img src={logo} style={{ width: "175px", height: "150px" }} />
        </div>
        {footerObj.map((ele, i) =>
          <Section key={i} className=''>
            <Title>{ele.title}</Title>
            {ele.links.map((elem, j) =>
              <LinkRow key={j}>
                <h6 style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} onClick={elem.link} target="blank">{elem.icons && <span style={{ width: "25px", height: "25px", borderRadius: "25px", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "10px" }}>{elem.icons}</span>}
                  {elem.name}</h6>
              </LinkRow>
            )}
          </Section>
        )}

        {contactObj.map((ele, k) =>
          <ContactSec key={k}>
            <Title>{ele.title}</Title>
            {ele.nums.map((elem, l) =>
              <NumRow>
                <div key={l}>
                  <h6 >{elem.name} : <span>{elem.info}</span></h6>
                </div>

              </NumRow>
            )}
          </ContactSec>
        )}
      </Foot>
      <Hr />
      <SubFooter>
        ©{new Date().getFullYear()} All Rights Reserved
      </SubFooter>
    </FooterWrapper>
  )
}

export default Footer
