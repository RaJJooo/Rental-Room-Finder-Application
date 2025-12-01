import add_icon from './add_icon.png';
import close_icon from './close_icon.png';
import facebook_logo from './facebook_logo.jpg';
import gmail_logo from './gmail_logo.webp';
import instagram_logo from './instagram_logo.png';
import location_icon from './location_icon.webp';
import logo from './logo.png';
import react_logo from './react.svg';
import search_icon from './search_icon.png';
import title_logo from './title_logo.svg';
import main_car from './main_car.jpg';
import downloadappinfoimg from './downloadappinfoimg.webp'
import playstore from './playstore.svg'
import appstore from './appstore.svg'
import pg_boys from './pg_boys.avif'
import pg_girls from './pg_girls.avif'
import food from './food.webp'
import laundry from './laundry.jpg'
import ac from './ac.webp'
import wifi from './wifi.jpg'
import banner_person from './banner_person.jpg'
import double_room from './double_room.webp'
import private_room from './private_room.jpg'
import triple_room from './triple_room.png'
import home_icon from './home_icon.jpg'
import aboutImg from './aboutImg.jpg'
import aboutImg1 from './aboutImg1.webp'
import aboutImg2 from './aboutImg2.jpg'
import arrow_icon from './arrow_icon.svg'
import room1_1 from './room1_1.jpg'
import room1_3 from './room1_3.jpg'
import room1_4 from './room1_4.jpeg'
import room1_5 from './room1_5.jpg'
import room1_6 from './room1_6.jpeg'
import room1_7 from './room1_7.jpg'

import room2_1 from './room2_1.jpg'
import room2_3 from './room2_3.jpg'
import room2_4 from './room2_4.jpg'
import room2_5 from './room2_5.jpg'
import room2_2 from './room2_2.jpg'

import room3_1 from './room3_1.jpg'
import room3_3 from './room3_3.jpg'
import room3_4 from './room3_4.jpg'
import room3_5 from './room3_5.jpg'
import room3_2 from './room3_2.jpg'



export const citylist=['Haldia', 'Tamluk', 'Panskura', 'Kolaghat', 'Mahisadal'];
export const assets={
  add_icon,
  close_icon,
  facebook_logo,
  gmail_logo,
  instagram_logo,
  location_icon,
  logo,
  react_logo,
  search_icon,
  title_logo,
  main_car,
  downloadappinfoimg,
  playstore,
  appstore,
  pg_boys,
  pg_girls,
  food,
  laundry,
  ac,
  wifi,
  banner_person,
  double_room,
  private_room,
  triple_room,
  home_icon,
  aboutImg,
  aboutImg1,
  aboutImg2,
  arrow_icon,

};

export const menulinks=[
  { name:"Home", path: "/" },
  { name:"Rooms", path: "/rooms" },
  { name:"My Bookings", path: "/my-bookings" },
]

// export const ownermenulinks= [
//   { name:"Dashboard", path: "/owner", icon: dashboardicon, coloredicon: dashboardiconcolored },
//   { name:"Add Item", path: "/owner/add-item", icon: addicon, coloredicon: addiconcolored },
//   { name:"Manage Item", path: "/owner/manage-item", icon: itemicon, coloredicon: itemiconcolored },
//   { name:"Manage Bookings", path: "/owner/manage-bookings", icon: listicon, coloredicon:listiconcolored },
// ]

export const dummyuserdata ={
  "_id": "sdjkfhdsjkbdskjhj286278627",
  "name": "DummyName",
  "email": "admin@dummy.com",
  "role": "owner",
  // "image": user_profile,
}

export const dummyroomdata = [
  {
    _id: "room001",
    owner: "DummyName",
    title: "Girls PG/Paying Guest in Kshudiram Nagar, Haldia",
    location: "Kshudiram Nagar, Haldia, West Bengal",
    price: 2500,
    images: [room1_3,room1_1, room1_4, room1_5, room1_6, room1_7], // you can replace with actual room image later
    rating: 4.5,
    available: true,
    amenities: ["Housekeeping", "24x7 Water"],
    Foods: false,
    property_type: "Flat",
    Balcony: true,
    Contact: 9748236245,
    Furnished: ["1 Bed", "1 Fan", "No AC", "No Study Table", "No Purifier"],
    AC: false,
    type: "Single Room",
    Rules: ["Last entry time is 10:30pm","No vistors","Only for girls","Pets, Smoking, Alcohol all of these are prohibited"],
  },
  {
  _id: "room002",
  owner: "Sanjana PG Homes",
  title: "Girls PG Near Haldia Township",
  location: "Nehru Avenue, Haldia, West Bengal",
  price: 3200,
  images: [room2_1, room2_2, room2_3, room2_4, room2_5],
  rating: 4.2,
  available: true,
  amenities: ["24x7 Water Supply", "CCTV Security"],
  Foods: true,
  property_type: "Hostel Building",
  Balcony: false,
  Contact: 8695234789,
  Furnished: ["1 Bed", "1 Fan", "1 Table", "Light", "Curtains"],
  AC: false,
  type: "Single Sharing Room",
  Rules: [
    "Entry allowed till 10:00pm",
    "No male visitors allowed",
    "Keep rooms clean",
    "Loud music not allowed"
  ],
},
{
  _id: "room003",
  owner: "Aditi Stayhouse",
  title: "Fully Furnished Girls Room in Durgachak",
  location: "Durgachak Colony, Haldia, West Bengal",
  price: 4000,
  images: [room3_1, room3_2, room3_3, room3_4, room3_5],
  rating: 4.8,
  available: false,
  amenities: ["Housekeeping", "Electricity Backup", "Filtered Water"],
  Foods: true,
  property_type: "Independent Room",
  Balcony: true,
  Contact: 9123457680,
  Furnished: ["1 Bed", "1 Fan", "Study Table", "Chair", "Purifier"],
  AC: true,
  type: "Private Room",
  Rules: [
    "Entry time is 10:00pm",
    "No drinking/smoking",
    "Maintain cleanliness",
    "Guests allowed only on weekends (Girls only)"
  ],
},
];


export const dummymybookingsdata = [
  {
    _id: "booking001",
    userId: "sdjkfhdsjkbdskjhj286278627",
    roomId: "room001",
    roomTitle: "Cozy Single Room near College",
    location: "Haldia",
    price: 2500,
    startingDate: "2025-11-10",
    endingDate: "2026-01-10",
    status: "Confirmed", // Confirmed | Pending | Cancelled | Completed
    image: logo,
    owner: "DummyName",
  },
  {
    _id: "booking002",
    userId: "sdjkfhdsjkbdskjhj286278627",
    roomId: "room002",
    roomTitle: "Furnished Double Room in City Center",
    location: "Tamluk",
    price: 4000,
    startingDate: "2025-10-01",
    endingDate: "2025-12-01",
    status: "Completed",
    image: logo,
    owner: "DummyName",
  },
  {
    _id: "booking003",
    userId: "sdjkfhdsjkbdskjhj286278627",
    roomId: "room003",
    roomTitle: "Budget Room with Shared Kitchen",
    location: "Kolaghat",
    price: 1800,
    startingDate: "2025-11-15",
    endingDate: "2026-02-15",
    status: "Pending",
    image: logo,
    owner: "DummyName",
  },
];
