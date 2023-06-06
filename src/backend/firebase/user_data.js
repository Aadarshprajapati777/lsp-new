

import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from "../../backend/firebase/firebase_config";

import ProviderCards from "../../components/home_page/provider_cards/provider_cards";

const UserData = () => {
  const [data, setData] = useState([]);

  const fetchUserData = async () => {
    const db = getFirestore(app); // Pass the app to getFirestore
    const querySnapshot = await getDocs(collection(db, "users"));
    const storage = getStorage(app); // Pass the app to getStorage
    const userData = await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const profileImageUrl = await getDownloadURL(
          ref(storage, doc.data().imageUrl)
        );
        return {
          name: doc.data().fullName,
          profile_image: profileImageUrl,
          address: doc.data().address,
          profession: doc.data().profession,
          contact: doc.data().phoneNumber,
          id: doc.id,
          ...doc.data(),
        };
      })
    );
    setData(userData);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <button className="button" key={item.id}>
          <ProviderCards
            name={item.name}
            profile_image={item.profile_image}
            profession={item.profession}
            address={item.address}
            contact={item.contact}
          />
        </button>
      ))}
    </div>
  );
};

export default UserData;
