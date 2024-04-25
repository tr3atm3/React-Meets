import MeetupList from "./components/meetups/MeetupList";
import "./globals.css";
import Head from "next/head";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
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
  const client = await MongoClient.connect(
    "mongodb+srv://tushar:tushar@1@cluster0.dcudhdc.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  const data = meetups.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    id: meetup._id.toString(),
  }));
  return data;
}

async function HomePage() {
  const data = await getData();

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active react meetups"
        />
      </Head>
      <MeetupList meetups={data} />;
    </Fragment>
  );
}

export default HomePage;
