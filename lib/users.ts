import { User } from "../types/user"

export async function getUsers(): Promise<User[]> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/people`, {
            cache: "no-store",
        })

        if(!response.ok) {
            throw new Error("Failed")
        }

        const data = await response.json()
        return data.people
    }
    catch (error) {
        console.error("Could not fetch users:", error)
        throw new Error("Could not load users")
    }
}