export default function ImportFiles() {
  const handleFileInputChange = (event) => {
    const files = Array.from(event.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = reader.result;
        const fileObject = {
          name: file.name,
          data: new Uint8Array(fileData),
        };
        window.electronAPI.SendToElectron("music-upload", fileObject);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  return (
    <div className="mb-3">
      <label
        className="block text-lg font-medium text-gray-400 mb-1"
        htmlFor="formFileMultiple"
      >
        Import Songs
      </label>
      <input
        className="block w-full text-sm text-white bg-[#212124] border border-[#171719] rounded file:cursor-pointer  file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#171719] file:text-white"
        type="file"
        id="formFileMultiple"
        multiple
        accept=".mp3"
        onChange={handleFileInputChange}
      />
    </div>
  );
}
