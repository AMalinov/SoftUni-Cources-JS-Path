function hotelRoom(input){
 
    let month = input[0];
    let nights = Number(input[1]);

    let apartment = 0;
    let studio = 0;

    switch (month) {
        case "May":
        case "October": 
                        studio = 50;
                        apartment = 65;
                        break;
        case "June":
        case "September":
                        studio = 75.20;
                        apartment = 68.70;         
                        break;
        case "July":
        case "August":  studio = 76;
                        apartment = 77;
                        break;
    }

    let totalApartment = 0;
    let totalStudio = 0;

    if(nights > 7 && (month === "May" || month === "October")){
        if(nights > 14){
            studio *= 0.70;
        }else{
            studio *= 0.95;
        }
    }else if(nights > 14 && (month === "June" || month === "September")){
        studio *= 0.80;
    }

    if(nights > 14){
        apartment *= 0.90;
    }

    totalApartment = apartment * nights;
    totalStudio = studio * nights;

    console.log(`Apartment: ${totalApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`);
}

hotelRoom(["May","15"]);
hotelRoom(["June","14"]);
