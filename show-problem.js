const url = 'https://restcountries.com/v3.1/all'; 
fetch(url)
.then(res => res.json())
.then(data => showCountry(data));


function showCountry (getData) {
    const parent = document.getElementById('show-detels'); 
    for(const data of getData){
        const div = document.createElement('div'); 
        div.classList.add('show-country'); 
        div.innerHTML = `
        <div class="show-country">
            <div>
                <h2>${data.name.common}</h2>
                <p>Capital: ${data.capital}</p>
                <img class="w-75" src="${data.flags.png}" alt="">
            </div>
        </div>
        `
        parent.appendChild(div); 
        
        // function showDtl(){
        //     console.log('clicked'); 
        // }
    }

    

    // document.getElementById('show-more-detels').addEventListener('click', function(){
    //     console.log('clicked'); 
    // })
    

    
    




    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountry(data)); 
    function showCountry (getData) {
        document.getElementById('btnradio1').addEventListener('click', function(){    
            const parent = document.getElementById('show-detels'); 
            parent.textContent = ''; 
            for(const data of getData){
                    const div = document.createElement('div'); 
                    div.classList.add('show-country'); 
                    div.innerHTML = `
                        <div class="show-country">
                            <div>
                                <h2>${data.name.common}</h2>
                                <p>Capital: ${data.capital}</p>
                                <img class="w-75" src="${data.flags.png}" alt="">
                            </div>
                        </div>
                        `
                        parent.appendChild(div); 
            }
    })
}

        document.getElementById('btnradio2').addEventListener('click', function(){    
            console.log('asia button is clicked');
        const parent = document.getElementById('show-detels');
        parent.textContent = ''; 
        for(const data of getData){
            if(data.continents == 'Asia'){
                const div = document.createElement('div'); 
                div.classList.add('show-country'); 
                div.innerHTML = `
                    <div class="show-country">
                        <div>
                            <h2>${data.name.common}</h2>
                            <p>Capital: ${data.capital}</p>
                            <img class="w-75" src="${data.flags.png}" alt="">
                        </div>
                    </div>
                    `
                    parent.appendChild(div); 
            }
        }
})
        document.getElementById('btnradio3').addEventListener('click', function(){  
            console.log('asia button is clicked', getData);  
        const parent = document.getElementById('show-detels'); 
        parent.textContent = ''; 
        for(const data of getData){
            if(data.continents == 'Europe'){
                const div = document.createElement('div'); 
                div.classList.add('show-country'); 
                div.innerHTML = `
                    <div class="show-country">
                        <div>
                            <h2>${data.name.common}</h2>
                            <p>Capital: ${data.capital}</p>
                            <img class="w-75" src="${data.flags.png}" alt="">
                        </div>
                    </div>
                    `
                    parent.appendChild(div); 
            }
        }
})
        document.getElementById('btnradio4').addEventListener('click', function(){    
        const parent = document.getElementById('show-detels'); 
        parent.textContent = ''; 
        for(const data of getData){
            
            
            if(data.continents == 'Africa'){
                console.log('asia button is clicked', data);
                const div = document.createElement('div'); 
                div.classList.add('show-country'); 
                div.innerHTML = `
                    <div class="show-country">
                        <div>
                            <h2>${data.name.common}</h2>
                            <p>Capital: ${data.capital}</p>
                            <img class="w-75" src="${data.flags.png}" alt="">
                        </div>
                    </div>
                    `
                    parent.appendChild(div); 
            }
        }
})
        document.getElementById('btnradio5').addEventListener('click', function(){    
        const parent = document.getElementById('show-detels'); 
        parent.textContent = ''; 
        for(const data of getData){
            
            
            if(data.continents == 'North America'){
                console.log('asia button is clicked', data);
                const div = document.createElement('div'); 
                div.classList.add('show-country'); 
                div.innerHTML = `
                    <div class="show-country">
                        <div>
                            <h2>${data.name.common}</h2>
                            <p>Capital: ${data.capital}</p>
                            <img class="w-75" src="${data.flags.png}" alt="">
                        </div>
                    </div>
                    `
                    parent.appendChild(div); 
            }
        }
})
        document.getElementById('btnradio6').addEventListener('click', function(){    
        const parent = document.getElementById('show-detels'); 
        parent.textContent = ''; 
        for(const data of getData){  
            if(data.continents == 'South America'){
                console.log('asia button is clicked', data);
                const div = document.createElement('div'); 
                div.classList.add('show-country'); 
                div.innerHTML = `
                    <div class="show-country">
                        <div>
                            <h2>${data.name.common}</h2>
                            <p>Capital: ${data.capital}</p>
                            <img class="w-75" src="${data.flags.png}" alt="">
                        </div>
                    </div>
                    `
                    parent.appendChild(div); 
            }
        }
})
        document.getElementById('btnradio7').addEventListener('click', function(){    
        const parent = document.getElementById('show-detels'); 
        parent.textContent = ''; 
        for(const data of getData){
 
            if(data.continents == 'Oceania'){
                console.log('asia button is clicked', data);
                const div = document.createElement('div'); 
                div.classList.add('show-country'); 
                div.innerHTML = `
                    <div class="show-country">
                        <div>
                            <h2>${data.name.common}</h2>
                            <p>Capital: ${data.capital}</p>
                            <img class="w-75" src="${data.flags.png}" alt="">
                        </div>
                    </div>
                    `
                    parent.appendChild(div); 
            }
        }
})
        document.getElementById('btnradio8').addEventListener('click', function(){    
        const parent = document.getElementById('show-detels'); 
        parent.textContent = ''; 
        for(const data of getData){
            
            
            if(data.continents == 'Antarctica'){
                console.log('asia button is clicked', data);
                const div = document.createElement('div'); 
                div.classList.add('show-country'); 
                div.innerHTML = `
                    <div class="show-country">
                        <div>
                            <h2>${data.name.common}</h2>
                            <p>Capital: ${data.capital}</p>
                            <img class="w-75" src="${data.flags.png}" alt="">
                        </div>
                    </div>
                    `
                    parent.appendChild(div); 
            }
        }
}); 

        document.getElementById('btnradio9').addEventListener('click', function(){    
        const parent = document.getElementById('show-detels'); 
        parent.textContent = ''; 
        const input = document.getElementById('search-field'); 
        const value = input.value;
        const country = value.toLowerCase();
        for(const data of getData){
            const getCountry = data.name.common; 
            const searchedCountry = getCountry.toLowerCase(); 
            if(country == searchedCountry){
            const parent = document.getElementById('set-center'); 
            const div = document.createElement('div'); 
            div.classList.add('show-country'); 
                div.innerHTML = `
                    <div class="show-country">
                        <div>
                            <h2>${data.name.common}</h2>
                             <p>Capital: ${data.capital}</p>
                             <img class="w-75" src="${data.flags.png}" alt="">
                         </div>
                    </div>
                     `
                     parent.appendChild(div); 
                     
            } 
        }
}); 
}








