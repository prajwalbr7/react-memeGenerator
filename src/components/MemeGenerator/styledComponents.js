// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url(${props => props.bgImage});
  background-size: cover;
  display: flex;
  flex-direction: ${props => props.setDirection};
  justify-content: space-between;
`

export const Form = styled.form`
  width: 30%;
  padding: 40px;
  box-sizing: border-box;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
  color: #35469c;
`
export const Description = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  color: #7e858e;
  line-height: 1.7;
`
export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 12px;
  color: #7e858e;
  border-radius: 3px;
  border-width: 1px;
  margin-bottom: 20px;
`
export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding-left: 7px;
  border-radius: 3px;
  border-width: 1px;
  outline: none;
  font-family: 'Open Sans';
  margin-bottom: 20px;
`

export const Option = styled.option`
  font-size: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 14px;
  padding-right: 14px;
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  width: 120px;
  text-align: center;
  background-color: #0b69ff;
  color: #d7dfe9;
  padding-top: 8px;
  padding-bottom: 10px;
  border-radius: 5px;
  border-width: 0px;
  outline: none;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: ${props => props.size}px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
`
