import Header from './header'
function App() {
  const url = localStorage.getItem('url')
  return (
    <>
      <Header />
      <div className='flex flex-col'>
        {
          Array.from(Array(10).keys()).map((_, i) => (
            <div className='h-24 w-full' key={i}>
              Ok
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
