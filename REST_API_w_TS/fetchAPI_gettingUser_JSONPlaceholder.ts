async function fetchUsers(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Ağ hatası!");
        }
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.error("Hata:", error);
    }
}

fetchUsers();
