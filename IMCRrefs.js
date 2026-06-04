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
     } else if ([i] < data[i].refpt4){
        refs.innerHTML += `
                <li>${data[i].Ref}
                    <ul><li>${data[i].refpt}</li></ul>
                    <ul><li>${data[i].refpt2}</li></ul>
                    <ul><li>${data[i].refpt3}</li></ul>
                    <ul><li>${data[i].refpt4}</li></ul>
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