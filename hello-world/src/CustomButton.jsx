export const CustomButton = ({ text }) => {
    const name ="Custom Button";

    const handleClick = () => {
        console.log(`Hey ${name}'you clicked ${text}`);
   };

  return <button onClick={handleClick}>{text}</button>;
};