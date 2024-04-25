"use client";

import { useRouter } from "next/navigation";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetuphandler(enteredMeetUpData) {
    const resposne = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resposne.json();
    console.log(data);
    router.push("/");
  }
  return <NewMeetupForm onAddMeetup={addMeetuphandler} />;
}

export default NewMeetupPage;
