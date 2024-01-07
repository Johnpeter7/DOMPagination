document.addEventListener('DOMContentLoaded', function () {
    var totalPages = 5; 
    var container = document.getElementById('pagination-container');

   
    for (let i = 1; i <= totalPages; i++) {
        var button = document.createElement('button');
        button.innerText = i;
        button.addEventListener('click', function () {
            
            console.log('Button ' + i + ' clicked');
        });
        container.appendChild(button);
    }
});
