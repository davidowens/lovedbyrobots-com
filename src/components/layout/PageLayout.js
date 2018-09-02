import styled from 'styled-components';
import PageMainContent from '../molecules/PageMainContent';

const PageLayout = styled.div`
  background-color: #fefefe;
  box-sizing: border-box;
  color: #333333;
  display: flex;
  flex-flow: column nowrap;
  font-family: Montserrat, Sans-Serif;
  font-weight: 300;
  height: 100%;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1rem;

  ${PageMainContent} {
    flex-grow: 1;
  }
`;

/** @component */
export default PageLayout;
