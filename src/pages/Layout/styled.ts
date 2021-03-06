import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  @media (max-width: 960px) {
    grid-template-areas:
      'warning'
      'header'
      'banner'
      'releases'
      'main'
      'footer';
  }
  @media (min-width: 961px) and (max-width: 1700px) {
    grid-template-areas:
      'warning warning warning'
      'header header header'
      'banner banner banner'
      'releases releases releases'
      'main main main'
      'footer footer footer';
  }
`;
export const WarningWrapper = styled.section`
  grid-area: warning;
`;
export const HeaderWrapper = styled.header`
  grid-area: header;
`;
export const BannerWrapper = styled.section`
  grid-area: banner;
`;
export const ReleasesWrapper = styled.aside`
  grid-area: releases;
`;
export const MainWrapper = styled.main`
  grid-area: main;
`;
export const FooterWrapper = styled.footer`
  grid-area: footer;
`;
