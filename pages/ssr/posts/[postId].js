import React from 'react';

const postId = ({ post }) => {
    return (
        <>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    );
};

export default postId;

// export async function getStaticPaths() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     const paths = data.map((post) => {
//         return {
//             params: {
//                 postId: `${post.id}`
//             }
//         }
//     })

//     return {
//         paths: paths,
//         fallback: false
//     }
// }


export async function getServerSideProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    // console.log(data);
    return {
        props: {
            post: data
        }
    }
}