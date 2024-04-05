import styled from "styled-components";

import iphoneMobileSvg from "../../assets/images/iphone-mobile.svg";
import iphoneLaptopSvg from "../../assets/images/iphone-laptop.svg";

export const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

const Hero = styled.div`
  width: 100%;
  flex: 1;

  min-width: 280px;

  border-radius: 1.875rem;

  background-color: var(--color-bg-el);

  padding: 1.25rem 1.25rem 2.5rem;

  @media screen and (min-width: 768px) {
    padding: 40px 168px 120px 64px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 64px;
  }
`;

export const HeroContent = styled(Hero)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  min-height: 411px;

  @media screen and (min-width: 768px) {
    gap: 2.5rem;

    min-height: calc(100vh - 2 * 32px);
  }
`;

export const HeroImage = styled(Hero)`
  min-height: 351px;

  background-image: url(${iphoneMobileSvg});
  background-position: center bottom;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: block;

    background-image: url(${iphoneLaptopSvg});
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: #f9f9f9;

  @media screen and (min-width: 768px) {
    max-width: 444px;

    font-size: 4rem;
    line-height: 94%;

    margin-top: 117px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 67px;
  }

  & span {
    color: var(--color-text-50);
  }
`;
