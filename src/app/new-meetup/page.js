"use client";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetuphandler(enteredMeetUpData) {
    console.log(enteredMeetUpData);
  }
  return <NewMeetupForm onAddMeetup={addMeetuphandler} />;
}

export default NewMeetupPage;
