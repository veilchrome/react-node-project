const express = require("express");
const fs = require("fs/promises");

const app = express();
const PORT = 8000;

app.use(express.json());

// API for Create
app.post("/user/create", async (req, res) => {
	try {
		const { id, name, className } = req.body;
		const createUser = { id, name, className };

		// Membaca File jika ada
		const existingData = await fs.readFile("userData.txt", "utf-8");
		const users = existingData ? JSON.parse(existingData) : [];

		// Add new user to the array
		users.push(createUser);

		// Write updated data back to file
		await fs.writeFile("userData.txt", JSON.stringify(users));

		res
			.status(201)
			.json({ message: "Data user Berhasil dibuat.", user: createUser });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

// API for Read
app.get("/user/read/:id", async (req, res) => {
	try {
		const { id } = req.params;

		//
		const existingData = await fs.readFile("userData.txt", "utf-8");
		const users = existingData ? JSON.parse(existingData) : [];

		if (id.toLowerCase() === "all") {
			res.json({ users });
		} else {
			const user = users.find((u) => u.id === id);

			if (user) {
				res.json({ user });
			} else {
				res.status(404).json({ message: "User tidak ditemukan" });
			}
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

// API for Update
app.put("/user/update/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { name, className } = req.body;

		const existingData = await fs.readFile("userData.txt", "utf-8");
		const users = existingData ? JSON.parse(existingData) : [];

		// Find user dengan ID
		const userUpdate = users.find((u) => u.id === id);

		if (userUpdate) {
			userUpdate.name = name;
			userUpdate.className = className;

			// Write file back using (FS module)
			await fs.writeFile("userData.txt", JSON.stringify(users));

			res.json({ message: "Data user berhasil di Update.", user: userUpdate });
		} else {
			res.status(404).json({ message: "Not Found" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

// API for Delete
app.delete("/user/delete/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const existingData = await fs.readFile("userData.txt", "utf-8");
		const users = existingData ? JSON.parse(existingData) : [];

		const updatedUsers = users.filter((u) => u.id !== id);

		await fs.writeFile("userData.txt", JSON.stringify(updatedUsers));

		res.json({ message: "Data User berhasil di hapus" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

app.get("/", (req, res) => {
	res.send("Selamat Datang di Endpoint CRUD!");
});

app.listen(PORT, () => {
	console.log(`Server Running on ${PORT}`);
});
