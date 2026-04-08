import Users from "../../components/Users"
import { getUsers } from "../../lib/users"

export const dynamic = "force-dynamic"

export default async function page() {
    // 1. Hent dataen (arrayet)
    const usersData = await getUsers()

    return (
        <main>
            {/* 2. Send arrayet videre til komponenten */}
            <h2>Users</h2>
            <Users users={usersData}/>
        </main>
    )
}