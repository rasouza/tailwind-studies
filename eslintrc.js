module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended", // Enables plugin + config-prettier
  ],
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error", // Shows prettier errors as ESLint errors
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
