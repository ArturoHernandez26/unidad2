const fetchName = () => {
    const NameInput = document.getElementById("Name");
    let Name = NameInput.value.toLowerCase();
    const url = `https://digimon-api.vercel.app/api/digimon/`;
    const imagen =`https://digimon.shadowsmith.com/img/${Name}.jpg`;
    
    fetch(url)
        .then(Name =>{
            let ImgSrc = imagen;
            document.getElementById('digitama').src = ImgSrc;
            
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            alert('Error fetching digimon data. Please try again.');
        });
}