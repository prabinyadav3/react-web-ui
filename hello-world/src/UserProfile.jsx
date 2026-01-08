import { useState } from "react";

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Prabin Yadav",
    age: 25,
    email: "prabin@example.com",
    address: {
      city: "Kathmandu",
      country: "Nepal"  
    }
  });

  console.log("Component rendering, user:", user);

  const updateAge = () => {
    setUser({
      ...user,
      age: user.age + 1
    });
  };

  const updateName = () => {
    setUser({
      ...user,
      name: "John Doe"
    });
  };

    const updateMultiple = () => {
    setUser({
      ...user,
      name: "John Doe",
      age:21,
    });
  };

 const updateCity = () => {
    setUser({
      ...user,  
      address: {
        ...user.address,
        city: "New York",
      },
    });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Country: {user.address.country}</p>
      <button onClick={updateName}>Update Name</button>
      <button onClick={updateAge}>Update Age</button>
      <button onClick={updateMultiple}>Update Both</button>
      <button onClick={updateCity}>Update City</button>
    </div>
  );
};