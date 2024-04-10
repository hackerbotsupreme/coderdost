import { useState, useContext } from 'react';
import { places } from './data.jsx';
import { getImageUrl } from './utils.jsx';
import { ImageSizeContext } from './Context.jsx';

export default function App7() {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    return (

        <ImageSizeContext.Provider
            value={imageSize}
        >
            <label>
                <input
                    type="checkbox"
                    checked={isLarge}
                    onChange={e => {
                        setIsLarge(e.target.checked);
                    }}
                />
                Use large images
            </label>
            <hr />
            <List />
        </ImageSizeContext.Provider>
    )
}

function List() {
    const listItems = places.map(place =>
        <li key={place.id}>
            <Place place={place} />
        </li>
    );
    return <ul>{listItems}</ul>;
}

function Place({ place }) {
    return (
        <>
            <PlaceImage place={place} />
            <p>
                <b>{place.name}</b>
                {': ' + place.description}
            </p>
        </>
    );
}

function PlaceImage({ place }) {
    const imageSize = useContext(ImageSizeContext);
    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    );
}
// another easy approach i invented 
// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//     const [islarge, setislarge] = useState(false)
//     return (
//         <>
//             <label > <input
//                 type="checkbox"
//                 // checked = 
//                 onClick={() => { setislarge(!islarge) }}
//             />Use Large Images  </label>
//             <ul>
//                 {
//                     places.map(
//                         item => <li key={item.id} >
//                             <img src={`https://i.imgur.com/${item.imageId}l.jpg`} alt="No image is available"
//                                 height={islarge ? '300px' : '100px'}
//                                 width={islarge ? '300px' : '100px'}
//                             /><br />
//                             <b>{item.name}</b>{"   :"}{item.description}
//                         </li>
//                     )
//                 }
//             </ul>
//         </>
//     )
// }

// export const places = [{
//     id: 0,
//     name: 'Bo-Kaap in Cape Town, South Africa',
//     description: 'The tradition of choosing bright colors for houses began in the late 20th century.',
//     imageId: 'K9HVAGH'
// }, {
//     id: 1,
//     name: 'Rainbow Village in Taichung, Taiwan',
//     description: 'To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.',
//     imageId: '9EAYZrt'
// }, {
//     id: 2,
//     name: 'Macromural de Pachuca, Mexico',
//     description: 'One of the largest murals in the world covering homes in a hillside neighborhood.',
//     imageId: 'DgXHVwu'
// }, {
//     id: 3,
//     name: 'Selarón Staircase in Rio de Janeiro, Brazil',
//     description: 'This landmark was created by Jorge Selarón, a Chilean-born artist, as a "tribute to the Brazilian people".',
//     imageId: 'aeO3rpI'
// }, {
//     id: 4,
//     name: 'Burano, Italy',
//     description: 'The houses are painted following a specific color system dating back to 16th century.',
//     imageId: 'kxsph5C'
// }, {
//     id: 5,
//     name: 'Chefchaouen, Marocco',
//     description: 'There are a few theories on why the houses are painted blue, including that the color repels mosquitos or that it symbolizes sky and heaven.',
//     imageId: 'rTqKo46'
// }, {
//     id: 6,
//     name: 'Gamcheon Culture Village in Busan, South Korea',
//     description: 'In 2009, the village was converted into a cultural hub by painting the houses and featuring exhibitions and art installations.',
//     imageId: 'ZfQOOzf'
// }];


// export default App