function fetchData(mediaType) {
    const baseUrl = "https://images-api.nasa.gov/search";
    const queryParams = new URLSearchParams({
        'year_start': 2018,
        'year_end': 2018,
        'keywords': "mars",
        'media_type': mediaType
    });
    const url = `${baseUrl}?${queryParams}`;

    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

fetchData("image").then(data => {
    let surfaceMarsItems = [];
    const items = data.collection.items;
    items.forEach(item => {
        const itemData = item.data[0];
        const description = itemData.description;
        if (description.includes("surface")) {
            surfaceMarsItems.push(item)
        }
    })

    surfaceMarsItems.slice(0, 5).forEach(item => {
        const links = item.links;
        links.forEach(link => {
            const images = link.href
            console.log(`Planet Mars surface image: ${images}`)
        })
    })
})

fetchData("video").then(data => {
    const items = data.collection.items;
    items.forEach(item => {
        const collectionUrl = item.href;
        fetch(collectionUrl)
            .then(response => response.json())
            .then(collectionData => {
                const mediaLinks = collectionData.filter(link => link.endsWith('.mp4'))
                if (mediaLinks.length > 0) {
                    console.log(`${collectionUrl} include links to videos.`)
                } else {
                    console.log(`No videos were found in ${collectionUrl}.`)
                }
            })
            .catch(error => {
                console.error(`Error fetching data from ${collectionUrl}: ${error}`)
            })
    })
})