// q1 time zoon set korle column this thake na why?? 
















// fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data => showCountry(data)); 

//         function showCountry(getData){
//             console.log('search button is clicked'); 
//             document.getElementById('search-button').addEventListener('click', function(){
               
//                 const parent = document.getElementById('show-detels'); 
//         // parent.textContent = ''; 
//         for(const data of getData){
            
            
//             if(data.continents == 'Antarctica'){
//                 console.log('asia button is clicked', data);
//                 const div = document.createElement('div'); 
//                 div.classList.add('show-country'); 
//                 div.innerHTML = `
//                     <div class="show-country">
//                         <div>
//                             <h2>${data.name.common}</h2>
//                             <p>Capital: ${data.capital}</p>
//                             <img class="w-75" src="${data.flags.png}" alt="">
//                         </div>
//                     </div>
//                     `
//                     parent.appendChild(div); 
//             }
//         }


//     }
                // const input = document.getElementById('search-field'); 
                // const inputValue = input.value; 
                // const lowerCase = inputValue.toLowerCase();
                

                // for(const data of getData){
                //     const getCountry = data.name.common; 
                //     const countryName = getCountry.toLowerCase(); 
                    // if(data.name.common == input.value){
                    //     console.log(data.name.common, input.value); 
                    // // parent.textContent = ''; 
                    // const parent = document.getElementById('show-detels'); 
                    // const div = document.createElement('div'); 
                    // div.classList.add('show-country'); 
                    //     div.innerHTML = `
                    //         <div class="show-country">
                    //             <div>
                    //                 <h2>${data.name.common}</h2>
                    //                  <p>Capital: ${data.capital}</p>
                    //                  <img class="w-75" src="${data.flags.png}" alt="">
                    //              </div>
                    //         </div>
                    //          `
                    //          parent.appendChild(div); 
                             
                    // } 
            // console.log(getCountry, inputValue); 
