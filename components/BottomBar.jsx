import PlaylistIcon from "./icons/PlaylistIcon";
import ControlMusic from "./ControlMusic";

export default function BottomBar() {
  function handleModalPlaylist() {
    document.getElementById("modal-playlist").classList.toggle("hidden");
  }

  return (
    <nav className="fixed bottom-0 pt-4 w-full h-20 bg-[#1F1F22] flex justify-center items-center">
      <ControlMusic />
      <div className="absolute bottom-0 right-0 p-7">
        <PlaylistIcon onClick={handleModalPlaylist} />
      </div>
    </nav>
  );
}
