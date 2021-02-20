import Typography from "typography"

const typography = new Typography({
  baseFontSize: "10px",
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: "Poppins",
      styles: ["400", "500", "700"],
    },
    {
      name: "Lato",
      styles: ["400, 700"],
    },
  ],
})

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
