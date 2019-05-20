import HttpRequet from '../lib/axios'
export let getAlist=()=>{
   return HttpRequet.request({
	url:'carlist',
	method:'get'
   })
}
