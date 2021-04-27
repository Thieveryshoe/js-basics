// const video = {
//     title: 'Video Title',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function (tag) {
//             console.log(this.title, tag);
//         }, this);
//     }
// }

// video.showTags();

// this isn't a good approach, but it's out there and exists
// const album = {
//     title: 'Album Title',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this; // sometimes self == that, personal preference
//         this.tags.forEach(function (tag) {
//             console.log(self.title, tag);
//         });
//     }
// }
// album.showTags();

// remember, functions are objects
function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'call - John'}, 1, 2); // set this with the called object and call function
playVideo.apply({ name: 'apply - John'}, [1, 2]); // set this with the called object and call function
const fn = playVideo.bind({ name: 'bind - John'}, 1, 2);
fn();
playVideo(); // window

// there is a newer solution than this in ES6 
const video = {
    title: 'Video Title',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
}

video.showTags();

// arrow functions inherit the this value
const album = {
    title: 'Ten',
    tags: ['alternative', '90s', 'grunge'],
    showTags() {
        this.tags.forEach(t => console.log(this.title, t));
    }
};

album.showTags();