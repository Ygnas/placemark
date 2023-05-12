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
    swimming: {
      title: "Swiming",
      userid: "->users.homer"
    },
  },
  placemark: {
    _model : "Placemark",
    placemark_1 : {
      name: "River Lee by The Lee Fields",
      description: "The River Lee in Ireland is a well-known river for fishing enthusiasts. Located in the south of Ireland, the river flows through the city of Cork before entering the sea at Cork Harbour. The river is home to both Atlantic salmon and brown trout, with the salmon season running from February to September, and the trout season running from March to September. The River Lee also offers a variety of fishing methods, including fly fishing, spinning, and worm fishing.",
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
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683843645/tony-payne-fishing-adventures_zg1k9r.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683843646/killarney_lakes_fishing_ri0nwm.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683843645/Purple-Mountain-over-Muckross-Lake_Web-Size_aa3x0v.jpg",
      ],
      categoryid: "->category.fishing"
    },
    placemark_3 : {
      name: "Kells Bay Rocks Fishing Spot",
      description: "There is good sea fishing from the rocks and the beach at Kells. Boat outings including Deep Sea can be arranged from Portmagee, Valentia or Ballinskelligs. During the appropriate seasons there is excellent salmon, trout and sea-trout fishing on local lakes and rivers.",
      latitude: 52.02794289951099,
      longitude: -10.100598685597022,
      img: [
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683841085/kells-bay-1_snhhpg.webp",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683841146/golf-near-kellsbay_bvv5xr.jpg",
      ],
      categoryid: "->category.fishing"
    },
    placemark_4 : {
      name: "Crushoa pier",
      description: "Situated half way between Kinvara and Parkmor, Crushoa pier is protected by the encircling arms of Coisin and Mulroneys Islands. This pier was used primarily for landing, drying and loading seaweed and for harbouring the wooden currachs used for oyster dredging in the local oyster bed. There were many ghosts and hauntings associated with Crushoa.   These stories were told by locals to deter people visiting at night where valuable oysters were guarded from a dug out on the beach (still visible, but blocked up).",
      latitude: 53.15355240089706,
      longitude: -8.952862582568276,
      img: [
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683841225/Crushoa-pier_vnfhw5.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683841282/R_u3gpaf.jpg",
      ],
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
      description: "Glenstal Woods is a woodland located at the western end of the Slieve Felim Mountains in County Limerick, Ireland.01 The main species in the woodlands are Norway and Sitka Spruce, with pockets of mixed woodland dispersed throughout. The forested areas gradually give way to open ground on the higher elevations.",
      latitude: 52.66181059468688,
      longitude: -8.361273139160753,
      img: [
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683841870/shutterstock_1611840709_juvkdq.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683842059/R_1_lt4b4f.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683842112/Forest-Glen-Woods_jv4uxj.webp",
      ],
      categoryid: "->category.hiking"
    },
    placemark_7 : {
      name: "Doolin Cliff Walks",
      description: "Doolin Cliff Walks are a popular tourist attraction located on the west coast of Ireland. The walks offer breathtaking views of the Atlantic Ocean and the Cliffs of Moher, with options for both guided and self-guided tours.",
      latitude: 52.998361973837014,
      longitude: -9.387917099476365,
      img: [
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683842251/Doolin-Cliff-Walk_gjuwtn.jpg",
      ],
      categoryid: "->category.hiking"
    },
    placemark_8 : {
      name: "Riverhollow Wild Camping",
      description: "Riverhollow Wild Camping is a camping site located in the countryside of County Cork, Ireland. The site offers a unique and immersive experience for visitors, allowing them to camp in a natural and unspoiled environment. Visitors can choose from a range of camping options, including tent camping and glamping. The Riverhollow Wild Camping site also offers activities such as hiking, fishing, and kayaking, providing plenty of opportunities to explore the surrounding countryside.",
      latitude: 52.433130554349034,
      longitude: -6.923189313285472,
      img: [
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683842502/o_1fah1ohmi1m0ajk41fk655vrmk13_xq25kr.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683842569/DSC02115-800x533_s4wxvh.jpg",
      ],
      categoryid: "->category.camping"
    },
    placemark_9 : {
      name: "Splashworld",
      description: "Splashworld is a popular water park located in Tramore, County Waterford, Ireland. The park features a variety of water slides, including the thrilling Super Bowl and the Space Bowl. In addition to water slides, Splashworld also offers a wave pool, a lazy river, and a children's play area, making it a fun destination for visitors of all ages.",
      latitude: 52.16175780545541,
      longitude: -7.1472553950343185,
      img: [
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683843351/218663991_8b73954a1b_b_donx1v.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683843382/splashworld_dgastp.jpg",
      ],
      categoryid: "->category.swimming"
    },
    placemark_10 : {
      name: "Cheekpoint Strand",
      description: "Cheekpoint Strand is a picturesque beach located on the estuary of the River Suir in County Waterford, Ireland. The beach offers stunning views of the river and is a popular spot for walking, swimming, and fishing.",
      latitude: 52.2708710426971,
      longitude:  -6.989663223569438,
      img: [
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683843261/1-cheekpoint-harbour1_agzh0k.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683843305/Kev-Somers-Ballyhealy-Wexford-1_bw1ufi.jpg",
      ],
      
      categoryid: "->category.swimming"
    },
    placemark_11 : {
      name: "Cliffs of Moher Walking Trail",
      description: "The Cliffs of Moher Walking Trail is a popular hiking route along the western coast of Ireland. The trail runs for approximately 20 kilometers and offers spectacular views of the Atlantic Ocean and the iconic Cliffs of Moher. Visitors can choose to hike the entire trail or shorter sections, with options for both guided and self-guided tours.",
      latitude: 53.009564376715836,
      longitude: -9.389989794583638,
      img: [
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683842736/Doolin-Cliff-Walk-21_xwbbr1.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683842770/Cliffs-of-Moher5_recise.webp",
      ],
      categoryid: "->category.hiking"
    },
    placemark_12 : {
      name: "Shannon Banks Nature Trail Walk (Green Route)",
      description: "The Shannon Banks Nature Trail Walk is a peaceful walking trail located in Limerick, Ireland. The green route offers a scenic stroll through woodlands and along the banks of the River Shannon, providing a relaxing escape from the hustle and bustle of the city.",
      latitude: 53.412382269689346,
      longitude: -7.941808160026894,
      img: [
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683842826/beautiful-scenery_iogrfk.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683842885/header-cavan-way-cavan_d0ewdp.jpg",
      ],
      categoryid: "->category.hiking"
    },
    placemark_13 : {
      name: "Bog of Frogs Loop",
      description: "The Bog of Frogs Loop is a scenic hiking trail located in the Wicklow Mountains of Ireland. The loop is approximately 12 kilometers long and takes visitors through a variety of landscapes, including forests, bogs, and open mountain terrain. The trail is well-marked and offers stunning views of the surrounding mountains and valleys.",
      latitude: 53.38865379975943,
      longitude: -6.074491551965968,
      img: [
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683842929/bog-of-frogs-hike-cliffs_ccjcq4.jpg",
        "https://res.cloudinary.com/dnr02gmmq/image/upload/v1683843023/howth-walk_ylhy4e.jpg",
      ],
      categoryid: "->category.hiking"
    }
  },
};
