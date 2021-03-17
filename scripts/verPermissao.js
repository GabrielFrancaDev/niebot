const config = require('../config.json')
const permissions = config.permissions;

module.exports = (member, command) => {
    let verification = !permissions[command]; // se não existir comando na lista de permissões
    if(!verification){
        const perms = permissions[command];
        console.log(perms)
        perms.forEach(p => {
            switch(p.type){
                case "role":
                    if (member.roles.cache.has(p.value)) verification = true;
                break;
                case "permission":
                    if (member.permissions.has(p.value)) verification = true;
                break;
            }
        });
    }
    return verification;
}