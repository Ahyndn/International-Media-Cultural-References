const explanations = async () => {

    const response = await fetch('IMCR_JSON/IMCRtext.json'); 
    const data = await response.json();
     
    if(response.status != 200){
        throw new Error('data denied');
    }

    return data;

};

explanations().then((data) => {
    
    const explanationss = document.querySelector('.intro');
    const explanationss1 = document.querySelector('.figure1');
    const explanationss2 = document.querySelector('.description1');
    const explanationss3 = document.querySelector('.figure2');
    const explanationss4 = document.querySelector('.description2');
    const explanationss5 = document.querySelector('.figure3');
    const explanationss6 = document.querySelector('.description3');
    const explanationss7 = document.querySelector('.figure4');
    const explanationss8 = document.querySelector('.description4');
    const explanationss9 = document.querySelector('.figure5');
    const explanationss10 = document.querySelector('.description5');
    const explanationss11 = document.querySelector('.figure6');
    const explanationss12 = document.querySelector('.description6');
   
    for(let i=0; i < data.length; i++){
        if([i] < data[i].textp6){
            explanationss.innerHTML += `
            <h2>IMCR</h2>
            <p>${data[i].text}</p>
            <h2>IMCR: Figs. 1-6 Process of The Representations</h2>
            <p>${data[i].textp2}</p>
            <p>${data[i].textp3}</p>
            <p>${data[i].textp4}</p>
            <p>${data[i].textp5}</p>
            <p>${data[i].textp6}</p>
            `;
        } else if ([i] < data[i].text1){
            explanationss1.innerHTML += `<h5>${data[i].text1}</h5>`;
        } else if ([i] < data[i].text2){
            explanationss2.innerHTML += `<div>${data[i].text2}</div>`;
        } else if ([i] < data[i].text3){
            explanationss3.innerHTML += `<h5>${data[i].text3}</h5>`;
        } else if ([i] < data[i].text4){
            explanationss4.innerHTML += `<div>${data[i].text4}</div>`;
        } else if ([i] < data[i].text5){
            explanationss5.innerHTML += `<h5>${data[i].text5}</h5>`;
        } else if ([i] < data[i].text6){
            explanationss6.innerHTML += `<div>${data[i].text6}</div>`;
        } else if ([i] < data[i].text7){
            explanationss7.innerHTML += `<h5>${data[i].text7}</h5>`;
        } else if ([i] < data[i].text8) {
             explanationss8.innerHTML += `<div>${data[i].text8}</div>`;
        } else if ([i] < data[i].text9) {
             explanationss9.innerHTML += `<h5>${data[i].text9}</h5>`;
        } else if ([i] < data[i].text10) {
             explanationss10.innerHTML += `<div>${data[i].text10}</div>`;
        } else if ([i] < data[i].text11) {
             explanationss11.innerHTML += `<h5>${data[i].text11}</h5>`;
        } else {
             explanationss12.innerHTML += `<div>${data[i].text12}</div>`;
        }
    
    };

}).catch((err) => {console.log('rejected:', err.message);
});