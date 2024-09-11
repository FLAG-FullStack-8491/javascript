const school = {
    name: "My Awesome School",
    founded: 2010,
    students: [
        {
            name: "Bob",
            dateOfBirth: "1981-01-27",
            address: {
                street: "My street",
                postalCode: "2000-100",
                city: "Porto",
                countryCode: "PT",
                coords: {
                    lat: 3.498540958,
                    lon: -7.734674644
                }
            }
        },
        {
            name: "Max",
            dateOfBirth: "1991-01-27",
            address: {
                street: "My street",
                postalCode: "2000-100",
                city: "Lisboa",
                countryCode: "PT",
                coords: {
                    lat: 3.498540958,
                    lon: -7.734674644
                }
            }
        },
        {
            name: "Jane",
            dateOfBirth: "2001-01-27",
            address: {
                street: "My street",
                postalCode: "2000-100",
                city: "Braga",
                countryCode: "PT",
                coords: {
                    lat: 3.498540958,
                    lon: -7.734674644
                }
            }
        },
    ]

}; 

for (let i = 0; i < school.students.length; i++) {
    console.log(school.students[i].name);
}
