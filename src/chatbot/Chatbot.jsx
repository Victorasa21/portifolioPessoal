import React, { Component } from 'react';
import { Widget, addResponseMessage, toggleWidget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import foto from "../images/foto_Victor.jpg"

class chatbot extends Component {

    componentDidMount() {

        let workspaceId = 'd1eeecb7-0635-4dda-b623-135ba51246a7'
        fetch(
            'https://gateway.watsonplatform.net/assistant/api/v1/workspaces/' + workspaceId + '/message?version=2019-02-28', {
            method: 'post',
            body: JSON.stringify({

                "input": {
                    "text": ""
                },
                "context": {
                    "timezone": "America/Sao_Paulo"
                }
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Basic ZDY3OTAwMTMtZjQ2OS00OGRkLWIwZjQtNjg5NzBlZWJiNTE0OjVHMk9PSmxFUVA0Vg=='

            }

        }).then(
            res => res.json())
            .then(response => {
                addResponseMessage(response.output.generic[0].text)
            }
            )
            .catch((err) => {
                console.log('Fetch Error', err)
            })

    }

    handleNewUserMessage = (newMessage) => {
        // Now send the message throught the backend API
        let workspaceId = 'd1eeecb7-0635-4dda-b623-135ba51246a7'
        fetch(
            'https://gateway.watsonplatform.net/assistant/api/v1/workspaces/' + workspaceId + '/message?version=2019-02-28', {
            method: 'post',
            body: JSON.stringify({

                "input": {
                    "text": newMessage
                },
                "context": {
                    "timezone": "America/Sao_Paulo"
                }
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Basic ZDY3OTAwMTMtZjQ2OS00OGRkLWIwZjQtNjg5NzBlZWJiNTE0OjVHMk9PSmxFUVA0Vg=='

            }

        }).then(
            res => res.json())
            .then(response => { addResponseMessage(response.output.generic[0].text) }
            )
            .catch((err) => {
                console.log('Fetch Error', err)
            })


    }

    render() {
        return (
            <div>
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    toggleWidget={this.toggleWidget}
                    title="Victor Almeida's Chatbot"
                    subtitle="Fale comigo, humano!"
                    profileAvatar={foto}
                    senderPlaceHolder="Digite..."
                    setQuickButtons={[{ label: "Oi", Key: "hi" }]}
                />
            </div>
        );
    }
}

export default chatbot;