import React from 'react';
import User from '../../components/user';

const users = (props) => {
    const { users } = props
    return (
        <>
            <h1>list of users</h1>
            {
                users.map(user => <User user={user} key={user.id} />)
            }
        </>
    );
};

export default users;
// export async function getStaticProps() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     return {
//         props: {
//             users: data
//         }
//     }
// }

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    // console.log(data);
    return {
        props: {
            users: data
        }
    }
}