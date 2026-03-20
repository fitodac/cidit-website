import { db, Gallery } from "astro:db";

export default async function seedGallery() {
	await db.insert(Gallery).values([
		// COMUNIDAD E INDIGENA
		{
			id: 1,
			name: "CEI001",
			title: "Ciudad del Este - <span>Asentamiento Atracadero</span>",
			cover_src: "fa3c5d9e.jpg",
			categoryId: 1,
		},
		{
			id: 2,
			name: "CEI002",
			title:
				"Voluntarios de la <span>Cruz Roja Paraguaya</span> Filial Alto Paraná",
			cover_src: "7d5c2a9f.jpeg",
			categoryId: 1,
		},
		{
			id: 3,
			name: "CEI003",
			title: "<span>Policía Nacional</span> de Juan E. Oleary",
			cover_src: "3b7a1e9c.avif",
			categoryId: 1,
		},
		{
			id: 4,
			name: "CEI004",
			title: "Caaguazú - <span>Comunidad San Lorenzo</span>",
			cover_src: "3a8f5e2b.jpg",
			categoryId: 1,
		},
		{
			id: 5,
			name: "CEI005",
			title: "Caazapá - <span>Barrio Cristo Rey</span>",
			cover_src: "6b9a4e1f.jpg",
			categoryId: 1,
		},
		{
			id: 6,
			name: "CEI006",
			title: "Caaguazú - <span>Comunidad Indígena Kambay</span>",
			cover_src: "cd4f8c2b.jpg",
			categoryId: 1,
		},
		{
			id: 7,
			name: "CEI007",
			title: "Caazapá – <span>Comunidad Indígena de Cerrito</span>",
			cover_src: "1b4f8c2a.jpg",
			categoryId: 1,
		},
		{
			id: 8,
			name: "CEI008",
			title: "Guaira – <span>Comunidad Indígena Santa Teresita</span>",
			cover_src: "4e5a4c3b.jpeg",
			categoryId: 1,
		},
		{
			id: 9,
			name: "CEI009",
			title: "Guaira, Colonia Independencia - <span>Comunidad Azucena</span>",
			cover_src: "c03c4e5b.jpg",
			categoryId: 1,
		},
		// SERVICIOS SOCIALES
		{
			id: 10,
			name: "SSP001",
			title: "Municipalidad de <span>Caaguazú</span>",
			cover_src: "6ad6e27d.jpeg",
			categoryId: 2,
		},
		{
			id: 11,
			name: "SSP002",
			title: "Municipalidad de <span>Caazapá</span>",
			cover_src: "7be7f38e.jpeg",
			categoryId: 2,
		},
		{
			id: 12,
			name: "SSP003",
			title: "Municipalidad de <span>Coronel Oviedo</span>",
			cover_src: "f36f7b04.jpeg",
			categoryId: 2,
		},
		{
			id: 13,
			name: "SSP004",
			title: "Municipalidad de <span>Hernandarias</span>",
			cover_src: "def789c5.jpeg",
			categoryId: 2,
		},
		{
			id: 14,
			name: "SSP005",
			title: "Municipalidad de <span>Independencia</span>",
			cover_src: "4e6f7a8b.jpeg",
			categoryId: 2,
		},
		{
			id: 15,
			name: "SSP006",
			title: "Municipalidad de <span>Presidente Franco</span>",
			cover_src: "d1f2a3b4.jpeg",
			categoryId: 2,
		},
		{
			id: 16,
			name: "SSP007",
			title: "Municipalidad de <span>San Juan Nepomuceno</span>",
			cover_src: "6acbdced.jpeg",
			categoryId: 2,
		},
		{
			id: 17,
			name: "SSP008",
			title: "Municipalidad de <span>Villarrica</span>",
			cover_src: "9def0a1b.jpeg",
			categoryId: 2,
		},
		{
			id: 18,
			name: "SSP009",
			title: "Municipalidad de <span>Oleary</span>",
			cover_src: "05678abc.jpeg",
			categoryId: 2,
		},
		// EDUCACIÓN
		{
			id: 19,
			name: "EDU001",
			title:
				"Alto Paraná - <span>Colegio Nacional de EMD Tacurú Pucú de Hernandarias</span>",
			cover_src: "89a1b2c3.jpg",
			categoryId: 3,
		},
		{
			id: 20,
			name: "EDU002",
			title: "Alto Paraná - <span>Colegio Nacional Juan Pablo II</span>",
			cover_src: "6e3a2f8b.jpg",
			categoryId: 3,
		},
		{
			id: 21,
			name: "EDU003",
			title: "Alto Paraná - <span>Colegio Nacional Carlos A. López</span>",
			cover_src: "3b9d6f1a.jpg",
			categoryId: 3,
		},
		{
			id: 22,
			name: "EDU004",
			title: "Alto Paraná - <span>Colegio Presidente Franco</span>",
			cover_src: "3d4e5f6a.jpg",
			categoryId: 3,
		},
		{
			id: 23,
			name: "EDU005",
			title:
				"Alto Paraná - <span>Colegio Nacional Moisés Santiago Bertoni</span>",
			cover_src: "b0c1d2e3.jpeg",
			categoryId: 3,
		},
		{
			id: 24,
			name: "EDU006",
			title: "Caaguazú - <span>Colegio Nacional San Lorenzo</span>",
			cover_src: "8d9eafb1.jpg",
			categoryId: 3,
		},
		{
			id: 25,
			name: "EDU007",
			title: "Caaguazú - <span>Colegio Nacional Inmaculada Concepción</span>",
			cover_src: "c6d1a8e4.jpg",
			categoryId: 3,
		},
		{
			id: 26,
			name: "EDU008",
			title: "Caaguazú - <span>Colegio Nacional Sabino Alvarenga Rolón</span>",
			cover_src: "9f4c2b7x.jpeg",
			categoryId: 3,
		},
		{
			id: 27,
			name: "EDU009",
			title: "Caazapá - <span>Colegio Nacional Mayor Nicolás Argüello</span>",
			cover_src: "d1a6x5f4.jpg",
			categoryId: 3,
		},
		{
			id: 28,
			name: "EDU010",
			title:
				"Guairá - <span>Colegio Regional de Educación Natalicio Talavera</span>",
			cover_src: "c2fb50a9.jpg",
			categoryId: 3,
		},
	]);

	console.log("- Galleries seeded!");
}
