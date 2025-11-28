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
  aboutImg2
};

export const menulinks=[
  { name:"Home", path: "/" },
  { name:"Rooms", path: "/cars" },
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
    title: "Cozy Single Room near College",
    location: "Haldia",
    price: 2500,
    image: logo, // you can replace with actual room image later
    type: "Single Room",
    amenities: ["Free WiFi", "Attached Bathroom", "24x7 Water", "Fan"],
    available: true,
    description: "A clean and affordable single room ideal for students and working professionals.",
    postedOn: "2025-11-01",
    rating: 4.5,
  },
  {
    _id: "room002",
    owner: "DummyName",
    title: "Furnished Double Room in City Center",
    location: "Tamluk",
    price: 4000,
    image: logo,
    type: "Double Room",
    amenities: ["AC", "TV", "Geyser", "Attached Balcony"],
    available: true,
    description: "Spacious and well-ventilated double room near market area.",
    postedOn: "2025-10-20",
    rating: 4.7,
  },
  {
    _id: "room003",
    owner: "DummyName",
    title: "Budget Room with Shared Kitchen",
    location: "Kolaghat",
    price: 1800,
    image: logo,
    type: "Shared Room",
    amenities: ["Shared Kitchen", "Common Bathroom", "WiFi", "Laundry Service"],
    available: false,
    description: "Low-cost room for students with basic facilities and shared amenities.",
    postedOn: "2025-09-15",
    rating: 4.2,
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
