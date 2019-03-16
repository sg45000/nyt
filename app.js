Vue.config.devtools = true;
const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=MsnZYe16x2y84tNTgwY47KTyhFPfQdR6")
    .then(response => {this.results = response.data.results})
  }
})
