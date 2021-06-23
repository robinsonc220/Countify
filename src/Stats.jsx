import React from 'react'
import { Statistic } from 'semantic-ui-react'

class Stats extends React.Component {


    // console.log(this.props)


    render(){


    return (


        <Statistic.Group widths='five'>
            <Statistic color='green' inverted>
                <Statistic.Value>{this.props.characters}</Statistic.Value>
                <Statistic.Label>Characters</Statistic.Label>
            </Statistic>
            <Statistic color='green' inverted>
                <Statistic.Value>{this.props.words}</Statistic.Value>
                <Statistic.Label>Words</Statistic.Label>
            </Statistic>
            <Statistic color='green' inverted>
                <Statistic.Value>{this.props.sentences}</Statistic.Value>
                <Statistic.Label>Sentences</Statistic.Label>
            </Statistic>
            <Statistic color='green' inverted>
                <Statistic.Value>{this.props.paragraphs}</Statistic.Value>
                <Statistic.Label>Paragraphs</Statistic.Label>
            </Statistic>
            <Statistic color='green' inverted>
                <Statistic.Value>{this.props.bigrams}</Statistic.Value>
                <Statistic.Label>Bigrams</Statistic.Label>
            </Statistic>
        </Statistic.Group>


  )
}
}

export default Stats



