import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://image.api.playstation.com/vulcan/img/rnd/202010/2614/O2Z66UWrZH8zcejxopwWxhGu.png"
      title="First Meetup"
      address="Some Street"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/O2Z66UWrZH8zcejxopwWxhGu.png",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
