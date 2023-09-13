import React from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from './services/fakeTwitterPostService';
import { DARKBLUE } from '../helpers/colors';




function Message(props) {
    const params = useParams();
    const msm =getPost(parseInt(params.messageId))

       
    console.log(msm);

    return (
        <div>
            <p style={{color:DARKBLUE}}>message from: {msm.title}</p>
            <span>{msm.title}</span>
        </div>
    );
}

export default Message;