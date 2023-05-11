export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "$2a$10$HnapEWWKQQ0.0Ft33nXxtuJ0fsmd9ywYswEzT4C.6Ul5y6cOU.UEa",
      admin: true
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "$2a$10$D3TWK8MSAh63Lhk4gIFSJ.ekM368J88qJRUYSbuBfzffex6B0dFwK",
      admin: false
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "$2a$10$uqnPlgyVjBEOtcgMhn/WRO3FwW4T9gX36tTB4RqpGeB/LkCR3YQuO",
      admin: false
    }
  },
  category: {
    _model: "Category",
    fishing: {
      title: "Fishing",
      userid: "->users.homer"
    },
    hiking: {
      title: "Hiking",
      userid: "->users.marge"
    },
    camping: {
      title: "Camping",
      userid: "->users.bart"
    },
    snowboarding: {
      title: "Snowboarding",
      userid: "->users.homer"
    },
  },
  placemark: {
    _model : "Placemark",
    placemark_1 : {
      name: "River Lee by The Lee Fields",
      description: "Best lake in the world",
      latitude: 51.89417519799009,
      longitude: -8.516575998303795,
      img: [
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683815735/2018-05-13-01914-m_jgr65c.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683815833/the-river-lee-3_kxv9kd.webp",
      ],
      categoryid: "->category.fishing"
    },
    placemark_2 : {
      name: "Tony Payne Fishing Adventures",
      description: "Relaxing Island fishing on one of our famous islands on the Lakes of Killarney, Our experienced guide Tony Payne will make your adventure the best it can be. Tony is a Killarney man born and raised and was fishing since the age of five. His vast knowledge of all the Lakes and Rivers of Killarney, Kerry and Munster and access to secluded and secret fishing locations makes his tours an exclusive & popular attraction. Perfect for all boat and fishing experiences on your holiday in beautiful Kerry.",
      latitude: 52.038040032117905,
      longitude: -9.500613252231119,
      img: [
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683750385/h1b2ylidatdmi1ggydcg.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683750395/fau1jjdwcdba8brsjwtn.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683750379/ut1mbhr1ggidjjvtvb0u.jpg",
      ],
      categoryid: "->category.fishing"
    },
    placemark_3 : {
      name: "Kells Bay Rocks Fishing Spot",
      description: "There is good sea fishing from the rocks and the beach at Kells. Boat outings including Deep Sea can be arranged from Portmagee, Valentia or Ballinskelligs. During the appropriate seasons there is excellent salmon, trout and sea-trout fishing on local lakes and rivers.",
      latitude: 52.02794289951099,
      longitude: -10.100598685597022,
      categoryid: "->category.fishing"
    },
    placemark_4 : {
      name: "Crushoa pier",
      description: "Situated half way between Kinvara and Parkmor, Crushoa pier is protected by the encircling arms of Coisin and Mulroneys Islands. This pier was used primarily for landing, drying and loading seaweed and for harbouring the wooden currachs used for oyster dredging in the local oyster bed. There were many ghosts and hauntings associated with Crushoa.   These stories were told by locals to deter people visiting at night where valuable oysters were guarded from a dug out on the beach (still visible, but blocked up).",
      latitude: 53.15355240089706,
      longitude: -8.952862582568276,
      categoryid: "->category.fishing"
    },
    placemark_5 : {
      name: "Gougane Barra",
      description: "Gougane Barra is a scenic valley and heritage site in the Shehy Mountains of County Cork, Ireland. It is near Ballingeary in the Muskerry Gaeltacht. Gougane Barra is at the source of the River Lee and includes a lake with an oratory built on a small island. It also includes a forest park.",
      latitude: 51.83940108726646,
      longitude: -9.314792163382908,
      img: [
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683815427/85g43ztpm0a31_wefdww.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683815506/2814367255_36a87f6fa9_b_ls9zrc.jpg",
      ],
      categoryid: "->category.hiking"
    },
    placemark_6 : {
      name: "Glenstal Woods",
      description: "1",
      latitude: 52.66181059468688,
      longitude: -8.361273139160753,
      categoryid: "->category.hiking"
    },
    placemark_7 : {
      name: "Doolin Cliff Walks",
      description: "1",
      latitude: 52.998361973837014,
      longitude: -9.387917099476365,
      categoryid: "->category.hiking"
    },
    placemark_8 : {
      name: "Best valley",
      description: "Best valley in the world",
      latitude: 10,
      longitude: 10,
      categoryid: "->category.camping"
    },
    placemark_9 : {
      name: "Best ski resort",
      description: "Best ski resort in the world",
      latitude: 10,
      longitude: 10,
      categoryid: "->category.snowboarding"
    },
    placemark_10 : {
      name: "Best snow park",
      description: "Best snow park in the world",
      latitude: 10,
      longitude: 10,
      categoryid: "->category.snowboarding"
    },
    placemark_11 : {
      name: "Cliffs of Moher Walking Trail",
      description: "Best snow park in the world",
      latitude: 53.009564376715836,
      longitude: -9.389989794583638,
      categoryid: "->category.hiking"
    },
    placemark_12 : {
      name: "Shannon Banks Nature Trail Walk (Green Route)",
      description: "Best snow park in the world",
      latitude: 53.412382269689346,
      longitude: -7.941808160026894,
      categoryid: "->category.hiking"
    },
    placemark_13 : {
      name: "Bog of Frogs Loop",
      description: "Best snow park in the world",
      latitude: 53.38865379975943,
      longitude: -6.074491551965968,
      categoryid: "->category.hiking"
    }
  },
};
