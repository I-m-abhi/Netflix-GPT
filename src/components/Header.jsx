import NetflixLogo from '../utils/Netflix_Logo_PMS.png';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
// import { gptSearch } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
// import { changeLang } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    // dispatch(gptSearch());
  }

  const handleLanguageChange = (e)=> {
    dispatch(changeLang(e.target.value));
  }

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-36' src={NetflixLogo} alt="logo" />
      {user && (
        <div className="flex p-2">
          {/* {showGptSearch && (
            <select
            className="p-2 m-2 bg-gray-900 text-white"
          onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          )} */}
          
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearch}
          >
            {/* {showGptSearch ? "Homepage" : "GPT Search"} */}
          </button>
          <img className='w-8' src={user?.photoURL} alt="userIcon" />
          <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
        </div>
      )}
    </div>
  )
}

export default Header;
