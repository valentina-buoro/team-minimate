import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

export const AudioRecorderComponent = () => {
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );
  
  const addAudioElement = (blob: Blob | MediaSource) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex gap-2">
        <button 
          onClick={() => {
            console.log('Start recording clicked');
            recorderControls.startRecording();
          }}
          disabled={recorderControls.isRecording}
          className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Start Recording
        </button>
        <button 
          onClick={() => {
            console.log('Stop recording clicked');
            recorderControls.stopRecording();
          }}
          disabled={!recorderControls.isRecording}
          className="px-4 py-2 bg-red-500 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Stop Recording
        </button>
      </div>
      
      {recorderControls.isRecording && (
        <div className="text-red-500 font-medium">
          Recording in progress...
        </div>
      )}
      
      <AudioRecorder 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        showVisualizer={true}
        classes={{
          AudioRecorderClass: 'hidden' // Hide the default recorder UI since we have custom buttons
        }}
      />
    </div>
  )
}