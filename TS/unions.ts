// type user = {
//     username : string
//     role : "admin" | "member" | "guet"
// }
// type UserRole = "admin" | "member" | "guet"
// let userRole: UserRole = "member";

type UserRole = "admin" | "member" | "guest"
type User = {
    username : string
    role : UserRole
}
const users : User[] = [
    { username: "Karim", role: "admin"},
    { username: "Kenza", role: "member"},
    { username: "Karine", role: "guest"}
];

function fetchUserDetails(username: string): User{
    const user = users.find(user => user.username === username)
    if(!user){
        throw new Error (`User with ${username} not found`)
    }
    return user
}
