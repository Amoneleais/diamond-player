import MainScreen from "../components/MainScreen";
import BottomBar from "../components/BottomBar";
import Toast from "@/components/Toast";
import ModalPlaylist from "@/components/ModalPlaylist";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Toast />
      <MainScreen />
      <BottomBar />
      <ModalPlaylist />
    </main>
  );
}
