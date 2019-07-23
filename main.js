const container = document.querySelector('.container')

axios
  .get(
    'https://cloud.culture.tw/frontsite/trans/emapOpenDataAction.do?method=exportEmapJson&typeId=E'
  )
  .then(response => {
    console.log(response.data)
  })

axios.get({
  url: 'https://gis.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json',
  headers: {
    'Access-Control-Allow-Origin': 'foobar',
    'Access-Control-Allow-Methods': 'Get'
  }
})
