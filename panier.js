let plus = document.getElementsByClassName("btn btn-primary");
let moins = document.getElementsByClassName("btn btn-secondary");
let del = document.getElementsByClassName("btn btn-danger");
let quantity = document.getElementsByClassName("quantity");
let prix= document.getElementsByClassName("price");
let cout= document.getElementsByClassName("Totalprice");
let like=document.getElementsByClassName("like");
let values = [1, 1, 1]; 
;
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", () => {
        values[i]++;
        let val = values[i] < 10 ? "0" + values[i] : values[i];
        quantity[i].innerHTML = val;
        let Totalprice= (parseFloat(prix[i].innerHTML)*values[i]).toFixed(2);
        let total="£"+ Totalprice.toString();
        cout[i].innerHTML=total;
        console.log("Colonne", i + 1, ":", val);
        console.log("Colonne", i + 1, ":", total);
    });

    moins[i].addEventListener("click", () => {
        if (values[i] > 1) {
            values[i]--;
            let val = values[i] < 10 ? "0" + values[i] : values[i];
            quantity[i].innerHTML = val;
            console.log("Colonne", i + 1, ":", val);
            let Totalprice= (parseFloat(prix[i].innerHTML)*values[i]).toFixed(2);
            let total="£"+ Totalprice.toString();
            cout[i].innerHTML=total;
            console.log("Colonne", i + 1, ":", val);
            console.log("Colonne", i + 1, ":", total);
        }
    });

    del[i].addEventListener("click", () => {
        values[i] = 1;
        quantity[i].innerHTML = "01";
        let Totalprice= prix[i].innerHTML;
        let total="£"+ Totalprice.toString();
        cout[i].innerHTML=total;
        console.log("Colonne", i + 1, ":", val);
        console.log("Colonne", i + 1, ":", total);
    });

    like[i].addEventListener("click", function(){ 
        if(like[i].style.color==="red"){
            like[i].style.color="grey";
        }else{
            like[i].style.color="red";
        }
    });
}
