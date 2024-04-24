import MeetupList from "./components/meetups/MeetupList";
import "./globals.css";
const Dummy_Meetups = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://assets.weforum.org/article/image/responsive_large_webp_v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.webp",
    address: "Some Address 5, 123, abcd",
    description: "This is a first Meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://assets.weforum.org/article/image/responsive_large_webp_v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.webp",
    address: "Some Address 5, 123, abcd",
    description: "This is a second Meetup",
  },
  {
    id: "m2",
    title: "A third Meetup",
    image:
      "https://assets.weforum.org/article/image/responsive_large_webp_v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.webp",
    address: "Some Address 5, 123, abcd",
    description: "This is a third Meetup",
  },
];

async function getData() {
  //fetch data from an api
  return Dummy_Meetups;
}

async function HomePage() {
  const data = await getData();

  return <MeetupList meetups={data} />;
}

export default HomePage;
