import type { APIRoute, GetStaticPaths } from "astro";
import satori from "satori";
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { seoData } from "../../data/seoData";

const dynamicSlugs = [
  "bootcamp",
  "cofar",
  "covida",
  "proteia",
  "guarania",
  "gestion-de-contratos-de-obra-publica-con-experiencia-fidici",
  "curso-costo-4w-2026",
  "proceso-de-estabilizacion-de-subrasantes-y-bases-de-camino",
  "tecnologias-de-hormigon-aplicada",
  "planificacion-y-administracion-de-la-red-vial-concesiones-crema-gmans",
  "inspeccion-evaluacion-y-gerenciamiento-de-puentes",
  "control-de-obras-viales",
  "perfil-4w-2026",
  "mantenimiento-de-hospitales",
];

export const getStaticPaths: GetStaticPaths = () => {
  return dynamicSlugs.map((slug) => ({ params: { slug } }));
};

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug!;
  const entry = seoData[slug];
  const title = entry?.title ?? "CIDIT";

  const fontPath = path.join(
    process.cwd(),
    "src",
    "assets",
    "fonts",
    "Inter-Bold.ttf"
  );

  let fontData: ArrayBuffer;
  if (fs.existsSync(fontPath)) {
    fontData = fs.readFileSync(fontPath).buffer as ArrayBuffer;
  } else {
    const fontResponse = await fetch(
      "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf"
    );
    fontData = await fontResponse.arrayBuffer();
  }

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          color: "white",
          fontFamily: "Inter",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "52px",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      maxWidth: "900px",
                      overflow: "hidden",
                    },
                    children: title,
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "28px",
                      fontWeight: 700,
                      opacity: 0.9,
                    },
                    children: "CIDIT",
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "20px",
                      opacity: 0.7,
                    },
                    children: "ciditpy.org",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
