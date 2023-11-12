module.exports = {
  presets: ['module:typescript-base-babel-preset'],
  tailwind: {
    plugins: ['macros'],
    config: './src/tailwind.config.js',
    format: 'auto',
  },
}
