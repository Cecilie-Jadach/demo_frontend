import { User } from "../types/user"

type UserProps = {
    users: User[];
}

export default function Users({users}: UserProps) {
return (
    <div>
        {users.map((user,index) => (
            <div key={index}>
                <p>First name: {user.first_name}</p>
                <p>Last name: {user.last_name}</p>
                <p>Cpr: {user.cpr}</p>
            </div>
        ))}
    </div>
)
}