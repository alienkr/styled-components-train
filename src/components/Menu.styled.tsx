import styled from 'styled-components';

export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0; 
    display: flex; //without this, menu items will be on different lines

    li > a {
      color: green; 
    }
    
    // "+" means relates to relative item (so in this case it adds margin to <li> tag which has other "relative" tag on the left, so only 2nd and 3rd <li> tags will have margins, because 1st tag doesn't have any <li> tag on the left (only on the right))
    li + li {
      margin-left: 20px;
    }
  }
`;
