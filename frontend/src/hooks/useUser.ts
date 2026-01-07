import { useState, useEffect } from "react";
import { userService, type User } from "../services/userService";

export function useUsers () {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect (()=> {
        const fetchUsers = async () => {
            try {
                const data = await userService.getAll();
                setUsers(data);
            } catch (err) {
                setError('Error al cargar usuarios');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();

    }, []);

    return {users, loading, error };
}