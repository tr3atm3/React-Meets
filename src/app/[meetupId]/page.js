import MeetupDetail from "../components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";
async function MeetupDetails() {
  const client = await MongoClient.connect(
    "mongodb+srv://tushar:tushar@1@cluster0.dcudhdc.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return (
    <MeetupDetail
      image="https://assets.weforum.org/article/image/responsive_large_webp_v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.webp"
      title="First Meet up"
      address="some street 5"
      description="some description hello hello"
    />
  );
}

export default MeetupDetails;
