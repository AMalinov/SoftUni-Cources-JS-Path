function gladiatorInventory(list) {

    let inventory = list.shift().split(' ');

    //let actions = list.shift().split(' ');

    for (let i = 0; i < list.length; i++) {
        
        let [command, equipment] = list[i].split(" ");

        if (command === 'Buy') {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
                //console.log(inventory);
            }
        } else if (command === 'Trash') {
            let index = inventory.indexOf(equipment);
            let test = inventory.includes(equipment);
            if (test) {
                inventory.splice(index, 1);
                //console.log(inventory);
            }
        } else if (command === 'Repair') {
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
                inventory.push(equipment);
            }
        } else if (command === 'Upgrade') {
            let [item, upgrade] = equipment.split("-");
            let toAdd = `${item}:${upgrade}`;
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index + 1, 0, toAdd);
                //console.log(inventory);
            }
        }

        //actions = list.shift().split(' ');
        //console.log(inventory.join(' '));
        
    }
    
    console.log(inventory.join(' '));

}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);

// gladiatorInventory(['SWORD Shield Spear',
// 'Trash Bow',
// 'Repair Shield',
// 'Upgrade Helmet-V']);