

import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from "../../backend/firebase/firebase_config";

import ProviderCards from "../../components/home_page/provider_cards/provider_cards";

const UserData = (props) => {
  const [data, setData] = useState([]);

  const fetchUserData = async (profession) => {
    const db = getFirestore(app); // Pass the app to getFirestore
    let q = collection(db, "users");
    
// if (profession) {
//       q = q.where("profession", "==", profession);
//     }

if (profession) {
  q = query(q, where("profession", "==", profession));
}

 
    const querySnapshot = await getDocs(q);
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
      fetchUserData(props.profession);
    }, [props.profession]);
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
