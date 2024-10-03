function e(e){return parseInt(e.replace(/\$/g,"").replace(/,/g,""),10)}const a=[...document.querySelectorAll("li")];!function(a){let t=a.sort((a,t)=>e(t.dataset.salary)-e(a.dataset.salary)),r=a[0].parentNode;t.forEach(e=>r.appendChild(e))}(a),a.reduce((e,a)=>(e.push({name:a.innerText,...a.dataset}),e),[]);
//# sourceMappingURL=index.3586cb46.js.map
