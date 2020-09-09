

export default class SwapiServices  {

    _apiBase = 'https://swapi.dev/api';
  
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
            `, received ${res.status}`);
        }
        return await res.json();
          }
      
      async getAllPeople(){
          const res = await this.getResource(`/people/`);
          return res.results;
      }
  
      getPerson(id){
          return this.getResource(`/people/${id}`);
      }
      async getAllPlanets(){
          const res = await this.getResource('/planets/');
          return res.results;
      }
      getPlanet(id){
          return this.getResource(`/planets/${id}`)
      }
  
      async getAllStarships(){
          const res = await this.getResource('/starships/');
          return res.results;
      }
      getStarship(id){
          return this.getResource(`/starships/${id}`)
      }
  }
//   const swapi = new SwapiServices();
  
  // swapi.getAllPeople().then((body) =>{
  // 	console.log(body);
  // })
  
  // swapi.getAllPeople().then((people) => {
  // 	people.forEach((people) => {
  // 		console.log(people.name)
  // 	})
  // })
  // swapi.getPerson(10).then((p) => {
  // 	console.log(p.name)
  // })
  // swapi.getPlanet(10).then((p) => {
  // 		console.log(p.name)
  // 	})
  // swapi.getAllPlanets().then((pl) => {
  // 	pl.forEach((pl) => {
  // 		console.log(pl.name)
  // 	})
  // })
//   swapi.getAllStarships().then((pl) => {
//       pl.forEach((pl) => {
//           console.log(pl.name)
//       })
//   })
  
  
  // getResource('https://swapi.dev/api/people/')
  //     .then((body) => {
  //         console.log(body);
  //     })
  //     .catch((err) => {
  //         console.error('Could not fetch ', err)
  //     })
  
  // fetch('https://swapi.dev/api/people/')
  //     .then((res) => {
  //         return res.json();
  //     })
  //     .then((body) => {
  //         console.log(body);
  //     })