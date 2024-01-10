import HeaderBanner from "../Components/Home/Banner/headerBanner";
import WhoAreWe from "../Components/Home/whoAreWe";
import Testimonial from "../Components/Home/Testimonial/testimonials";
import SocialMediaSection from "../Components/Home/socialMediaSection";
import ChallengeSetsSection from "../Components/Home/ChallengeSets/challengeSetsSection";
import WorkingSection from "../Components/Home/Working/workingSection";
import Awards from "../Components/Home/Awards/awards";
import ImportantDates from "../Components/Home/Dates/importantDates";
import {
  WorkingData,
  ImportantDateData,
  AwardData,
  ChallengeSetData,
  TestimonialData,
} from "../Data/JSONData";

export default function Home() {
  return (
    <>
      <HeaderBanner />
      <WhoAreWe />
      <hr />
      <WorkingSection works={WorkingData} />
      <hr />
      <ImportantDates dates={ImportantDateData} />
      <hr />
      <Awards awards={AwardData} />
      <hr />
      <ChallengeSetsSection challengeSet={ChallengeSetData} />
      <hr />
      <Testimonial testimonials={TestimonialData} />
      <hr />
      <SocialMediaSection />
    </>
  );
}
