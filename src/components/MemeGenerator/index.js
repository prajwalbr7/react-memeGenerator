import {Component} from 'react'
import {
  Container,
  Form,
  Heading,
  Description,
  Input,
  Select,
  Option,
  Button,
  Paragraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    backGroundImageUrl: '',
    topText: '',
    bottomText: '',
    activatedFontsize: fontSizesOptionsList[0].optionId,
    topValue: '',
    bottomValue: '',
    backGroundImageValue: '',
    fontSizeValue: '',
  }

  DefImageUrl = event => {
    this.setState({backGroundImageUrl: event.target.value})
  }

  DefTopText = event => {
    this.setState({topText: event.target.value})
  }

  DefBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  DefSelectText = event => {
    this.setState({activatedFontsize: event.target.value})
  }

  GenerateData = event => {
    event.preventDefault()
    const {
      backGroundImageUrl,
      topText,
      bottomText,
      activatedFontsize,
    } = this.state

    this.setState({
      topValue: topText,
      bottomValue: bottomText,
      backGroundImageValue: backGroundImageUrl,
      fontSizeValue: activatedFontsize,
    })
  }

  render() {
    const {
      backGroundImageUrl,
      topText,
      bottomText,
      activatedFontsize,
      topValue,
      bottomValue,
      backGroundImageValue,
      fontSizeValue,
    } = this.state
    console.log(fontSizeValue)

    return (
      <Container padding="30px" height="100vh">
        <Form onSubmit={this.GenerateData}>
          <Heading>Meme Generator</Heading>
          <Description htmlFor="ImageURL">Image URL</Description>
          <Input
            type="text"
            id="ImageURL"
            placeholder="Enter the image URL"
            onChange={this.DefImageUrl}
            value={backGroundImageUrl}
          />
          <Description htmlFor="TopText">Top Text</Description>
          <Input
            type="text"
            id="TopText"
            placeholder="Enter the Top Text"
            onChange={this.DefTopText}
            value={topText}
          />
          <Description htmlFor="BottomText">Bottom Text</Description>
          <Input
            type="text"
            id="BottomText"
            placeholder="Enter the Bottom Text"
            onChange={this.DefBottomText}
            value={bottomText}
          />
          <Description htmlFor="FontSize">Font Size</Description>
          <Select
            id="FontSize"
            onChange={this.DefSelectText}
            value={activatedFontsize}
          >
            {fontSizesOptionsList.map(eachItem => (
              <Option key={eachItem.optionId} value={eachItem.optionId}>
                {eachItem.displayText}
              </Option>
            ))}
          </Select>
          <Button type="submit">Generate</Button>
        </Form>

        <Container
          bgImage={`${backGroundImageValue}`}
          width="100%"
          height="100%"
          setDirection="column"
          data-testid="meme"
        >
          <Paragraph size={`${fontSizeValue}`}>{topValue}</Paragraph>
          <Paragraph size={`${fontSizeValue}`}>{bottomValue}</Paragraph>
        </Container>
      </Container>
    )
  }
}
export default MemeGenerator
