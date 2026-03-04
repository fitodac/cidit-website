import { db, Video } from "astro:db";

export default async function seedPictures() {
	await db.insert(Video).values([
		{ galleryId: 1, path: "b3e7d1c4.mp4" },

		{ galleryId: 6, path: "1c9a7e5d.mp4" },
		{ galleryId: 6, path: "5a7d2c1e.mp4" },
		{ galleryId: 6, path: "6a2f4b8c.mp4" },
		{ galleryId: 6, path: "b3f8c5a6.mp4" },

		{ galleryId: 7, path: "1c9e4b7a.mp4" },

		{ galleryId: 19, path: "d9c3f1a6.mp4" },

		{ galleryId: 22, path: "04152637.mp4" },
		{ galleryId: 22, path: "15263748.mp4" },
		{ galleryId: 22, path: "26374859.mp4" },
		{ galleryId: 22, path: "e2f30415.mp4" },
		{ galleryId: 22, path: "f3041526.mp4" },
	]);
}
