import React from 'react'
import axios from 'axios';

export default function SinglePsot(props) {
    console.log(props)
    return (
        <div>
            <div>{props.data.id}</div>
            <div>{props.data.title}</div>
            <div>{props.data.body}</div>

        </div>
    )
}
export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { postId: '1' }
            },
            {
                params: { postId: '2' }
            },
            {
                params: { postId: '3' }
            },
        ],
        fallback: false,
    }
}
export async function getStaticProps(context) {
    const { params } = context;
    console.log(params)
    const SinglePsot = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const SinglePsotData = SinglePsot.data;
    console.log(SinglePsotData)
    return {
        props: {
            data: SinglePsotData
        }
    }

}
