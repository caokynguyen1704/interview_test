const url='https://jsonplaceholder.typicode.com/posts';

function isLoading(loading){
	if (loading){
		document.getElementById("loadingdiv").style.display = "block";
		document.getElementById("btndiv").style.display = "none";
	}else{
		document.getElementById("loadingdiv").style.display = "none";
		document.getElementById("btndiv").style.display = "block";
	}
}


async function fetch_api() {
	isLoading(true)
	try {
	  var resp = await fetch(url);
	  var data = await resp.json();
	  isLoading(false)
	  return data;
	} catch (e) {
	  isLoading(false)
	  return [];
	}
  }

  async function post_api(json_data) {
	isLoading(true)
	try {
	  var res = await fetch(url, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(json_data)
	  });
	  var data = await res.json();
	  isLoading(false)
	  return data;
	} catch (e) {
	  isLoading(false)
	  return [];
	}
  }