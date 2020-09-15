

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
        return res.results.map(this._transformPerson);
      }
  
      async getPerson(id){
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
      }
      async getAllPlanets(){
        const res = await this.getResource('/planets/');
        return res.results.map(this._transformPlanet);
      }
      async getPlanet(id){
        const planet = await this.getResource(`/planets/${id}`)
        return this._transformPlanet(planet)
      }
  
      async getAllStarships(){
        const res = await this.getResource('/starships/');
        return res.results.map(this._transformStarship);
      }
      async getStarship(id){
        const starship = await this.getResource(`/starships/${id}`)
        return this._transformStarship(starship)
      }

      _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
      }

      _transformPlanet = (planet) => {
        return{
          id: this._extractId(planet),
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        }
      }
      _transformStarship = (starship) => {
        return{
          id: this._extractId(starship),
          name: starship.name,
          model: starship.model,
          manufacturer: starship.manufacturer,
          costInCredits: starship.costInCredits,
          length: starship.length,
          crew: starship.crew,
          passengers: starship.passengers,
          cargoCapacity: starship.cargoCapacity
        }
      }
      _transformPerson = (person) =>{
        return{
          id: this._extractId(person),
          name: person.name,
          gender: person.gender,
          birthYear: person.birthYear,
          eyeColor: person.eyeColor
        }
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