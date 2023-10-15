const envMode = process.env.NODE_ENV;


let publicPath = '/installation/'

if(envMode === 'production')
  publicPath = ''
console.log('Before building', {envMode, publicPath})
return -1

module.exports = {
  publicPath,
}