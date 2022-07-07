import React from "react";
import PresentationImage from "../../assets/images/presentation.png";
import Header from "../../components/header";
import { Column, Section, Title, Container } from "rbx";
import { Link } from 'react-router-dom'
import "../../styles/home.scss";

const HomeScreen = () => (
  <>
    <Header />
    <Section size="medium" className="home">
      <Container>
        <Column.Group>
          <Column size={5}>
            <Title size={2} spaced className="has-text-white">
              Create notes easily and access when you wants on the cloud
            </Title>
            <Title size={5} spaced className="has-text-light" subtitle>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </Title>
            <Link to="/register" className="button is-outlined is-white is-large">
              <strong>Register for free now!</strong>
            </Link>
          </Column>
          <Column size={6} offset={1}>
            <img src={PresentationImage} alt="Presentation img" />
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </>
);

export default HomeScreen;
