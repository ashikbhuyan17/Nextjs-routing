const User = ({ user }) => {
    return (
        <>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </>
    )
}
export default User

// const User = (props) => {
//     console.log(props.user);
//     const { user } = props
//     return (
//         <>
//             <p>{user.name}</p>
//             <p>{user.email}</p>
//         </>
//     )
// }
// export default User