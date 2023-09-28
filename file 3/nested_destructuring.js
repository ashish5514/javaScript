 // nested destructuring

 const users = [
    {userid:1,firstname:'ashish',gender:'male',},
    {userid:2,firstname:'tarun',gender:'tranceGender',},
    {userid:3,firstname:'khushvant',gender:'male',},
  ]

   const [{firstname: userfirstname, userid}, {gender}]= users;
   console.log(userfirstname);
   console.log(userid);
   console.log(gender);
