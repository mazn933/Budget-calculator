  
    const calculateIncome=document.querySelector('.calculateIncome');
    const totalIncome=document.querySelector('.totalIncome');
    const totalExpense=document.querySelector('.totalExpense');
    const CalculateExpense=document.querySelector('.calculateExpense');
    const inputNumber=document.querySelectorAll('.inputNumberIncome');
    const inputExpense=document.querySelectorAll('.inputNumberExpense');
    const AddnewExpense=document.querySelector('.AddnewExpense');
    const addNewIncome=document.querySelector('.addNewIncome');
    const income=document.querySelector('.income');
    const expense=document.querySelector('.expense');
    const ButtoncloseIncome=document.querySelectorAll('.ButtoncloseIncome');
    const ButtoncloseExpense=document.querySelectorAll('.ButtoncloseExpense');
    const AddedIncome=document.querySelector('.AddedIncome');
    const AddedExpense=document.querySelector('.AddedExpense');
    const totalGross=document.querySelector('.TotalGross');
    const ShowSummary=document.querySelector(".ShowSummary")


    let incomeNumbers=[]
    let expenseNumbers=[];
    let clickedinc=false;
    let clickedExp=false;
    let clickAddincome=true;
    let clickAddExpense=true;
    
    calculateIncome.addEventListener('click',CalculatTotalincome);
    CalculateExpense.addEventListener('click',CalculateTotalexpense);
    AddnewExpense.addEventListener('click',addNewExpense);
    addNewIncome.addEventListener('click',Addnewincome);

  


    function CalculateTotalexpense(){
        if(!clickedExp){
        inputExpense.forEach(item =>{
            expenseNumbers.push(Number(item.value));
            
        })
        
        DisplayingFinalExpense()
        
        clicked=true
        inputExpense.forEach(item =>{
            item.addEventListener('change',function(){
                clickedExp=false;
                expenseNumbers=[]
            })
        })

    

    }
      

    }




    function CalculatTotalincome(){
        if(!clickedinc){

        inputNumber.forEach(item =>{
        incomeNumbers.push(Number(item.value));
            
        })

        DsiplayingFinalincome()
        clicked=true
        inputNumber.forEach(item =>{
            item.addEventListener('change',function(){
                clickedinc=false;
                incomeNumbers=[]
            })
        })


    }
 
    }

    
    ButtoncloseIncome.forEach(item =>{
        item.addEventListener('click',function(e){
           e.target.parentElement.remove();
           let v=Number(e.target.previousElementSibling.value);

           let index=incomeNumbers.indexOf(v);
           let newincomeNumbers=incomeNumbers.splice(index,1);
         
           
           DsiplayingFinalincome()

        })
    })

    ButtoncloseExpense.forEach(item =>{
        item.addEventListener('click',function(e){
           e.target.parentElement.remove();
           let v=Number(e.target.previousElementSibling.value);

           let index1=expenseNumbers.indexOf(v);
           let newExpenseNumbers=expenseNumbers.splice(index1,1);

           DisplayingFinalExpense()


        })
    })


    function Addnewincome(){
        if(clickAddincome){

        
        let newIncome=`<input type="number" class="inputnm" placeholder="0.00"><p>New Income</p><span class="Buttonclose">X</span>`
        AddedIncome.innerHTML=newIncome;
        AddedIncome.classList.add('showAddedIncome')

        const Inputs=document.querySelector('.inputnm')
        Inputs.addEventListener('change',function(){
                
        incomeNumbers.push(Number(Inputs.value))  
        DsiplayingFinalincome()
            
        });

        const buttonClose=document.querySelector('.Buttonclose')
    
        buttonClose.addEventListener('click',function(e){
            e.target.parentElement.remove();
            let v=Number(e.target.previousElementSibling.value);
 
            let index=incomeNumbers.indexOf(v);
            let newincomeNumbers=incomeNumbers.splice(index,1);
            DsiplayingFinalincome()
            clickAddincome=true;
        })

        clickAddincome=false

        }

        else{}  
    }

    
    function addNewExpense(){

        if(clickAddExpense){
           let NewExpense=`<input type="number" class="inputnm" placeholder="0.00"><p>New Expense</p><span class="Buttonclose">X</span>`
           AddedExpense.innerHTML=NewExpense;
           AddedExpense.classList.add('showAddedIncome')
            const Inputs=document.querySelector('.inputnm')
            Inputs.addEventListener('change',function(){
                    
                expenseNumbers.push(Number(Inputs.value));
                DisplayingFinalExpense()
                
            });
    
            const buttonClose=document.querySelector('.Buttonclose')
        
            buttonClose.addEventListener('click',function(e){
                e.target.parentElement.remove();
                let v=Number(e.target.previousElementSibling.value);

                let index1=expenseNumbers.indexOf(v);
                let newExpenseNumbers=expenseNumbers.splice(index1,1);
 
                DisplayingFinalExpense()
                clickAddExpense=true
                
            })
    
            clickAddExpense=false
    
            }
    
            else{}  
    }


let ar=[]
function DisplayingFinalExpense(){
        let FinalResultexp=expenseNumbers.reduce((a,b) => a+b,0 );
        ar.push(FinalResultexp);
        totalExpense.classList.add('showtotal');
        totalExpense.innerHTML=`Total Expenses = $${FinalResultexp.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;                         
    }




function DsiplayingFinalincome(){
    let FinalResultInc=incomeNumbers.reduce((a,b) => a+b,0 );
    ar.push(FinalResultInc);
    totalIncome.classList.add('showtotal')
    totalIncome.innerHTML= `Total Incomes = $${FinalResultInc.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
    


}

let clickedShowsummary=true

ShowSummary.addEventListener('click',function(){
    if(clickedShowsummary){
    
    let s=ar[0]-ar[1];
   
    if(ar[0]===undefined || ar[1]===undefined){alert('Please add your income and expense first')}
    else{
    

    totalGross.innerHTML+=`<h3><p>Total Income</p> <p>$${ar[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p></h3>
                           <h3><p>Total Expense</p><p>$${ar[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</P></h3>
                            <h3><p>Spare cash:</p><p>${s.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}$</p></h3>
                           `;

     totalGross.classList.add('showTotalgross');
     clickedShowsummary=false
    
    }}


})