module.exports = {
  mode: 'jit',
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      width: {
        'content': "calc(100vw - 384px)",
      },
      colors: {
        sidebarHeaderBackgroundLight: "#eee",
        sidebarContentBackgroundLight: "#f9f9f9",
        sidebarHeaderBackgroundDark: "#1c1c1c",
        sidebarContentBackgroundDark: "#33373a",
        iconColorDark: "#9da5ad",
        contentBackgroundDark: "#121212",
        twitterColor: "#00acee",
        discordColor: "#5865F2",
        mediumColor: "#FFC017"
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    }
  },
  variants: {
    backgroundColor: [
      "dark",
    ],
    borderColor: ["dark"],
    textColor: ["dark"],
  },
  plugins: [require('@tailwindcss/typography')],
}

    