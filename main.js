const searchForm=document.querySelector('form');
const searchResult=document.querySelector('.result')
const container=document.querySelector('.container')

let searchQuery='';

const appId='b0ecf534'
const appKey='3c582c12c4306cedf1c82002bfdd2c2c'

const baseUrl=`https://api.edamam.com/search?q=pizza&app_id=${appId}&app_key=${appKey}`

https://api.edamam.com/api/recipes?q=pizza&app_id=b0ecf534&app_key=3c582c12c4306cedf1c82002bfdd2c2c

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    searchQuery=e.target.querySelector('input').value;
    fetchApi()
    
})

async function fetchApi(){
    const baseUrl=`https://api.edamam.com/search?q=${searchQuery }&app_id=${appId}&app_key=${appKey}`

    const response=await fetch(baseUrl);
    const data=await response.json();
    generateHTML(data.hits)
}

function generateHTML(results){
    let generatedHTML=''
results.map(result=>{
    
    generatedHTML +=

   `<div class="result">
    <div class="result-img">
            <img src="${result.recipe.image}">
     </div>
     <div class="info">
        <div class="result-info">
                <h4> ${result.recipe.label}</h4>
                <p>Calories: ${result.recipe.calories.toFixed(2)}</p>
                <p>Diet label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels: 'No diet found'}</p>
                <p>Calories: ${result.recipe.healthLabels}</p>

        </div>

            <div class="result-btns">
                    <button class="see-more"> <a href='${result.recipe.url}' target='_blank'> See more <span><i class="fa-solid fa-arrow-down"></i></span> </a></button>
            </div>
     </div>
</div>`

console.log(result)

})

searchResult.innerHTML=generatedHTML;

  

}

