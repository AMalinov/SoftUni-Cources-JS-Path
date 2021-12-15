function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    index++;

    let totalTicket = 0;
    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;

    while (command !== "Finish") {
        let name = command;
        let freeSeats = Number(input[index]);
        index++;
        
        let ticketType = input[index];
        index++;
        let counterTickets = 0;
        while (ticketType !== "End") {
            counterTickets++;

            switch (ticketType) {
                case "student": studentTicket++; break;
                case "standard": standardTicket++; break;
                case "kid": kidTicket++; break;
            }

            if (counterTickets >= freeSeats) {
                break;
            }

            ticketType = input[index];
            index++;

        }
        totalTicket += counterTickets;
        let result = counterTickets / freeSeats * 100;

        console.log(`${name} - ${result.toFixed(2)}% full.`);
        command = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalTicket}`);
    let totalStudent = studentTicket / totalTicket * 100;
    console.log(`${totalStudent.toFixed(2)}% student tickets.`);

    let totalStandard = standardTicket / totalTicket * 100;
    console.log(`${totalStandard.toFixed(2)}% standard tickets.`);

    let totalKid = kidTicket / totalTicket * 100;
    console.log(`${totalKid.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);