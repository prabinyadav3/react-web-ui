export const CandidateProfile = () => {
const name="Anish Yadav";
const title="Software Engineer";
const yearsOfExperience=2;
const isAvailable=true

  return (
      <>
        <h2>{name}</h2>
        <p>
            {title} with {yearsOfExperience} year of experience
        </p>
        <p>Started in {2025 -  yearsOfExperience}</p>
        <p>Status: {isAvailable ? "Available for hire": "Not Available for hire"}</p>
        <p>Contact: {name.toLowerCase().replace(' ','.')}@email.com</p>
      </>
    );
};