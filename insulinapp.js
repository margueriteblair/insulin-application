let diabetesDisplay ={
    display : [],

    displayFoodItem: function (){
        if (this.display.length === 0){
            console.log('This is Empty')
        }else{
            console.log('Food Items : ')
         }
         
         for(let i = 0; i <this.display.length; i++){
             console.log(this.display[i].displayText);
             if(this.display[i].completed === true){
                 console.log(( ' (x) ' ),this.display[i].displayText);
             }else{
                 console.log( '(  )',this.display[i].displayText );
             }
         }
    },

    addCurrentBG:  function (displayText){
        this.display.push(displayText)
    //this.displayInfo();
     },
     deleteInfo: function (position){
         this.display.splice(position);
         this.displayInfo();
     }
    }
    
     
    
     let handlers = {

        addCurrentBG: function(){
            let addCurrentBGText = document.getElementById('addCurrentBGtTextInput')
           // diabetesDisplay.addCurrentBG(addCurrentBGText).value;
            addCurrentBGTextInput.value= " ";
            view.displayInfo();
        },
        deleteInfo: function (position) {
            diabetesDisplay.deleteInfo(position);
            view.displayInfo();

        }
     }

     let view = {
         displayInfo: function(){
             let foodUl = document.querySelector('ul');
             foodUl.innerHTML= '';
             for (let i = 0; i <diabetesDisplay.display.length; i++){
                 let foodLi = document.createElement('li');
                 let food = diabetesDisplay.display[i];
                
                 foodLi.id = i;
                 foodLi.textContent = food.displayText
                foodUl.appendChild(foodLi)
                }
         },

     }


     const diabetesFoodList = document.querySelector('#food-list ul');

     diabetesFoodList.addEventListener('click', function(e){
     if(e.target.className == 'delete'){
         const li =e.target.parentElement;
         diabetesFoodList.removeChild(li);
     }
     })



     const addForm = document.forms['add-food']

     addForm.addEventListener('submit', function(e){
       e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const foodName = document.createElement('span');
        foodName.textContent = value;
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'delete';

        foodName.classList.add('name');
        deleteBtn.classList.add('delete');

        li.appendChild(foodName);
        li.appendChild(deleteBtn);
        diabetesFoodList.appendChild(li);

     })

     const hideBox = document.querySelector('#hide');
    
     hideBox.addEventListener('change', function(e){
         if(hideBox.checked){
             diabetesFoodList.style.display= 'none'
         }else{
            diabetesFoodList.style.display= 'initial'
         }
     })
     const searchBar = document.forms['search-foods'].querySelector('input');
     searchBar.addEventListener('keyup', (e) => {
       const term = e.target.value.toLowerCase();
       const foods = diabetesFoodList.getElementsByTagName('li');
       Array.from(foods).forEach((food) => {
         const title = food.firstElementChild.textContent;
         if(title.toLowerCase().indexOf(e.target.value) != -1){
           food.style.display = 'block';
      } else {
           food.style.display = 'none';
     }
     });
     });


   ///////////// below is where im having trouble 
   
       
function carbCover(){
    let currentBG = document.getElementById('number');
    let carbValue = parseInt(currentBG.options[currentBG.selectedIndex].value);     
    let totalCarbs = document.getElementById("totalCarbsInput").value

    carbCovering = (totalCarbs / carbValue )
    
    console.log(carbCovering)


carbCover();

}

function carbCorrection (){
    let currentBG = document.getElementById('number');
    let carbValue = parseInt(currentBG.options[currentBG.selectedIndex].value);     
    let totalCarbs = document.getElementById("totalCarbsInput").value
      let carbCorrecting=  ((totalBG - 130) /320) 
      console.log(carbCorrecting)
}
  

