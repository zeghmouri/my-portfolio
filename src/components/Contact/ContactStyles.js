import styled from "styled-components"
import TextField from '@mui/material/TextField';


export const FormGroup = styled.section`
	width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`
const CustomTextField=styled(TextField)`
  
   &&{ margin-bottom:${(props) => props.message ? '30px' : '8px'} }
  

  & .MuiOutlinedInput-root {
    color: white;
    font-size:14px;
    font-family: ${props => props.theme.fonts.main};
    width:${(props) => props.message ? '207%' : '100%'};
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
 & .MuiFormHelperText-root{
   color:white;
   font-family: ${props => props.theme.fonts.main};
   font-size: 10px;
 }
  & label.Mui-focused {
    color: white;
  }
  & label {
    color: white;
    font-size:14px;
    font-family: ${props => props.theme.fonts.main};

  }
  @media ${props => props.theme.breakpoints.sm}{
    & .MuiOutlinedInput-root {
      width:87vw;
    }
  }
`;
export default CustomTextField;