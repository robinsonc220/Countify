import React from 'react'
import { Button, Modal, Form, Input } from 'semantic-ui-react'

function ParameterForm() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button color='green'>Edit Parameters</Button>}
    >
      <Modal.Header>Parameters</Modal.Header>
        <Modal.Content form>
            {/* <Image size='medium' src='/images/avatar/large/rachel.png' wrapped /> */}
            <Form size='small'>
                    <Form.Group widths='equal'>
                    <Form.Field>
                        {/* <label>Character Limit</label> */}
                        <Input fluid placeholder='Character Limit' />
                    </Form.Field>
                    <Form.Field>
                        {/* <label>Word Minimum</label> */}
                        <Input fluid placeholder='Word Minimum' />
                    </Form.Field>
                    <Form.Field>
                        {/* <label>Sentence Minimum</label> */}
                        <Input fluid placeholder='Sentence Minimum' />
                    </Form.Field>
                    <Form.Field>
                        {/* <label>Paragraph Minimum</label> */}
                        <Input fluid placeholder='Paragraph Minimum' />
                    </Form.Field>
                    <Form.Field>
                        {/* <label>Bigram Search</label> */}
                        <Input fluid placeholder='Bigram Search' />
                    </Form.Field>
                    </Form.Group>
                </Form>

        </Modal.Content>
        <Modal.Actions>
            {/* <Button color='black' onClick={() => setOpen(false)}>
            Nope
            </Button> */}
            <Button
            content="Submit"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
            />
        </Modal.Actions>
    </Modal>
  )
}

export default ParameterForm
