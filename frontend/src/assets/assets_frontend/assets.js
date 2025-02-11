import rent_room_img from './header.jpg'
import header_img from './onekeyin.jpg'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.jpg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import house1 from './house1.jpg'
import house2 from './house2.jpg'
import house3 from './house3.jpg'
import house4 from './house1.jpg'
import house5 from './house2.jpg'
import house6 from './house3.jpg'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    rent_room_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'All Bills Included',
        image: General_physician
    },
    {
        speciality: 'Student-Friendly',
        image: Gynecologist
    },
    {
        speciality: 'Budget-Friendly',
        image: Dermatologist
    },
    {
        speciality: 'Family-Friendly',
        image: Pediatricians
    },
    {
        speciality: 'Fully-Furnished',
        image: Neurologist
    },
    {
        speciality: 'Short-Term-Rentals',
        image: Gastroenterologist
    },
]

export const houses = [
    {
        _id: 'house1',
        name: 'Modern Apartment in Durban',
        image: house1,
        speciality: 'All Bills Included',
        price: 5000,
        bedrooms: 2,
        bathrooms: 1,
        size: '65 sqm',
        about: 'A stylish and modern apartment located in the heart of Durban. Rent includes electricity, water, and WiFi.',
        address: {
            line1: '123 Florida Road',
            line2: 'Durban, South Africa'
        }
    },
    {
        _id: 'house2',
        name: 'Student-Friendly Loft',
        image: house2,
        speciality: 'Student-Friendly',
        price: 3000,
        bedrooms: 1,
        bathrooms: 1,
        size: '40 sqm',
        about: 'Perfect for students, this loft is within walking distance of major universities and comes with free WiFi.',
        address: {
            line1: '45 Steve Biko Road',
            line2: 'Durban, South Africa'
        }
    },
    {
        _id: 'house3',
        name: 'Affordable Cottage',
        image: house3,
        speciality: 'Budget-Friendly',
        price: 2500,
        bedrooms: 1,
        bathrooms: 1,
        size: '35 sqm',
        about: 'A cozy and affordable cottage in a quiet neighborhood, ideal for singles or couples.',
        address: {
            line1: '18 Morningside Avenue',
            line2: 'Durban, South Africa'
        }
    },
    {
        _id: 'house4',
        name: 'Spacious Family Home',
        image: house4,
        speciality: 'Family-Friendly',
        price: 7500,
        bedrooms: 3,
        bathrooms: 2,
        size: '120 sqm',
        about: 'A large home with a big yard, perfect for families looking for a comfortable living space.',
        address: {
            line1: '67 Glenwood Drive',
            line2: 'Durban, South Africa'
        }
    },
    {
        _id: 'house5',
        name: 'Fully Furnished Apartment',
        image: house5,
        speciality: 'Fully-Furnished',
        price: 6000,
        bedrooms: 2,
        bathrooms: 1,
        size: '70 sqm',
        about: 'A move-in ready apartment with modern furniture, appliances, and all essentials included.',
        address: {
            line1: '88 Musgrave Road',
            line2: 'Durban, South Africa'
        }
    },
    {
        _id: 'house6',
        name: 'Short-Term Rental Studio',
        image: house6,
        speciality: 'Short-Term Rentals',
        price: '350 per night',
        bedrooms: 1,
        bathrooms: 1,
        size: '30 sqm',
        about: 'A convenient and fully furnished studio for short-term stays, ideal for travelers and professionals.',
        address: {
            line1: '22 North Beach',
            line2: 'Durban, South Africa'
        }
    },
    {
        _id: 'house6',
        name: 'Short-Term Rental Studio',
        image: house6,
        speciality: 'Short-Term Rentals',
        price: "350 per night",
        bedrooms: 1,
        bathrooms: 1,
        size: '30 sqm',
        about: 'A convenient and fully furnished studio for short-term stays, ideal for travelers and professionals.',
        address: {
            line1: '22 North Beach',
            line2: 'Durban, South Africa'
        }
    },
    {
        _id: 'house6',
        name: 'Short-Term Rental Studio',
        image: house6,
        speciality: 'Short-Term Rentals',
        price: "350 per night",
        bedrooms: 1,
        bathrooms: 1,
        size: '30 sqm',
        about: 'A convenient and fully furnished studio for short-term stays, ideal for travelers and professionals.',
        address: {
            line1: '22 North Beach',
            line2: 'Durban, South Africa'
        }
    }
];