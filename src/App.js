// import logo from './logo.svg';
import React from 'react'
import './App.css';
import { Header, Icon, Form, TextArea, Segment, Divider, Container, Statistic } from 'semantic-ui-react'
import EditButton from './EditButton'
// import Stats from './Stats'


class App extends React.Component {

state = {

  typeField: '',
  // characters: '',
  charLimit: null,
  words: [],
  sentences: 0,
  paragraphs: 0,
  bigrams: 0,
  open: false

  }


//  charCount = () => {

//   this.setState({characters: this.state.typeField})

//   }



  wordCount = () => {

    this.setState({words: this.state.typeField.split(' ')})
    console.log(this.state.words)
        // ONLY COUNTS SPACES WITH THIS METHOD. WORKING ON A REGEX SOLUTION BELOW

    // return this.state.typeField.split(/^a-z,0-9,.?!/)


  }


  sentCount = () => {

    let sentArr = this.state.typeField.replace(/([.?!])\s*(?=[a-z])/g, "$1|").split("|")
    this.setState({sentences: sentArr.length})

    // NEED TO FIND A FIX FOR SENTENCES THAT BEGIN WITH A NUMBER

  }

  parCount = () => {

    let parArr = this.state.typeField.split('\n')
    this.setState({paragraphs: parArr.length})
  }

  setCharLimit = (evt) => {
    this.setState({charLimit: evt.target.value})
  }

handleOnChange = (evt) => {
  
  this.setState({typeField: evt.target.value})
  // this.charCount()
  this.wordCount()
  this.sentCount()
  this.parCount()

}

render(){
  console.log(this.state.typeField.length, 'CharCount', this.state.words)
  
  return (
    <div className="App">

      <center>
        
        <Container>
          
          <Segment raised inverted>

          <Header size='huge'>
            <Icon name='keyboard' />
            <Header.Content>Countify</Header.Content>
          </Header>

          <Divider hidden />
          <Divider hidden />

          {/* <Button animated>
            <Button.Content visible>Edit Parameters</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button>

          <Modal size='mini' dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>Are You Sure?</Modal.Header>
                    <Modal.Content>
                        <p>iunno will choose a random meal for you and charge your card</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button compact onClick={this.close} negative>Ahhh No!! </Button>
                        <Button compact onClick={()=>{this.props.createOrder(); this.props.increment()}} positive >Confirm Order</Button>
                    </Modal.Actions>
                </Modal> */}

          <EditButton value = {this.state.charLimit} onChange = {this.setCharLimit}/>

          <Divider hidden />
          <Divider hidden />
          <Divider hidden />

            <Form value = {this.state.typeField} onChange = {this.handleOnChange}>
              <TextArea placeholder='Enter Text Here' />
            </Form>

            <Divider hidden />
            <Divider hidden />
            <Divider hidden />

            {/* <Stats key='stats' characters={this.state.characters} words={this.state.words} sentences={this.state.sentences} paragraphs={this.state.paragraphs} bigrams={this.state.bigrams} /> */}

              <Statistic.Group widths='five'>
                <Statistic color='green' inverted>
                  <Statistic.Value>{this.state.typeField.length}{this.state.charLimit} </Statistic.Value>
                  <Statistic.Label>Characters</Statistic.Label>
                </Statistic>
                <Statistic color='green' inverted>
                  <Statistic.Value>{this.state.words.length}</Statistic.Value>
                  <Statistic.Label>Words</Statistic.Label>
                </Statistic>
                <Statistic color='green' inverted>
                  <Statistic.Value>{this.state.sentences}</Statistic.Value>
                  <Statistic.Label>Sentences</Statistic.Label>
                </Statistic>
                <Statistic color='green' inverted>
                  <Statistic.Value>{this.state.paragraphs}</Statistic.Value>
                  <Statistic.Label>Paragraphs</Statistic.Label>
                </Statistic>
                <Statistic color='green' inverted>
                  <Statistic.Value>{this.state.bigrams}</Statistic.Value>
                  <Statistic.Label>Bigrams</Statistic.Label>
                </Statistic>
              </Statistic.Group>

              <Divider hidden />

          </Segment>
        
        </Container>
      
      </center>

    </div>
  );
  }
}


export default App;
