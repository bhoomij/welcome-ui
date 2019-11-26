export default {
  title: 'Welcome UI',
  description: 'Design system of @wttj with react, styled-components and styled-system',
  dest: '/docs',
  menu: ['Getting Started', 'Theming', 'Components', 'Fields'],
  port: 3020,
  // https://github.com/pedronauck/docz/issues/777#issuecomment-489947783
  filterComponents: files => files.filter(filepath => /w*.(js|jsx|ts|tsx)$/.test(filepath))
}
