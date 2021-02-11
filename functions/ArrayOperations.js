let roles = [{
    "_id": "5ffee24594cb73242338d91d",
    "role_name": "USER",
},
{
    "_id": "5fffb3b933c25e113a7b46bd",
    "role_name": "ADMIN",
},
{
    "_id": "5fffb56fc9ad2611d55212eb",
    "role_name": "SUPER_ADMIN",
},
{
    "_id": "5fffb56fc9ad2611d55212ec",
    "role_name": "READONLY_USER",
}]

let res = roles.some(r => r.role_name === "ADMIfN");
console.log(res);