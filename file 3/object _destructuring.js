  // object  destructuring

  const band = {
    bandname: "lad zappling",
    song: "gujrati",
    year:"1999",
    age: "22",
  }

  let{bandname,song,...restpros}=band;
  console.log(bandname);
  console.log(restpros);