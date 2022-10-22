var json = {
    consoles: [
        {ref:'NINTEDO SWITCH OLED',prix:4500,manettes:2,image:'images/img1.png'},
        {ref:'PLAYSTATION CONSOLE PS5',prix:8500,manettes:1,image:'images/img2.png'},
        {ref:'XBOX SERIES 512G',prix:4600,manettes:2,image:'images/img3.png'},
        {ref:'PLAYSTATION PS4 1TO PRO',prix:5300,manettes:1,image:'images/img4.png'}
    ]
};

x = new Boolean;
function validChamps() {
    option = document.getElementById('select').value;
    qte = document.getElementById('qte').value;
    if (option != "choisir une console" && qte >= 1 && qte <= 20) {
        x = true;
    }else{
        alert('choiser une console,la quantite min : 1 et la quantite max : 20');
        x = false;
    };
};

function remplirConsole(){
    if (x == true){   
        option = document.getElementById('select').value;
        ref = "" ; prix = 0 ; manettes = 0 ; image = "";
        for (i=1; i<5; i++) {
            if (option == json['consoles'][i-1]['ref']){
                ref = json['consoles'][i-1]['ref'];
                prix = json['consoles'][i-1]['prix'];
                manettes = json['consoles'][i-1]['manettes'];
                image = json['consoles'][i-1]['image'];
            };
        };
        T = [ref,prix,manettes,image];
        return T;
    };
};

numcnsl = 1;
function addConsoleToCart(){
    if (x == true){
        cnsl = remplirConsole();
        qte = document.getElementById('qte').value;
        tbody = document.querySelector('tbody');
        tr = document.createElement('tr');
        tr.id = 'tr'+numcnsl;
        
        td = document.createElement('td');
        td.textContent = cnsl[0];
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.textContent = qte;
        tr.appendChild(td);
        
        td = document.createElement('td');
        img = document.createElement('img');
        img.src = cnsl[3];
        td.appendChild(img);
        tr.appendChild(td);
        
        td = document.createElement('td');
        button = document.createElement('input');
        button.type = 'button';
        button.className = 'btn btn-danger';
        button.value = 'Supprimer';
        button.id ='btn'+numcnsl;
        button.setAttribute("onclick","deleteConsoleFromCart()");
        button.onclick = function() {
            for (i=1; i<=numcnsl; i++) {
                if (this.id == "btn"+i){
                    tbody.removeChild(document.getElementById('tr'+i));
                };
            };
            CalculerPrixHT();
            CalculerPrixTTC();
        };
        td.appendChild(button);
        tr.appendChild(td);
        tbody.appendChild(tr);
        numcnsl++;
    };
};

function deleteConsoleFromCart() {
    /*if (this.id == "btn1" ){
        tbody.removeChild(document.getElementById('tr1'));
    }else if (this.id == "btn2"){
        tbody.removeChild(document.getElementById('tr2'));
    }else if (this.id == "btn3"){
        tbody.removeChild(document.getElementById('tr3'));
    };*/
};

function CalculerPrixHT(){
    if (x == true){
        totale = 0;
        tbody = document.querySelector('tbody');
        tr = tbody.querySelectorAll('tr');
        for (i = 0; i < tr.length; i++){
            td = tr[i].querySelectorAll('td');
            if (td[0].textContent == "NINTEDO SWITCH OLED"){
                totale += 4500 * td[1].textContent;
            }else if (td[0].textContent == "PLAYSTATION CONSOLE PS5"){
                totale += 8500 * td[1].textContent;
            }else if (td[0].textContent == "XBOX SERIES 512G"){
                totale += 4600 * td[1].textContent;
            }else if (td[0].textContent == "PLAYSTATION PS4 1TO PRO"){
                totale += 5300 * td[1].textContent;
            };
        };
        HT = document.getElementById('HT');
        HT.textContent = totale + "DHS";
    };
};

function CalculerPrixTTC(){
    if (x == true){
        totale = 0;
        tbody = document.querySelector('tbody');
        tr = tbody.querySelectorAll('tr');
        for (i = 0; i < tr.length; i++){
            td = tr[i].querySelectorAll('td');
            if (td[0].textContent == "NINTEDO SWITCH OLED"){
                totale += 4500 * td[1].textContent;
            }else if (td[0].textContent == "PLAYSTATION CONSOLE PS5"){
                totale += 8500 * td[1].textContent;
            }else if (td[0].textContent == "XBOX SERIES 512G"){
                totale += 4600 * td[1].textContent;
            }else if (td[0].textContent == "PLAYSTATION PS4 1TO PRO"){
                totale += 5300 * td[1].textContent;
            };
        };
        totale = totale + totale*0.2;
        TTC = document.getElementById('TTC');
        TTC.textContent = totale + "DHS";
    };
};

var jsonR = {
    consoles:[]
}
/*
function JsonSerializer(){
    if (x == true){
        tbody = document.querySelector('tbody');
        tr = tbody.querySelectorAll('tr');
        for (i = 0; i < tr.length; i++){
            td = tr[i].querySelectorAll('td');
            dict = {"code":td[i].textContent,"qte":td[i].textContent}
            jsonR['consoles'].push(dict)
        };
        console.log(jsonR)
    };
};
*/