const knowledge = async () => {

    const response = await fetch('IMCR_JSON/IMCRrefs.json'); 
    const data = await response.json();
     
    if(response.status != 200){
        throw new Error('data denied');
    }

    return data;

};

knowledge().then((data) => {

    const refs = document.querySelector('.essentials');
    
    for(let i=0; i < data.length; i++){
     if ([i] < data[i].refpt8) {
        refs.innerHTML += `
                <li>${data[i].Ref}
                    <ul><li>${data[i].refpt}</li></ul>
                    <ul><li>${data[i].refpt2}</li></ul>
                    <ul><li>${data[i].refpt3}</li></ul>
                    <ul><li>${data[i].refpt4}</li></ul>
                    <ul><li>${data[i].refpt5}</li></ul>
                    <ul><li>${data[i].refpt6}</li></ul>
                    <ul><li>${data[i].refpt7}</li></ul>
                    <ul><li>${data[i].refpt8}</li></ul>
                </li>
            `
     } else if ([i] < data[i].ref1pt2){
         refs.innerHTML += `
                <li>${data[i].Ref}
                    <ul><li>${data[i].refpt}</li></ul>
                    <ul><li>${data[i].refpt2}</li></ul>
                    <ul><li>${data[i].refpt3}</li></ul>
                    <ul><ul>${data[i].ref1pt2}</ul></ul>
                    <ul><li>${data[i].refpt4}</li></ul>
                    <ul><li>${data[i].refpt5}</li></ul>
                </li>
            `
     } else if ([i] < data[i].refpt5) {
         refs.innerHTML += `
                <li>${data[i].Ref}
                    <ul><li>${data[i].refpt}</li></ul>
                    <ul><li>${data[i].refpt2}</li></ul>
                    <ul><li>${data[i].refpt3}</li></ul>
                    <ul><li>${data[i].refpt4}</li></ul>
                    <ul><li>${data[i].refpt5}</li></ul>
                </li>
            `      
     } else if ([i] < data[i].ref4pt2){
         refs.innerHTML += `
                <li>${data[i].Ref}
                    <ul><li>${data[i].refpt}</li></ul>
                    <ul><li>${data[i].refpt2}</li></ul>
                    <ul><li>${data[i].refpt3}</li></ul>
                    <ul><ul><li>${data[i].ref3pt1}</li></ul></ul>
                    <ul><ul><li>${data[i].ref3pt2}</li></ul></ul>
                    <ul><li>${data[i].refpt4}</li></ul>
                    <ul><ul><li>${data[i].ref4pt1}</li></ul></ul>
                    <ul><ul><li>${data[i].ref4pt2}</li></ul></ul>
                </li>
            `         
     } else if ([i] < data[i].ref4pt1){
         refs.innerHTML += `
                <li>${data[i].Ref}
                    <ul><li>${data[i].refpt}</li></ul>
                    <ul><li>${data[i].refpt2}</li></ul>
                    <ul><li>${data[i].refpt3}</li></ul>
                    <ul><ul><li>${data[i].ref3pt1}</li></ul></ul>
                    <ul><li>${data[i].refpt4}</li></ul>
                    <ul><ul><li>${data[i].ref4pt1}</li></ul></ul>
                </li>
            `    
      } else if ([i] < data[i].ref3pt22){
         refs.innerHTML += `
                <li>${data[i].Ref}
                    <ul><li>${data[i].refpt}</li></ul>
                    <ul><li>${data[i].refpt2}</li></ul>
                    <ul><li>${data[i].refpt3}</li></ul>
                    <ul><ul><li>${data[i].ref3pt1}</li></ul></ul>
                    <ul><ul><li>${data[i].ref3pt2}</li></ul></ul>
                    <ul><ul><ul><li>${data[i].ref3pt21}</li></ul></ul></ul>
                    <ul><ul><ul><li>${data[i].ref3pt22}</li></ul></ul></ul>
                    <ul><li>${data[i].refpt4}</li></ul>
                </li>
            `
     } else if ([i] < data[i].refpt4){
        refs.innerHTML += `
                <li>${data[i].Ref}
                    <ul><li>${data[i].refpt}</li></ul>
                    <ul><li>${data[i].refpt2}</li></ul>
                    <ul><li>${data[i].refpt3}</li></ul>
                    <ul><li>${data[i].refpt4}</li></ul>
                </li>
            `
     } else if ([i] < data[i].ref2pt13){
            refs.innerHTML += `
                <li>${data[i].Ref}
                    <ul><li>${data[i].refpt}</li></ul>
                    <ul><ul><li>${data[i].ref1pt1}</li></ul></ul>
                    <ul><ul><ul><li>${data[i].ref1pt11}</li></ul></ul></ul>
                    <ul><ul><ul><li>${data[i].ref1pt12}</li></ul></ul></ul>
                    <ul><ul><ul><li>${data[i].ref1pt13}</li></ul></ul></ul>
                    <ul><li>${data[i].refpt2}</li></ul>
                    <ul><ul><li>${data[i].ref2pt1}</li></ul></ul>
                    <ul><ul><ul><li>${data[i].ref2pt11}</li></ul></ul></ul>
                    <ul><ul><ul><li>${data[i].ref2pt12}</li></ul></ul></ul>
                    <ul><ul><ul><li>${data[i].ref2pt13}</li></ul></ul></ul>
                    <ul><li>${data[i].refpt3}</li></ul>
                </li>
            `
     } else if ([i] < data[i].refpt3){
            refs.innerHTML += `
                <li>${data[i].Ref}
                    <ul><li>${data[i].refpt}</li></ul>
                    <ul><li>${data[i].refpt2}</li></ul>
                    <ul><li>${data[i].refpt3}</li></ul>
                </li>
            `
     } else if ([i] < data[i].ref2pt1){
         refs.innerHTML += `
                <li>${data[i].Ref}
                    <ul><li>${data[i].refpt}</li></ul>
                    <ul><ul><li>${data[i].ref1pt1}</li></ul></ul>
                    <ul><li>${data[i].refpt2}</li></ul>
                    <ul><ul><li>${data[i].ref2pt1}</li></ul></ul>
                </li>
            `
     } else if ([i] < data[i].refpt2){
            refs.innerHTML += `
                <li>${data[i].Ref}
                    <ul><li>${data[i].refpt}</li></ul>
                    <ul><li>${data[i].refpt2}</li></ul>
                </li>
            `
     } else if ([i] < data[i].refpt) {
            refs.innerHTML += `
            <li>${data[i].Ref}
                <ul><li>${data[i].refpt}</li></ul>
            </li>
        `
     } else {
        refs.innerHTML += `<li>${data[i].Ref}</li>`;
     };
    };

}).catch((err) => {console.log('rejected:', err.message);
});