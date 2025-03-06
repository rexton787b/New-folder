const galleryUlRef = document.querySelector("#gallery");

const gallery = []
const images=[
    "https://picsum.photos/https://fastly.picsum.photos/id/804/300/400.jpg?hmac=Y6cx9oentnw75-Q7gYdlaJBBAnSAlUHRYXbvFMIrZNI",
    "https://picsum.photos/https://fastly.picsum.photos/id/185/300/400.jpg?hmac=7jvc9SGhArOCJhgLoOfYSTezJsc1xrIXhDOXkiZSrbs",
    "https://picsum.https://fastly.picsum.photos/id/229/300/400.jpg?hmac=CZOWn8sQ8oa9EfbMZw5tYqPMNKK0mNOYUsEgz81K8iophotos/220",
    "https://fastly.picsum.photos/id/211/300/400.jpg?hmac=l0zi1AkBxaPoAMnWav0iWH8TsWfblHXdm_IGSNDMFWQ",

];

for (let i = 0; i < gallery.length; i++) {
    const galleryy = gallery[i];
    console.log(galleryy);

    const image= images[i];

    const imageHtml = "<img src='"+ image +"' alt='' />";

    galleryUlRef.innerHTML += "<li>" + galleryy + imageHtml + "</li>";    
}