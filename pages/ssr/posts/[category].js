import React from 'react';

const category = ({ post }) => {
    return (
        <>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    );
};

export default category;

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
    // console.log('............', context);
    const { params, req, res, query } = context
    // console.log(params.category)
    const { category } = params
    console.log(req.headers.cookie)
    console.log("query", query);
    res.setHeader('Set-Cookie', ['name=ashik'])
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.category}`)
    const data = await response.json()
    // console.log(data);
    return {
        props: {
            post: data
        }
    }
}