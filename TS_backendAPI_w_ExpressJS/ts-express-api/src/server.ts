import express, { Request, Response } from "express";
import http from "http";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Merhaba, TypeScript ile Express!");
});

// Sunucuyu başlatırken hata kontrolü ekleyelim
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor...`);
});

// Port kullanımda mı kontrol et
server.on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
        console.error(`⚠️  Port ${PORT} kullanımda! Farklı bir port deneyelim...`);
        server.listen(0); // Kullanılabilir rastgele bir port seç
    } else {
        console.error("Sunucu başlatma hatası:", err);
    }
});
