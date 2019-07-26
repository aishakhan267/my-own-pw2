let videos = [
    {
        title: "Photoshop tutorial",
        lengthInMinutes: 70,
        category: "Education",
        uploadDate: new Date("07-22-2019"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4700,
        rating: 4.3
    },
    {
        title: "Episode # 01 - The Best Comedy Show",
        lengthInMinutes: 19,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.9
    },
    {
        title: "How to use FOR EACH loop - tutorial by Tech Karo",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "Javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
    {
        title: "Wordpress tutorial",
        lengthInMinutes: 40,
        category: "Education",
        uploadDate: new Date("06-26-2019"),
        tags: "photoshop, creativity, frontend",
        features: ["Live", "HDR"],
        viewCount: 52000,
        rating: 9.2
    },
    {
        title: "React tutorial",
        lengthInMinutes: 100,
        category: "Education",
        uploadDate: new Date("02-18-2019"),
        tags: "digital, creativity",
        features: ["Live", "3D", "HD"],
        viewCount: 2300,
        rating: 3.3
    },
    {
        title: "Arrays tutorial",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("07-23-2019"),
        tags: "Javascript, arrays, technology",
        features: "Live",
        viewCount: 2000,
        rating: 2.1
    },
    {
        title: "JSON tutorial",
        lengthInMinutes: 3,
        category: "Education",
        uploadDate: new Date("07-12-2019"),
        tags: "Javascript, webdeveplopment",
        features: "HDR",
        viewCount: 3560,
        rating: 8.2
    },
    {
        title: "HTML tutorial",
        lengthInMinutes: 85,
        category: "Education",
        uploadDate: new Date("04-21-2019"),
        tags: "digital, innovative",
        features: "4D",
        viewCount: 7000,
        rating: 7.6
    },
    {
        title: "CSS tutorial",
        lengthInMinutes: 42,
        category: "Education",
        uploadDate: new Date("05-23-2019"),
        tags: "digital, newversion, multicolour",
        features: ["Top-level", "stabilize"],
        viewCount: 4600,
        rating: 5.1
    },
    {
        title: "Mobile tutorial",
        lengthInMinutes: 2,
        category: "Entertainment",
        uploadDate: new Date("05-18-2018"),
        tags: "diagonal, HTML filter",
        features: ["Smart Blur", "Technocolor", "Invert Colors"],
        viewCount: 2700,
        rating: 2.3
    },
    {
        title: "Whatsapp tutorial",
        lengthInMinutes: 5,
        category: ["Entertainment", "Informative", "understanding"],
        uploadDate: new Date("04-27-2017"),
        tags: "saturated, Technocolor",
        features: ["3D", "HQ3DN", "HSL"],
        viewCount: 6000,
        rating: 7.3
    }
];
// ques # 1
// for (let i = 0; i < videos.length; i++) {
//     console.log("Title : " + videos[i].title);
//     console.log("Length : " + videos[i].lengthInMinutes);
//     console.log("category : " + videos[i].category);
//     console.log("Views : " + videos[i].viewCount);
//     console.log("Uploaded On : " + videos[i].uploadDate);
//     console.log("Rating : " + videos[i].rating);
//     console.log("*************");
//     console.log("*************");
// }
// Ques # 2
// for(let i = 0; i < videos.length;i++){
//     if(videos[i].lengthInMinutes < 3){
//         console.log(videos[i].title)
//     };
// }
// Ques # 3
// for(let i = 0; i < videos.length;i++){
//     if(videos[i].lengthInMinutes > 20){
//         console.log(videos[i].title)
//     };
// };
// Ques # 4
// for(let i = 0; i < videos.length;i++){
//     if(videos[i].lengthInMinutes > 3 && videos[i].lengthInMinutes < 60){
//         console.log(videos[i].title)
//     };
// };
// Ques # 6
// for(let i = 0; i < videos.length;i++){
//     if(videos[i].category == "Education"){
//         console.log(videos[i].title)
//     };
// };
// Ques # 7
for(let i = 0; i < videos.length;i++){
    if(videos[i].tags == "Javascript"){
        console.log(videos[i].title)
    };
};