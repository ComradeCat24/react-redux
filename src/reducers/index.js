import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "High School", artist: "Alexander 23", duration: "4:05" },
    { title: "Beige", artist: "Yoke Lore", duration: "2:30" },
    { title: "comethru", artist: "Jeremy Zucker", duration: "3:15" },
    { title: "Stay", artist: "Gracie Abrams", duration: "1:45" },
    { title: "Heather", artist: "Conan Gray", duration: "3:40" },
    { title: "Your Shirt", artist: "Chelsea Cutler", duration: "1:35" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
