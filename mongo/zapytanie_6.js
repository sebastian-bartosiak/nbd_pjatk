printjson(db.people.insert({
    sex : "Male",
    first_name : "Sebastian",
    last_name : "Bartosiak",
    job : "Software Developer",
    email : "sebastian.bartosiak@gmail.com",
    location: {
        city : "Warsaw",
        address: {
            streetname : "Koszykowa",
            streetnumber : "1"
            },
        },
    description: "",
    height: "189",
    weight:"80",
    birth_date:"1900-01-01T00:00:00Z",
    nationality:"Poland",
    credit: [
        {
            type : "laser",
            number : "5586087121891000",
            currency : "PLN",
            balance : "100000000",
            },
        ]
    }))