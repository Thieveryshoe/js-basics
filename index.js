// what is this?
// this is the object that is executing the current function

// method (a function that is part of an object) => this represents that object
// function (function not part of an object) => this represents the global object (window in browser, global in node)

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
};

// both will log the video obj, the method concept of this
video.play();
video.stop();

function playVideo() {
    console.log(this);
}

// will log the window obj, the global concept of this
playVideo();

function GetVideo(title) {
    this.title = title;
    console.log(this);
}

// will be using the method concept as the js engine creates a new {} when using new keyword
const v = new GetVideo('b');

const album = {
    title: 'Ten',
    tags: ['alternative', '90s', 'grunge'],
    showTags() {
        this.tags.forEach(t => console.log(this.title, t));
    }
};

album.showTags();