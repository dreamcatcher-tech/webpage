module.exports = {
  pool: [
    'Market',
    {
      type: 'category',
      label: 'Requests',
      items: [{ type: 'autogenerated', dirName: 'Requests' }],
    },
    {
      type: 'category',
      label: 'Ideas',
      items: [{ type: 'autogenerated', dirName: 'Ideas' }],
    },
  ],
}