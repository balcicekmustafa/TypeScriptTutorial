// npm install axios
import axios from "axios";

async function fetchUsers(): Promise<void> {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data);
    } catch (error) {
        console.error("Hata:", error);
    }
}

fetchUsers();
