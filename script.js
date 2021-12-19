
const databaseH = [
  {
    Hsite:"Jamaica National Hertiage Trust",
    Location:"Kingston", 
  },
  { Hsite:"Fort Charles",
    Location:"Port Royal", 
  },
  {
    Hsite:"",
    Location:"Kingston", 
  },
  {
    Hsite:"Jamaica National Hertiage Trust",
    Location:"Kingston", 
   
  },
];


function searchResults(selector){
  return document.querySelector(selector);
   }

function clearResults (){
  searchResults('.search-results').innerHTML =  "";
}

function showResults(){
  const show = searchResults('.searchbar').value;
   clearResults();
   if (show.length>0) {
  for ( let i = 0; i < databaseH.length; i++ ){
        if (
          databaseH[i].Hsite.toLocaleLowerCase().includes(show.toLocaleLowerCase())||
           databaseH[i].Location.toLocaleLowerCase().includes(show.toLocaleLowerCase())
           ){   
           searchResults('.search-results').innerHTML += `
         <div class = "search-item">
           <span class = "item"> ${databaseH[i].Hsite}</span>
            <span class = "item"> ${databaseH[i].Location}</span>
            
        </div>
         `;
         }
      }
   }
}
searchResults('.searchbar').addEventListener('keyup', showResults);