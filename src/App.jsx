import './App.css'
import ImageUploadButton from './components/ImageUploadButton'

function App() {

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        className="absolute "
        src="/background1.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex justify-center">
        <div className='flex flex-col justify-center h-screen'>
          <ImageUploadButton />
        </div>
      </div>
    </div>
  )
}

export default App
